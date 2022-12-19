import styled from "@emotion/styled";
import { Link, Text } from "@chakra-ui/react";
import { RobotoFont } from "../../assets/theme/EverydayPay/fonts";

export const TsAndCsLink = styled(Link)`
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.darkOrange};
`;

export const TsAndCsText = styled(Text)`
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  text-align: left;
  color: ${({ theme }) =>
    theme.colors.everydayUniversal.extended.charcoal.regular};
`;

const TermsAndConditions = () => {
  return (
    <TsAndCsText fontFamily={RobotoFont}>
      By proceeding, you agree to the{" "}
      <TsAndCsLink href="https://www.woolworthsrewards.com.au/content/woolworths-rewards/en/home/everydaypay/terms.html">
        Everyday Pay Terms and Conditions
      </TsAndCsLink>
      .View our{" "}
      <TsAndCsLink href="https://www.woolworthsrewards.com.au/content/woolworths-rewards/en/home/everydaypay/privacy.html">
        Collection Notice
      </TsAndCsLink>{" "}
      to understand how we manage your personal information.
    </TsAndCsText>
  );
};

export default TermsAndConditions;
