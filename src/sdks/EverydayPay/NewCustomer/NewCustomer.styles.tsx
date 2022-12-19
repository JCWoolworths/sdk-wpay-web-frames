import { Text, Button, Link, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Banner = styled(Box)`
  display: flex;
  gap: 16px;
  img:first-child {
    margin-top: 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  height: 100%; ;
`;

export const Heading = styled(Text)`
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.charcoal};
  width: 100%;
  text-align: left;
`;

export const InfoText = styled(Text)`
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.charcoal};
  text-align: left;
`;

export const SetupEverydayPayButton = styled(Button)`
  background-color: ${({ theme }) =>
    theme.colors.everydayUniversal.secondary.charcoal};
  color: ${({ theme }) => theme.colors.everydayUniversal.primary.white};
  border-radius: 24px;
  font-weight: 500;
  font-size: 0.875;
  width: 158px;
  height: 32px;
  line-height: 32px;
  margin-top: auto;
`;

export const TellMeMoreLink = styled(Link)`
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.darkOrange};
`;
