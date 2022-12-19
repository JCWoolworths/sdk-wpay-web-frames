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

export const LogoContainer = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
`;

export const InfoText = styled(Text)`
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
`;

export const FrameSDKButtonContainer = styled.div`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
`;
export const AddCardButton = styled(Button)`
  background-color: ${({ theme }) =>
    theme.colors.everydayUniversal.secondary.charcoal};
  color: ${({ theme }) => theme.colors.everydayUniversal.primary.white};
  width: 144px;
  border-radius: 24px;
  padding: 8px 24px 8px 24px;
  font-weight: 500;
  font-size: 0.875;
  align-self: flex-end;
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
  div:first-child {
    width: 100%;
    height: 74px;
  }
  > div {
    height: 100%;
  }

  #cardNo {
    display: block;
    position: relative;
    margin: 0;
  }
  #cardExpiry {
    width: 119px;
  }

  #cardCVV {
    width: 119px;
  }

  .woolies-element {
    margin: 0;
    > iframe {
      height: 48px !important;
      min-height: 48px !important;
    }
  }
`;
