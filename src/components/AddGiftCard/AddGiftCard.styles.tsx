import styled from "@emotion/styled";
import { Button, Input, Text } from "@chakra-ui/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 24px;
  border-top: 1px solid
    ${({ theme }) => theme.colors.everydayUniversal.secondary.midGrey};
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.everydayUniversal.secondary.midGrey};
`;

export const AcceptText = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.charcoal};
`;

export const InfoText = styled(Text)`
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
`;

export const AddCardButton = styled(Button)`
  background-color: ${({ theme }) =>
    theme.colors.everydayUniversal.secondary.charcoal};
  color: ${({ theme }) => theme.colors.everydayUniversal.primary.white};
  border-radius: 24px;
  padding: 8px 24px 8px 24px;
  font-weight: 500;
  font-size: 0.875;
  align-self: flex-end;
`;

export const GiftCardNumber = styled(Input)`
  padding: 16px 12px;
  border-color: ${({ theme }) => {
    return theme.colors.everydayUniversal.extended.grey.light20;
  }};
  color: ${({ theme }) =>
    theme.colors.everydayUniversal.extended.charcoal.light40};
  width: 100%;
  height: 48px;
  border-radius: 2px;
`;

export const Pin = styled(Input)`
  padding: 16px 12px;
  border-color: ${({ theme }) => {
    return theme.colors.everydayUniversal.extended.grey.light20;
  }};
  color: ${({ theme }) =>
    theme.colors.everydayUniversal.extended.charcoal.light40};
  width: 119px;
  height: 48px;
  border-radius: 2px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Fields = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  > div {
    height: 100%;
  }
`;

export const AddCardBntContainer = styled.div`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => {
      return theme.breakpoints.sm;
    }}) {
    justify-content: flex-end;
  }
`;
