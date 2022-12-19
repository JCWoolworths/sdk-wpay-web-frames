import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";
import {
  BankCardTypes,
  GiftCard,
  CreditCard,
} from "../../../types/wallet.types";
import { RobotoFont } from "../../../assets/theme/EverydayPay/fonts";
import Logo, { LogoTypes, LogoCategories } from "../../General/Logo";
import { totalGiftCardsValue } from "../calculateGiftCardsTotalValue";
import { Container, InfoText, Section } from "./PayingWithDetails.styles";

const CardTypes = {
  [BankCardTypes.MASTERCARD]: LogoTypes.MasterCard,
  [BankCardTypes.VISA]: LogoTypes.VisaCard,
};

interface PayingWithDetailsProps {
  creditCard: CreditCard;
  giftCards: GiftCard[];
  applyGiftCards: boolean;
}

const PayingWithDetails = ({
  creditCard,
  giftCards,
  applyGiftCards,
}: PayingWithDetailsProps) => {
  const totalValue = totalGiftCardsValue(giftCards);
  const type = BankCardTypes[creditCard.scheme];

  return (
    <Container>
      <InfoText fontFamily={RobotoFont}>Paying with:</InfoText>
      {giftCards && giftCards.length > 0 && applyGiftCards && (
        <>
          <Section>
            <Logo
              category={LogoCategories.Cards}
              type={LogoTypes.GenericCard}
              alt="Gift Card"
              width="24px"
              height="24px"
            />
            <InfoText fontFamily={RobotoFont}>{totalValue}</InfoText>
          </Section>
          <InfoText w="16px" fontFamily={RobotoFont}>
            +
          </InfoText>
        </>
      )}
      <Section>
        <Logo
          category={LogoCategories.Cards}
          type={CardTypes[type]}
          alt="Card"
          width="24px"
          height="24px"
        />
        <InfoText fontFamily={RobotoFont}>{creditCard.cardSuffix}</InfoText>
      </Section>
    </Container>
  );
};

export default PayingWithDetails;
