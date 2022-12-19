import { Text, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const BankCardItem = styled(Box)`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  height: 65px;
  border: 1px solid
    ${({ theme, expired }) => {
      return expired
        ? theme.colors.everydayUniversal.alert.errorBorder
        : theme.colors.everydayUniversal.extended.grey.light80;
    }};
  border-radius: 4px;
  padding: 12px 16px 12px 12px;
  gap: 12px;
  cursor: pointer;
  background-color: ${({ theme, selected }) =>
    selected
      ? theme.colors.everydayUniversal.extended.charcoal.light90
      : theme.colors.everydayUniversal.primary.white};
  *:last-child {
    margin-left: auto;
  }
`;

export const BankDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardSuffix = styled(Text)`
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.charcoal};
`;

export const CardExpiry = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 20px;
  color: ${({ theme, expired }) =>
    expired
      ? theme.colors.everydayUniversal.validation.error
      : theme.colors.everydayUniversal.extended.charcoal.light20};
`;

export const CardStatus = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
`;
