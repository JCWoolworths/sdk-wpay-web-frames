import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 0px;
  gap: 8px;

  width: 279px;
  height: 25px;
`;

export const InfoText = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
`;
