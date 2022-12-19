import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";

export const Box = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  padding: 20px 24px 20px 0;
`;
export const AlertIconContainer = styled.div`
  width: 58px;
  display: flex;
  flex-direction: flex-start;
  justify-content: center;
  padding-top: 3px;
`;

export const InfoBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.everydayUniversal.alert.info};
  border-width: 1px 1px 1px 8px;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme.colors.everydayUniversal.alert.infoBorder};
`;

export const AlertContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AlertTitle = styled(Text)`
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.charcoal};
`;

export const AlertMessage = styled(Text)`
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.charcoal};
`;
