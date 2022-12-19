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

export const GiftCardsLabel = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.charcoal};
`;

export const GiftCardBox = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  height: 56px;
  border: 1px solid
    ${({ theme }) => theme.colors.everydayUniversal.extended.grey.light80};
  border-radius: 4px;
  gap: 16px;
`;

export const TotalValue = styled(Text)`
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.charcoal};
`;

export const AddGiftCardLink = styled(Link)`
  margin-left: auto;
`;
