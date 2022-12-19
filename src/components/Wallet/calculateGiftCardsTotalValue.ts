import { compose } from "../../utils/fp";
import { formatToTwoPointCurrency } from "../../utils/currency";
import { GiftCard } from "../../types/wallet.types";

export const calculateTotalGiftCardsValue = (giftCards: GiftCard[]): number => {
  return giftCards
    ? giftCards.reduce((total: number, giftCard: GiftCard) => {
        if (!giftCard.balanceDetail || !giftCard.balanceDetail.balance) {
          return total;
        }

        return total + giftCard.balanceDetail.balance;
      }, 0)
    : 0;
};

export const totalGiftCardsValue = compose(
  formatToTwoPointCurrency,
  calculateTotalGiftCardsValue
);
