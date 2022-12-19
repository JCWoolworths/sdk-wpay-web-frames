import { useMutation } from "@tanstack/react-query";
import { TokenizeResponse, GiftCardStatus } from "../types/giftCard.types";
import { HTTP_VERBS } from "../types/requests.types";

interface AddGiftCardParams {
  cardNumber: string;
  pinCode: string;
}

type AddGiftCardFn = (params: AddGiftCardParams) => void;

export const useAddGiftCard = (
  apiKey: string,
  accessToken: string
): {
  addGiftCard: AddGiftCardFn;
  giftCardStatus: GiftCardStatus;
  error: any;
} => {
  const request = {
    method: HTTP_VERBS.POST,
    url: "/edpay/customer/giftcard/tokenize",
    params: {},
    headers: {
      "x-api-key": apiKey,
      "x-everyday-pay-wallet": true,
      "x-message-id": `${accessToken}-${apiKey}`,
      "x-channel": "Online",
      authorization: accessToken,
    },
  };

  const {
    data,
    error,
    isSuccess,
    mutate,
  }: {
    data?: TokenizeResponse;
    mutate;
    error;
    isSuccess: boolean;
  } = useMutation([request]);

  const addGiftCard: AddGiftCardFn = ({ cardNumber, pinCode }) => {
    mutate({
      ...request,
      body: {
        data: {
          cardNumber,
          pinCode,
          primary: true,
          save: true,
        },
      },
    });
  };
  const giftCardStatus = isSuccess
    ? extractCardStatus(data)
    : GiftCardStatus.UNKNOWN;

  return {
    giftCardStatus,
    addGiftCard,
    error,
  };
};

const extractCardStatus = (data: TokenizeResponse): GiftCardStatus => {
  const { status } = data;

  if (status === 200) {
    return GiftCardStatus.VALID;
  }
  if (status === 422) {
    const { errorCode } = data;

    switch (errorCode) {
      case "EDP-001":
        return GiftCardStatus.EXPIRED;
      case "EDP-002":
        return GiftCardStatus.EXCEEDED;
      case "EDP-003":
        return GiftCardStatus.INELIGIBLE;
      default:
        return GiftCardStatus.INVALID;
    }
  }
  return GiftCardStatus.UNKNOWN;
};
