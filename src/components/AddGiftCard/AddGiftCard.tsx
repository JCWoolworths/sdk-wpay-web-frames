import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import {
  RobotoFont,
  FreshSansMediumFont,
} from "../../assets/theme/EverydayPay/fonts";
import {
  Container,
  AddCardButton,
  Fields,
  Field,
  GiftCardNumber,
  AddCardBntContainer,
  AcceptText,
} from "./AddGiftCard.styles";
import OTP from "../OTP";
import Info from "./Info";
import { useWalletAccessContext } from "../../context/useWalletAccessContext";
import { useAddGiftCard } from "../../hooks/useAddGiftCard";
import AddGiftCardNotice from "./AddGiftCardNotice";
import InlineErrorMsg from "../General/InlineErrorMsg";
import { insertSpaces } from "../../utils/string";
import { GiftCardStatus } from "../../types/giftCard.types";

const MAX_CARD_NO_LENGTH = 23;
const MAX_PIN_LENGTH = 4;

const formatCardNo = (cardNo: string): string => {
  const unformatCardNo = cardNo.replace(/\s/g, "");
  return insertSpaces(unformatCardNo, 4);
};

interface AddGiftCardProps {
  onSuccess: () => void;
}

const AddGiftCard = ({ onSuccess }: AddGiftCardProps) => {
  const [card, setCard] = useState({
    number: "",
    formattedNumber: "",
    error: "",
    isInvalid: false,
    touched: false,
  });
  const [pin, setPin] = useState({
    number: "",
    error: "",
    isInvalid: false,
    touched: false,
  });

  const { apiKey, accessToken } = useWalletAccessContext();
  const { addGiftCard, giftCardStatus } = useAddGiftCard(apiKey, accessToken);

  const validateCardNumber = (cardNumber?: string) => {
    let isValid = true;
    let error = "";
    const cardNo = cardNumber;

    if (!cardNo) {
      isValid = false;
      error = "Card Number is required";
    }

    if (cardNo.length < MAX_CARD_NO_LENGTH) {
      isValid = false;
      error = "Invalid Card Number";
    }

    setCard((card) => ({ ...card, error, isInvalid: !isValid }));
  };

  const validatePin = () => {
    let error = "";
    let isValid = true;
    const number = pin.number;

    if (!number) {
      error = "PIN is required";
      isValid = false;
    }

    if (number.length < MAX_PIN_LENGTH) {
      error = "Invalid PIN";
      isValid = false;
    }

    setPin({ number, error, isInvalid: !isValid, touched: true });
  };

  const cardNoChangeHandler = (value: string) => {
    const cardNo = value.replace(/[^0-9\s]/g, "");
    const formattedCardNo = formatCardNo(cardNo);

    setCard({
      number: cardNo,
      formattedNumber: formattedCardNo,
      error: "",
      isInvalid: false,
      touched: true,
    });
  };

  const pinChangeHandler = (pinNo: string) => {
    setPin({ number: pinNo, error: "", isInvalid: false, touched: true });
  };

  const submitGiftCard = () => {
    validateCardNumber(card.formattedNumber);
    validatePin();

    if (card.touched && !card.isInvalid && pin.touched && !pin.isInvalid) {
      addGiftCard({
        cardNumber: card.number,
        pinCode: pin.number,
      });
    }
  };

  useEffect(() => {
    if (giftCardStatus === GiftCardStatus.VALID) {
      onSuccess();
    }
  }, [giftCardStatus]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Container>
        <AddGiftCardNotice giftCardStatus={giftCardStatus} />
        <Fields>
          <Field>
            <Text variant="cardFieldLabel" fontFamily={RobotoFont}>
              19-digit Gift Card number
            </Text>
            <AcceptText fontFamily={RobotoFont}>
              We accept Woolworths Supermarket, WISH, Simply Groceries and
              Essential Gift Cards.
            </AcceptText>
            <GiftCardNumber
              variant="outline"
              focusBorderColor="everydayUniversal.secondary.darkOrange"
              errorBorderColor="everydayUniversal.alert.errorBorder"
              isInvalid={card.isInvalid}
              type="string"
              maxLength={MAX_CARD_NO_LENGTH}
              onBlur={(e) => validateCardNumber(e.target.value)}
              onChange={(e) => cardNoChangeHandler(e.target.value)}
              value={card.formattedNumber}
            />
            {card.isInvalid && <InlineErrorMsg text={card.error} />}
          </Field>
          <Field>
            <Text variant="cardFieldLabel" fontFamily={RobotoFont}>
              PIN
            </Text>
            <OTP
              id="add-gift-card_otp"
              noOfPins={MAX_PIN_LENGTH}
              onChange={pinChangeHandler}
              isPinInvalid={pin.isInvalid}
              pin={pin.number}
              onBlur={validatePin}
            />
            {pin.isInvalid && <InlineErrorMsg text={pin.error} />}
          </Field>
        </Fields>
        <Info />
      </Container>
      <AddCardBntContainer>
        <AddCardButton
          fontFamily={FreshSansMediumFont}
          fontWeight="medium"
          variant="primary"
          id="addCard"
          width={[343, 144]}
          onClick={submitGiftCard}
        >
          Add Gift Card
        </AddCardButton>
      </AddCardBntContainer>
    </div>
  );
};

export default AddGiftCard;
