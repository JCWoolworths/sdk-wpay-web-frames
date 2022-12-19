import Icon, { IconTypes } from "../Icon";
import {
  RobotoFont,
  FreshSansMediumFont,
} from "../../../assets/theme/EverydayPay/fonts";
import {
  InfoBox,
  AlertIconContainer,
  AlertContent,
  AlertTitle,
  AlertMessage,
} from "./ErrorAlert.styles";

interface ErrorAlertProps {
  title: string;
  message: string;
}

const ErrorAlert = ({ title, message }: ErrorAlertProps) => {
  return (
    <InfoBox>
      <AlertIconContainer>
        <Icon
          type={IconTypes.ErrorFilled}
          alt="Error"
          height="18px"
          width="18px"
        />
      </AlertIconContainer>
      <AlertContent>
        <AlertTitle
          fontSize={["0.825rem", "0.875rem", "0.875rem"]}
          fontFamily={FreshSansMediumFont}
        >
          {title}
        </AlertTitle>
        <AlertMessage
          fontSize={["0.625rem", "0.75rem", "0.75rem"]}
          fontFamily={RobotoFont}
        >
          {message}
        </AlertMessage>
      </AlertContent>
    </InfoBox>
  );
};

export default ErrorAlert;
