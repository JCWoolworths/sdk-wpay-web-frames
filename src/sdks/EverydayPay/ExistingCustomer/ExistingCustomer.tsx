import { useState } from "react";
import styled from "@emotion/styled";
import { EverydayPayWallet, CreditCard } from "../../../types/wallet.types";
import {
  GiftCards,
  BankCards,
  PayingWithDetails,
} from "../../../components/Wallet";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const initialSelectedCard = (creditCards: CreditCard[]): CreditCard | null => {
  if (!creditCards && creditCards.length === 0) {
    return null;
  }

  if (creditCards.length === 1) {
    return creditCards[0];
  }
  return creditCards.find((creditCard: CreditCard) => creditCard.primary);
};

interface WalletProps {
  wallet: EverydayPayWallet;
  toggleGiftCardHandler: (on: boolean) => any;
  selectBankCardHandler: (creditCard: CreditCard) => any;
  addGiftCardHandler: () => any;
}

const ExistingCustomer = ({
  wallet,
  toggleGiftCardHandler,
  selectBankCardHandler,
  addGiftCardHandler,
}: WalletProps) => {
  const { giftCards = [], creditCards = [] } = wallet;

  const [selectedBankCard, setSelectedBankCard] = useState(
    initialSelectedCard(creditCards)
  );

  const [applyGiftCards, setApplyGiftCards] = useState(false);

  const selectBankCard = (creditCard: CreditCard) => {
    setSelectedBankCard(creditCard);
    selectBankCardHandler(creditCard);
  };
  const useGiftCards = (on: boolean) => {
    toggleGiftCardHandler(on);
    setApplyGiftCards(on);
  };

  return (
    <Container>
      <GiftCards
        giftCards={giftCards}
        toggleGiftCardHandler={useGiftCards}
        addGiftCardHandler={addGiftCardHandler}
      />
      <BankCards
        bankCards={creditCards}
        selectBankCardHandler={selectBankCard}
        selectedBankCard={selectedBankCard}
      />
      {!selectedBankCard.expired && (
        <PayingWithDetails
          giftCards={giftCards}
          applyGiftCards={applyGiftCards}
          creditCard={selectedBankCard}
        />
      )}
    </Container>
  );
};

export default ExistingCustomer;
