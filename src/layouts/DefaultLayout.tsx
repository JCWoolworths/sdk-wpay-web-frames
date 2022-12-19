import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

interface DefaultLayoutProps {
  children: React.ReactNode;
  hasBorder: boolean;
}

const Container = styled(Box)`
  position: absolute;
  min-height: 98px;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${({ theme, hasBorder }) => {
    return hasBorder
      ? {
          border: `1px solid ${theme.colors.everydayUniversal.extended.grey.light70}`,
        }
      : null;
  }};
  background-color: ${({ theme }) => {
    return theme.colors.everydayUniversal.primary.white;
  }};
`;

const DefaultLayout = ({ children, hasBorder }: DefaultLayoutProps) => {
  return (
    <Container hasBorder={hasBorder} w={["full", 420, 420, 420, 420]}>
      {children}
    </Container>
  );
};

export default DefaultLayout;
