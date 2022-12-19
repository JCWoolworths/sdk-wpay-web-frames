import { useState } from "react";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";

interface PinFieldTouchedMatrix {
  [key: string]: boolean;
}

const generatePinFieldTouchedMatrix = (
  otpId: string,
  noOfPinFields: number
): PinFieldTouchedMatrix => {
  return [...Array(noOfPinFields)].reduce((matrix, _, no) => {
    return { ...matrix, [`${otpId}_${no}`]: false };
  }, {});
};

interface OTPProps {
  id: string;
  pin: string;
  onChange: (value: string) => void;
  noOfPins: number;
  isPinInvalid: boolean;
  onBlur: () => void;
}

const OTP = ({
  id,
  noOfPins,
  onChange,
  onBlur,
  isPinInvalid,
  pin,
}: OTPProps) => {
  const [touchedMatrix, setTouchedMatrix] = useState(
    generatePinFieldTouchedMatrix(id, noOfPins)
  );

  const inputFieldBlurHandler = (fieldId: string) => {
    const updateTouchedMatrix = { ...touchedMatrix, [fieldId]: true };
    if (Object.values(updateTouchedMatrix).includes(false)) {
      setTouchedMatrix((): PinFieldTouchedMatrix => updateTouchedMatrix);
    } else {
      onBlur();
    }
  };

  return (
    <HStack>
      <PinInput
        otp
        placeholder=""
        focusBorderColor="everydayUniversal.secondary.darkOrange"
        onChange={onChange}
        isInvalid={isPinInvalid}
        errorBorderColor="everydayUniversal.alert.errorBorder"
        value={pin}
      >
        {Object.keys(touchedMatrix).map((fieldId: string) => {
          return (
            <PinInputField
              id={fieldId}
              key={fieldId}
              color="everydayUniversal.extended.charcoal.light40"
              borderColor="everydayUniversal.extended.grey.light20"
              onBlur={() => inputFieldBlurHandler(fieldId)}
              borderRadius="sm"
            />
          );
        })}
      </PinInput>
    </HStack>
  );
};

export default OTP;
