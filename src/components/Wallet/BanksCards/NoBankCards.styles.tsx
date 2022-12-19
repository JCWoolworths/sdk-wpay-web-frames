import { Text, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;
  width: 100%;
  border: 1px solid
    ${({ theme }) => theme.colors.everydayUniversal.alert.errorBorder};
  border-radius: 4px;
  gap: 8px;
`;

export const Message = styled(Text)`
  height: 100%;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-size: 0.875rem;
  text-align: left;
  max-width: 226px;
  @media (max-width: 374px) {
    width: 120px;
  }
`;

export const AddBankCardLink = styled(Link)`
  margin-left: auto;
`;
