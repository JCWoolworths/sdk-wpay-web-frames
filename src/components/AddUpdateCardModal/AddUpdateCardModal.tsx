import { Modal, ModalOverlay, Text } from "@chakra-ui/react";
import { FreshSansMediumFont } from "../../assets/theme/EverydayPay/fonts";
import Logo, { LogoTypes, LogoCategories } from "../General/Logo";
import {
  ModalContent,
  ModalHeader,
  CloseModalButton,
  Title,
} from "./AddUpdateCardModal.styles";
import { CardTypes, CardAction } from "./AddUpdateCardModal.types";
import AddUpdateCardModalErrorBoundary from "./AddUpdateCardModalErrorBoundary";
import AddBankCard from "../AddBankCard";
import AddGiftCard from "../AddGiftCard";

interface AddUpdateCardModalProps {
  isOpen: boolean;
  onSuccess: () => unknown;
  onClose: () => unknown;
  cardType: CardTypes;
  cardAction: CardAction;
}

const AddUpdateCardModal = ({
  isOpen,
  onClose,
  cardType,
  cardAction,
  onSuccess,
}: AddUpdateCardModalProps) => {
  let Card = null;
  let title = "";

  if (cardType == CardTypes.BankCard) {
    if (cardAction === CardAction.Add) {
      Card = <AddBankCard />;
      title = "Pay with Everyday Pay";
    }
  }
  if (cardType == CardTypes.GiftCard) {
    if (cardAction === CardAction.Add) {
      Card = <AddGiftCard onSuccess={onSuccess} />;
      title = "Add Gift Card";
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      size={["full", "lg", "lg"]}
      onClose={() => onClose()}
      allowPinchZoom
    >
      <ModalOverlay width="full" />
      <ModalContent size={["full", "lg", "lg"]}>
        <ModalHeader>
          <Title>
            <Logo
              category={LogoCategories.EverydayPay}
              type={LogoTypes.EverydayPayWalletPrimary}
              alt="Everyday Pay Wallet Logo"
              width="32px"
              height="32px"
            />
            <Text variant="h3" fontFamily={FreshSansMediumFont}>
              {title}
            </Text>
          </Title>
          <CloseModalButton />
        </ModalHeader>
        <AddUpdateCardModalErrorBoundary closeHandler={onClose}>
          {Card}
        </AddUpdateCardModalErrorBoundary>
      </ModalContent>
    </Modal>
  );
};

export default AddUpdateCardModal;
