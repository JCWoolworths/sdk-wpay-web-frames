import { Component, ErrorInfo, ReactNode } from "react";
import {
  RobotoFont,
  FreshSansMediumFont,
} from "../../assets/theme/EverydayPay/fonts";
import Icon, { IconTypes } from "../General/Icon";
import {
  ErrorContainer,
  ErrorInnerContainer,
  ErrorTitle,
  ErrorMessage,
  PleaseTryAgainText,
  ErrorFooter,
  CloseButton,
} from "./AddUpdateCardModalErrorBoundary.styles";

interface AddUpdateCardModalErrorBoundaryProps {
  children?: ReactNode;
  closeHandler: () => void;
}

interface AddUpdateCardModalErrorBoundaryState {
  hasError: boolean;
}

class AddUpdateCardModalErrorBoundary extends Component<
  AddUpdateCardModalErrorBoundaryProps,
  AddUpdateCardModalErrorBoundaryState
> {
  public state: AddUpdateCardModalErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(
    _: Error
  ): AddUpdateCardModalErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorInnerContainer>
            <Icon
              type={IconTypes.ErrorOutlined}
              alt="Error"
              height="32px"
              width="32px"
            />
            <ErrorTitle fontFamily={FreshSansMediumFont}>
              Something went wrong
            </ErrorTitle>
            <ErrorMessage fontFamily={RobotoFont}>
              Everyday Pay has encountered a problem
            </ErrorMessage>
            <PleaseTryAgainText fontFamily={RobotoFont}>
              Please try again later.
            </PleaseTryAgainText>
          </ErrorInnerContainer>
          <ErrorFooter>
            <CloseButton
              fontFamily={FreshSansMediumFont}
              fontWeight="medium"
              variant="primary"
              width={84}
              onClick={this.props.closeHandler}
            >
              Close
            </CloseButton>
          </ErrorFooter>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default AddUpdateCardModalErrorBoundary;
