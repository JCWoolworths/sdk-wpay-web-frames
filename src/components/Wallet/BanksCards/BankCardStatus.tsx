import { Text, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FreshSansMediumFont } from "../../../assets/theme/EverydayPay/fonts";

const Status = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.everydayUniversal.primary.white};
`;

const BankCardStatus = ({ primary, expired }) => {
  let status = "";
  let backgroundColor = "";
  if (primary) {
    status = "DEFAULT";
    backgroundColor = "everydayUniversal.secondary.charcoal";
  }

  if (expired) {
    status = "EXPIRED";
    backgroundColor = "everydayUniversal.validation.error";
  }
  return (
    <Box w={[62, 68, 68]} h={[6, 8, 8]}>
      <Status bg={backgroundColor} fontFamily={FreshSansMediumFont}>
        {status}
      </Status>
    </Box>
  );
};

export default BankCardStatus;
