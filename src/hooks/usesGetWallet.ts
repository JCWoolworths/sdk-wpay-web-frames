import { useQuery } from "@tanstack/react-query";
import { HTTP_VERBS } from "../types/requests.types";
import { Wallet, EverydayPayWallet } from "../types/wallet.types";

interface CustomerWalletResponse {
  data: Wallet;
}

export const useGetWallet = (
  apiKey: string,
  accessToken: string | null,
  groupId?: string
): { wallet: EverydayPayWallet; refetch: () => any } => {
  const {
    data,
    refetch,
  }: { data?: CustomerWalletResponse; refetch: () => any } = useQuery(
    [
      HTTP_VERBS.GET,
      "/edpay/customer/wallet",
      { groupId, exclude: "GC_ZERODOLLAR,GC_EXPIRED,PREFERENCES" },
      {
        "x-api-key": apiKey,
        "x-everyday-pay-wallet": true,
        "x-message-id": `${accessToken}-${apiKey}`,
        "x-channel": "Online",
        authorization: accessToken,
      },
      {},
    ],
    {
      enabled: !!accessToken,
      retry: false,
    }
  );

  return {
    wallet:
      data && data.data && data.data.everydayPay
        ? data.data.everydayPay
        : undefined,
    refetch,
  };
};
