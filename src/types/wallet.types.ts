export interface CreditCard {
  allowed: boolean;
  cardName: string;
  cardSuffix: string;
  cvvValidated: boolean;
  expired: boolean;
  expiryMonth: string;
  expiryYear: string;
  lastUpdated: string;
  lastUsed: string;
  createdOn: string;
  paymentInstrumentId: string;
  paymentToken: string;
  primary: boolean;
  requiresCVV: boolean;
  scheme: string;
  status: string;
  stepUp: {
    mandatory: boolean;
    type: string;
    url: string;
  };
  updateURL: string;
}

export enum BankCardTypes {
  MASTERCARD = "MASTERCARD",
  VISA = "VISA",
}

export interface GiftCard {
  allowed: boolean;
  paymentToken: string;
  balanceDetail: {
    balance: number;
  };
}

export interface Payment {
  primaryInstrumentId: string;
  secondaryInstruments: {
    order: string;
    enableSecondaryInstruments: boolean;
  };
}

export interface EverydayPayWallet {
  creditCards: CreditCard[];
  giftCards: GiftCard[];
}

export interface Wallet {
  everydayPay: EverydayPayWallet;
  preferences: {
    payments: Payment;
  };
}
