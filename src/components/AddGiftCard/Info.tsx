import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { RobotoFont } from "../../assets/theme/EverydayPay/fonts";
import Logo, { LogoTypes, LogoCategories } from "../General/Logo";

export const InfoText = styled(Text)`
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
`;

export const InfoBox = styled.div`
  background-color: ${({ theme }) =>
    theme.colors.everydayUniversal.extended.orange.light90};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: 100%;
  height: 98px;
`;

const Info = () => {
  return (
    <InfoBox>
      <Logo
        category={LogoCategories.EverydayPay}
        type={LogoTypes.EverydayPayWalletPrimary}
        alt="Everyday Pay Wallet Logo"
        width="22px"
        height="22px"
      />
      <InfoText
        fontFamily={RobotoFont}
        color="everydayUniversal.secondary.charcoal"
      >
        Everyday Pay will automatically combine your eligible Gift Cards.
      </InfoText>
    </InfoBox>
  );
};

export default Info;
