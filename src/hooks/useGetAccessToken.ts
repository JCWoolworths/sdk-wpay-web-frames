import { useQuery } from "@tanstack/react-query";
import { AccessCredentials } from "../types/authentication.types";
import { HTTP_VERBS } from "../types/requests.types";

export const useGetAccessToken = (
  apiKey: string,
  rewardsToken: string,
  username: string,
  shopperId: string
): Array<string | null> => {
  const { data }: { data?: AccessCredentials } = useQuery(
    [
      HTTP_VERBS.POST,
      "/idm/server/token",
      {},
      {
        "x-api-key": apiKey,
        "x-everyday-pay-wallet": true,
        "x-message-id": `${rewardsToken}-${apiKey}`,
        "x-channel": "Online",
        authorization: rewardsToken,
      },
      {
        username,
        shopperId,
      },
    ],
    { staleTime: Infinity }
  );

  return [data ? data.accessToken : null];
};
