import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";
import Icon, { IconTypes } from "../Icon";
import { RobotoFont } from "../../../assets/theme/EverydayPay/fonts";

export const AlertMessage = styled(Text)`
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.everydayUniversal.validation.error};
  font-size: 0.75rem;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 18px;
  gap: 4px;
`;

interface InlineErrorMsgProps {
  text: string;
}
const InlineErrorMsg = ({ text }: InlineErrorMsgProps) => {
  return (
    <MessageContainer>
      <Icon
        type={IconTypes.ErrorFilled}
        alt="Error"
        height="12px"
        width="12px"
      />
      <AlertMessage fontFamily={RobotoFont}>{text}</AlertMessage>
    </MessageContainer>
  );
};

export default InlineErrorMsg;
