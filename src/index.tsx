import { createRoot } from "react-dom/client";
import EverydayPay from "./sdks/EverydayPay";
import Setup from "./Setup";
import { validateSDKParams } from "./validateSDKParams";
import { CreditCard } from "./types/wallet.types";
interface EverydayPayNewParams {
  elementId: string;
  rewardsToken?: string;
  accessToken?: string;
  apiKey: string;
  shopperId: string;
  username: string;
  baseURL: string;
  toggleGiftCardHandler: (on: boolean) => any;
  selectBankCardHandler: (creditCard: CreditCard) => any;
  hasBorder: boolean;
}

// Interface for configuring and rendering any widget we want
export default {
  widgets: {
    // Later we can add other widgets here
    everydayPay: {
      new: ({
        elementId,
        rewardsToken,
        accessToken,
        apiKey,
        shopperId,
        username,
        baseURL,
        toggleGiftCardHandler,
        selectBankCardHandler,
        hasBorder,
      }: EverydayPayNewParams) => {
        let root = null;

        const paramsIsValid = validateSDKParams({
          elementId,
          rewardsToken,
          accessToken,
          apiKey,
          shopperId,
          username,
          baseURL,
        });

        const targeElement = document.getElementById(elementId);
        if (!targeElement) {
          console.info("No element with the provided element id exists.");
        } else {
          root = createRoot(targeElement);
        }

        return {
          render: () => {
            if (paramsIsValid && root) {
              root.render(
                <Setup baseURL={baseURL}>
                  <EverydayPay
                    key={`${rewardsToken}_${apiKey}`}
                    rewardsToken={rewardsToken}
                    accessToken={accessToken}
                    apiKey={apiKey}
                    username={username}
                    shopperId={shopperId}
                    toggleGiftCardHandler={toggleGiftCardHandler}
                    selectBankCardHandler={selectBankCardHandler}
                    hasBorder={hasBorder}
                  />
                </Setup>
              );
            }
          },

          unmount() {
            root.unmount();
          },
        };
      },
    },
  },
};
