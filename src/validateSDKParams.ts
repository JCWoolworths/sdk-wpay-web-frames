import { getMissingRequiredParams } from "./utils/common";

interface SDKParams {
  elementId: string;
  rewardsToken?: string;
  accessToken?: string;
  apiKey: string;
  shopperId: string;
  username: string;
  baseURL: string;
}

export const validateSDKParams = ({
  elementId,
  apiKey,
  shopperId,
  username,
  baseURL,
  rewardsToken,
  accessToken,
}: SDKParams): boolean => {
  const missingRequiredParams = getMissingRequiredParams({
    elementId,
    apiKey,
    shopperId,
    username,
    baseURL,
  });

  if (missingRequiredParams.length) {
    console.info(
      `Missing required parameters: ${missingRequiredParams.join(", ")}`
    );

    return false;
  }
  // User must provide either the rewards token or the access token
  if (!rewardsToken && !accessToken) {
    console.info(
      `Missing rewards or access token: ${missingRequiredParams.join(", ")}`
    );
    return false;
  }

  return true;
};
