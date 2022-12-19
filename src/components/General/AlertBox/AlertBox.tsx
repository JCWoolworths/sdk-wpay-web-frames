import ErrorAlert from "./ErrorAlert";
import WarningAlert from "./WarningAlert";

export enum AlertBoxType {
  Info = "Info",
  Success = "Success",
  Warning = "Warning",
  Error = "Error",
}

const AlertComponent = {
  [AlertBoxType.Error]: ErrorAlert,
  [AlertBoxType.Warning]: WarningAlert,
};

interface AlertBoxProps {
  type: AlertBoxType;
  title: string;
  message: string;
}
const AlertBox = ({ type, title, message }: AlertBoxProps) => {
  const Alert = AlertComponent[type];

  return <Alert title={title} message={message} />;
};

export default AlertBox;
