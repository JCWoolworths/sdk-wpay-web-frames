import { useState } from "react";
import {
  RobotoFont,
  FreshSansMediumFont,
} from "../../../assets/theme/EverydayPay/fonts";
import Logo, {
  LogoTypes,
  LogoCategories,
} from "../../../components/General/Logo";
import {
  Banner,
  Info,
  Heading,
  InfoText,
  SetupEverydayPayButton,
  TellMeMoreLink,
} from "./NewCustomer.styles";
import AddUpdateCardModal, {
  CardAction,
  CardTypes,
} from "../../../components/AddUpdateCardModal";

const NewCustomer = () => {
  const [openAddBankCard, setOpenAddBankCard] = useState(false);

  return (
    <>
      <Banner w={["full", 390, 390]} h={[176, 136, 136, 136]}>
        <Logo
          category={LogoCategories.Cards}
          type={LogoTypes.MultiCard}
          alt="Everyday Pay Logo"
          width="82px"
          height="76px"
        />
        <Info>
          <Heading
            fontSize={["0.75rem", "0.875rem", "0.875rem"]}
            fontWeight="normal"
            fontFamily={RobotoFont}
          >
            Your secure way to collect points and pay
          </Heading>

          <InfoText
            fontSize={["0.75rem", "0.875rem", "0.875rem"]}
            fontWeight="normal"
            fontFamily={RobotoFont}
          >
            Use Gift Cards, Banks Cards or combine them for a one click checkout
            when you use <br />
            Everyday Pay.{" "}
            <TellMeMoreLink href="" isExternal>
              Tell me more
            </TellMeMoreLink>
          </InfoText>

          <SetupEverydayPayButton
            fontFamily={FreshSansMediumFont}
            fontWeight="medium"
            variant="primary"
            width={84}
            onClick={() => setOpenAddBankCard(true)}
          >
            Setup Everyday Pay
          </SetupEverydayPayButton>
        </Info>
      </Banner>
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

export default NewCustomer;
