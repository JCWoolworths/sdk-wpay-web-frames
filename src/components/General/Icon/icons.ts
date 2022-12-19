import WarningFilled from "../../../assets/images/icons/Warning_Filled.png";
import ErrorFilled from "../../../assets/images/icons/Error_Filled.png";
import ErrorOutlined from "../../../assets/images/icons/Error_Outlined.png";
import InfoCircleFilled from "../../../assets/images/icons/Info_Circle_Filled.png";
import MoreVertical from "../../../assets/images/icons/More_Vertical.png";

import { IconTypes } from "./icons.types";

export const icons = (icon: IconTypes) => {
  switch (icon) {
    case IconTypes.WarningFilled:
      return WarningFilled;
    case IconTypes.ErrorFilled:
      return ErrorFilled;
    case IconTypes.ErrorOutlined:
      return ErrorOutlined;
    case IconTypes.InfoFilled:
      return InfoCircleFilled;
    case IconTypes.MoreVertical:
      return MoreVertical;
    default:
      break;
  }

  return null;
};
