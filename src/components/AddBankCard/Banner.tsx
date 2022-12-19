import { Text } from "@chakra-ui/react";
import {
  RobotoFont,
  FreshSansMediumFont,
} from "../../assets/theme/EverydayPay/fonts";
import Logo, { LogoTypes, LogoCategories } from "../General/Logo";

const Banner = () => {
  return (
    <>
      <Logo
        category={LogoCategories.EverydayPay}
        type={LogoTypes.EverydayPayBanner}
        alt="Everyday Pay Logo"
        width="100%"
        height="195px"
      />
      <Text variant="h3" fontFamily={FreshSansMediumFont}>
        Add a Debit or Credit Card to your Everyday Pay wallet
      </Text>
      <Text variant="h6" fontFamily={RobotoFont}>
        One click check out when you shop with Everyday Pay
      </Text>
    </>
  );
};

export default Banner;
