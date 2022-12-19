import styled from "@emotion/styled";
import { Text, Button } from "@chakra-ui/react";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ErrorInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  gap: 4px;
  width: 100%;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.everydayUniversal.secondary.midGrey};
`;

export const ErrorTitle = styled(Text)`
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.charcoal};
  margin-bottom: 28px;
`;

export const ErrorMessage = styled(Text)`
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.charcoal};
`;

export const PleaseTryAgainText = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.charcoal};
`;
export const ErrorFooter = styled.div`
  width: 100%;
  padding: 16px 24px 16px 0;
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled(Button)`
  background-color: ${({ theme }) =>
    theme.colors.everydayUniversal.secondary.charcoal};
  color: ${({ theme }) => theme.colors.everydayUniversal.primary.white};
  border-radius: 24px;
  padding: 8px 24px 8px 24px;
  font-weight: 500;
  font-size: 0.875;
  align-self: flex-end;
`;
