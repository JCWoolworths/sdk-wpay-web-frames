import { Text, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 16px;
`;

export const BankCardsLabel = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.charcoal};
`;

export const AddBankCardLink = styled(Link)`
  margin-left: auto;
`;
