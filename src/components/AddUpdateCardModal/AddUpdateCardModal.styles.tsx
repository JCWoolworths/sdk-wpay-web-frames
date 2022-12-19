import {
  ModalContent as Content,
  ModalHeader as Header,
  ModalCloseButton,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

export const ModalContent = styled(Content)`
  display: flex;
  flex-direction: column;
  > * {
    box-shadow: inset 0px 10px 12px -10px rgba(58, 71, 78, 0.25);
  }
`;

export const ModalHeader = styled(Header)`
  display: flex;
  padding: 22px 24px;
  gap: 8px;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  gap: 8px;
`;

export const CloseModalButton = styled(ModalCloseButton)`
  position: initial;
  background-color: 1px solid
    ${({ theme }) => theme.colors.everydayUniversal.primary.white};

  &:hover {
    background-color: 1px solid
      ${({ theme }) => theme.colors.everydayUniversal.primary.white};
  }
`;
