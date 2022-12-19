import { useState } from "react";
import styled from "@emotion/styled";
import { CreditCard } from "../../../types/wallet.types";
import BankCard from "./BankCard";
import NoBankCards from "./NoBankCards";

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

interface BankCardListProps {
  creditCards: CreditCard[];
  selectBankCardHandler: (creditCard: CreditCard) => any;
  selectedBankCard: CreditCard;
}

const BankCardList = ({
  creditCards,
  selectBankCardHandler,
  selectedBankCard,
}: BankCardListProps) => {
  const hasBankCards = creditCards && creditCards.length > 0;

  const noCardToPayWith =
    !creditCards ||
    creditCards.length === 0 ||
    (creditCards.length === 1 &&
      creditCards.filter((creditCard: CreditCard) => creditCard.expired)) ||
    selectedBankCard.expired;

  return (
    <CardList>
      {hasBankCards &&
        creditCards.map((creditCard: CreditCard) => {
          const { cardSuffix } = creditCard;
          const onSelect = () => {
            selectBankCardHandler(creditCard);
          };
          const selected =
            selectedBankCard && cardSuffix === selectedBankCard.cardSuffix;

          return (
            <BankCard
              key={cardSuffix}
              selected={selected}
              onSelect={onSelect}
              creditCard={creditCard}
            />
          );
        })}
      {noCardToPayWith && <NoBankCards />}
    </CardList>
  );
};

export default BankCardList;
