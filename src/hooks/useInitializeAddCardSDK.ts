import { useEffect } from "react";
import { useTheme, Theme } from "@emotion/react";
import * as frames from "@wpay/frames";
import { useWalletAccessContext } from "../context/useWalletAccessContext";

const capture3DSCard = async (framesSDK: any, sessionId: string) => {
  // Create a new payment validation frames action
  const validateAction = framesSDK.createAction(
    frames.ActionTypes.ValidateCard,
    {
      sessionId,
      threeDS: {
        env: "staging", // isProduction ? "prod" : "staging",
        consumerAuthenticationInformation: {
          acsWindowSize: "01",
        },
      },
    }
  );

  await validateAction.start();

  validateAction.createFramesControl(
    "ValidateCard",
    "edpay-add-bank-card-overlay"
  );

  const elementHandle = document.getElementById(
    "edpay-add-bank-card-overlay"
  ) as HTMLElement;

  const renderEventListener = () => {
    // Do something on render
    console.log("3d renderEventListener");
  };

  const closeEventListener = () => {
    // Do something on close
    console.log("3d closeEventListener");
  };

  // Add the event listeners for OnRender and OnClose for the 3DS challenge response
  elementHandle.addEventListener(
    frames.FramesCardinalEventType.OnRender,
    renderEventListener
  );
  elementHandle.addEventListener(
    frames.FramesCardinalEventType.OnClose,
    closeEventListener
  );

  // Remove the event listeners for OnRender and OnClose for the 3DS challenge response
  elementHandle.removeEventListener(
    frames.FramesCardinalEventType.OnRender,
    renderEventListener
  );
  elementHandle.removeEventListener(
    frames.FramesCardinalEventType.OnClose,
    closeEventListener
  );

  // Check card enrolment, allowing cardinal show issuer challenge
  const authorizationResponse = await validateAction.complete();

  // 3DS check complete, use returned information to provide a challenge response within the payment endpoint
  console.log(
    `3DS authorization complete: ${JSON.stringify(authorizationResponse)}`
  );

  return authorizationResponse;
};

const captureCard = (framesSDK, captureCardAction) => async () => {
  try {
    await captureCardAction.submit();

    const completeResponse = await captureCardAction.complete(true);

    if (completeResponse.errorCode === "3DS_001") {
      console.log("Capture card completeResponse = ", completeResponse);
      // 3.1.1 Perform 3DS Card Capture
      // In order to provide the 3DS evidence to the tokenisation process, we need to capture 3DS
      const authorizationResponse = await capture3DSCard(
        framesSDK,
        completeResponse.token
      );
      console.log(
        "capture3DSCard authorization response = ",
        authorizationResponse
      );
    }
  } catch (err: any) {
    console.error(err);
  }
};

const errorMap: Map<string, string> = new Map([
  ["Card No. Required", "Please enter a valid card number."],
  ["Invalid Card No.", "Please enter a valid card number."],
  ["Invalid Expiry", "Please enter a valid expiry."],
  ["Incomplete Expiry", "Please enter a valid expiry"],
  [
    "Expired card",
    "The expiry entered is in the past. Please enter a valid expiry.",
  ],
  ["Invalid CVV", "Please enter a valid CVV."],
]);

const styleCardNo = (theme: Theme) => {
  return {
    cardNo: {
      cardType: {
        style: {
          display: "none",
        },
      },
      style: {
        padding: "16px 12px",
        border: `1px solid ${theme.colors.everydayUniversal.extended.grey.light20}`,
        color: theme.colors.everydayUniversal.extended.charcoal.light40,
        width: "100%",
        height: "48px",
        "border-radius": "2px",
        margin: 0,
        fontStyle: theme.fonts.freshSansRegularFont,
        "font-weight": theme.fontWeights.normal,
        "font-size": theme.fontSizes.md,
        "line-height": theme.fontSizes.md,
      },
    },
    style: {
      height: "48px",
    },
    allowAutoComplete: true,
  };
};

const styleCardExpiry = (theme: Theme) => {
  return {
    cardExpiry: {
      cardType: {
        style: {
          display: "none",
        },
      },
      style: {
        padding: "16px 12px",
        border: `1px solid ${theme.colors.everydayUniversal.extended.grey.light20}`,
        color: theme.colors.everydayUniversal.extended.charcoal.light40,
        width: "119px",
        height: "48px",
        "border-radius": "2px",
        margin: 0,
        fontStyle: theme.fonts.freshSansRegularFont,
        "font-weight": theme.fontWeights.normal,
        "font-size": theme.fontSizes.md,
        "line-height": theme.fontSizes.md,
      },
    },
    style: {
      height: "48px",
      width: "119px",
    },
    allowAutoComplete: true,
  };
};

const styleCardCVV = (theme: Theme) => {
  return {
    cardCVV: {
      cardType: {
        style: {
          display: "none",
        },
      },
      style: {
        padding: "16px 12px",
        border: `1px solid ${theme.colors.everydayUniversal.extended.grey.light20}`,
        color: theme.colors.everydayUniversal.extended.charcoal.light40,
        width: "119px",
        height: "48px",
        "border-radius": "2px",
        margin: 0,
        fontStyle: theme.fonts.freshSansRegularFont,
        "font-weight": theme.fontWeights.normal,
        "font-size": theme.fontSizes.md,
        "line-height": theme.fontSizes.md,
      },
    },
    style: {
      height: "48px",
      width: "119px",
    },
    allowAutoComplete: true,
  };
};

const validateInput = (captureCardAction: any) => async () => {
  const errors = captureCardAction.errors();
  console.log("Errors : ", errors);
};

const addEventListeners = (
  addCard: () => void,
  validateCardField: () => void
) => {
  const txtCardNo = document.getElementById("cardNo");
  const txtCardExpiry = document.getElementById("cardExpiry");
  const txtCardCVV = document.getElementById("cardCVV");
  const btnAddCard = document.getElementById("addCard");

  txtCardExpiry.addEventListener(
    frames.FramesEventType.OnValidated,
    validateCardField
  );
  txtCardNo.addEventListener(
    frames.FramesEventType.OnValidated,
    validateCardField
  );
  txtCardCVV.addEventListener(
    frames.FramesEventType.OnValidated,
    validateCardField
  );
  // IF see a message "[Violation] 'click' handler" in the console it is because useRe.current comes up null each time here so I can't use that hook
  btnAddCard.addEventListener("click", () => addCard());
};

// For more information on initializing the frames SDK visit: https://developerhub.wpay.com.au/digitalpayments/docs/integrate-frames-into-your-site
const initializeSDK = async (
  accessToken: string,
  apiKey: string,
  theme: Theme
) => {
  const environment = "pt-api";
  const baseUrl = `https://${environment}.wpay.com.au/wow/v1`;
  const framesApiBaseUrl = `${baseUrl}/pay/instore`;

  //Instantiate the frames SDK, this will allow us to capture user card information.
  const framesSDK = new frames.FramesSDK({
    apiKey: apiKey,
    authToken: `Bearer ${accessToken}`,
    apiBase: framesApiBaseUrl,
    logLevel: frames.LogLevel.DEBUG,
  });

  // Once the page has loaded, initialize a new card capture action.
  const captureCardAction = framesSDK.createAction(
    frames.ActionTypes.CaptureCard,
    {
      save: true,
      verify: true,
      threeDS: {
        requires3DS: true,
      },
    }
  );

  await captureCardAction.start();

  captureCardAction.createFramesControl("CardNo", "cardNo", styleCardNo(theme));
  captureCardAction.createFramesControl(
    "CardExpiry",
    "cardExpiry",
    styleCardExpiry(theme)
  );
  captureCardAction.createFramesControl(
    "CardCVV",
    "cardCVV",
    styleCardCVV(theme)
  );

  const validateCardField = validateInput(captureCardAction);
  const addCard = captureCard(framesSDK, captureCardAction);

  addEventListeners(addCard, validateCardField);
};

const useInitializeAddCardSDK = () => {
  const theme = useTheme();
  const { apiKey, accessToken } = useWalletAccessContext();

  useEffect(() => {
    initializeSDK(accessToken, apiKey, theme).catch((err: unknown) =>
      console.log("Frames SDK init error: ", err)
    );
  }, [accessToken, apiKey]);

  return [captureCard];
};

export default useInitializeAddCardSDK;
