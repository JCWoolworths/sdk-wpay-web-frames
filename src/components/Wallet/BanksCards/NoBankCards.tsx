import { useState } from "react";
import { RobotoFont } from "../../../assets/theme/EverydayPay/fonts";
import AddUpdateCardModal, {
  CardAction,
  CardTypes,
} from "../../../components/AddUpdateCardModal";
import Icon, { IconTypes } from "../../General/Icon";
import { Container, Message, AddBankCardLink } from "./NoBankCards.styles";

const NoBankCards = () => {
  const [openAddBankCard, setOpenAddBankCard] = useState(false);

  return (
    <>
      <Container>
        <Icon
          type={IconTypes.ErrorFilled}
          alt="Error"
          height="16px"
          width="16px"
        />
        <Message
          fontFamily={RobotoFont}
          w={[180, 226, 226]}
          color="everydayUniversal.secondary.charcoal"
        >
          To use Everyday Pay you need to add a Bank Card
        </Message>
        <AddBankCardLink
          variant="brandPrimary"
          fontFamily={RobotoFont}
          onClick={() => setOpenAddBankCard(true)}
        >
          Add Bank Card
        </AddBankCardLink>
      </Container>
      <AddUpdateCardModal
        isOpen={openAddBankCard}
        onClose={() => setOpenAddBankCard(false)}
        cardType={CardTypes.BankCard}
        cardAction={CardAction.Add}
      />
    </>
  );
};

export default NoBankCards;
