import { useState } from "react";
import {
  RobotoFont,
  FreshSansMediumFont,
} from "../../../assets/theme/EverydayPay/fonts";
import AddUpdateCardModal, {
  CardAction,
  CardTypes,
} from "../../../components/AddUpdateCardModal";
import { CreditCard } from "../../../types/wallet.types";
import {
  Layout,
  Row,
  BankCardsLabel,
  AddBankCardLink,
} from "./BankCards.styles";
import BankCardList from "./BankCardList";
interface BankCardsProps {
  bankCards: CreditCard[];
  selectBankCardHandler: (creditCard: CreditCard) => any;
  selectedBankCard: CreditCard;
}
const BankCards = ({
  bankCards,
  selectBankCardHandler,
  selectedBankCard,
}: BankCardsProps) => {
  const [openAddBankCard, setOpenAddBankCard] = useState(false);
  const hasBankCards = bankCards && bankCards.length > 0;

  return (
    <>
      <Layout>
        <Row>
          <BankCardsLabel fontFamily={FreshSansMediumFont}>
            Bank Cards
          </BankCardsLabel>
          {hasBankCards && (
            <AddBankCardLink
              variant="brandPrimary"
              fontFamily={RobotoFont}
              onClick={() => setOpenAddBankCard(true)}
            >
              Add Bank Card
            </AddBankCardLink>
          )}
        </Row>
        <BankCardList
          selectBankCardHandler={selectBankCardHandler}
          creditCards={bankCards}
          selectedBankCard={selectedBankCard}
        />
      </Layout>
      <AddUpdateCardModal
        isOpen={openAddBankCard}
        onClose={() => setOpenAddBankCard(false)}
        cardType={CardTypes.BankCard}
        cardAction={CardAction.Add}
        onSuccess={() => {}}
      />
    </>
  );
};

export default BankCards;
