export interface AccessCredentials {
  accessToken: string;
  accessTokenExpiresIn: number;
  idmStatusOK: boolean;
  isGuestToken: boolean;
  refreshToken: string;
  refreshTokenExpiresIn: number;
  tokensIssuedAt: Date;
}
