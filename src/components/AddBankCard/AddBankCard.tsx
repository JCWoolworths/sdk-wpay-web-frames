import { Text } from "@chakra-ui/react";
import {
  RobotoFont,
  FreshSansMediumFont,
} from "../../assets/theme/EverydayPay/fonts";
import Logo, { LogoTypes, LogoCategories } from "../General/Logo";
import {
  Container,
  AddCardButton,
  FrameSDKButtonContainer,
  Fields,
  Field,
  LogoContainer,
} from "./AddBankCard.styles";
import useInitializeAddCardSDK from "../../hooks/useInitializeAddCardSDK";
import Banner from "./Banner";
import TermsAndConditions from "./TermsAndConditions";
import Info from "./Info";

const AddBankCard = () => {
  useInitializeAddCardSDK();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Container>
        <Banner />
        <Fields>
          <Field>
            <Text variant="cardFieldLabel" fontFamily={RobotoFont}>
              Card number
            </Text>
            <div id="cardNo"></div>
          </Field>
          <Field>
            <Text variant="cardFieldLabel" fontFamily={RobotoFont}>
              Exp MM/YY
            </Text>
            <div id="cardExpiry"></div>
          </Field>
          <Field>
            <Text variant="cardFieldLabel" fontFamily={RobotoFont}>
              CVV
            </Text>
            <div id="cardCVV"></div>
          </Field>
          <LogoContainer>
            <Logo
              category={LogoCategories.Cards}
              type={LogoTypes.CreditDebitCard}
              alt="Visa Master American Express Logo"
              width="114px"
              height="32px"
            />
          </LogoContainer>
        </Fields>
        <Info />
        <TermsAndConditions />
      </Container>
      <div id="edpay-add-bank-card-overlay"></div>
      <FrameSDKButtonContainer>
        <AddCardButton
          fontFamily={FreshSansMediumFont}
          fontWeight="medium"
          variant="primary"
          id="addCard"
        >
          Add Bank Card
        </AddCardButton>
      </FrameSDKButtonContainer>
    </div>
  );
};

export default AddBankCard;
