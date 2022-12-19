export enum GiftCardStatus {
  UNVERIFIED_PERSISTENT = "UNVERIFIED_PERSISTENT",
  VERIFIED = "VERIFIED",
}

export interface GiftCard {
  paymentInstrumentId: string;
  status: GiftCardStatus;
  lastUpdated: string;
  lastUsed: string;
  primary: boolean;
  allowed: boolean;
  programName: string;
  cardSuffix: string;
}

export interface Tokenize {
  giftCard: GiftCard;
  balance: number;
  expiryDay: string;
  expiryMonth: string;
  expiryYear: string;
  expired: boolean;
}

export enum GiftCardStatus {
  VALID,
  INVALID,
  EXPIRED,
  EXCEEDED,
  INELIGIBLE,
  UNKNOWN,
}

export interface InvalidTokenize {
  errorCode: string;
  errorDetail: string;
  errorMessage: string;
}

export interface TokenizeResponse extends Tokenize, InvalidTokenize {
  status: number;
}
