import styled from "@emotion/styled";
import { Text, Tooltip, Box } from "@chakra-ui/react";
import { RobotoFont } from "../../../assets/theme/EverydayPay/fonts";

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 192px;
  height: 52px;
  border-radius: 4px;
`;

export const TipText = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.everydayUniversal.secondary.charcoal};
`;

const InfoTooltip = () => {
  return (
    <Content>
      <TipText fontFamily={RobotoFont}>
        Everyday Pay will automatically combine eligible Gift Cards.
      </TipText>
    </Content>
  );
};

interface GiftCardsTooltipProps {
  children: React.ReactNode;
}

const GiftCardsTooltip = ({ children }: GiftCardsTooltipProps) => {
  return (
    <Tooltip
      label={<InfoTooltip />}
      bg="everydayUniversal.primary.white"
      placement="right-start"
      boxShadow="md"
    >
      <Box>{children}</Box>
    </Tooltip>
  );
};

export default GiftCardsTooltip;
