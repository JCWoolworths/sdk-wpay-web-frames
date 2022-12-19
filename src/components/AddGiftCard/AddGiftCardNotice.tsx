import { GiftCardStatus } from "../../types/giftCard.types";
import AlertBox, { AlertBoxType } from "../General/AlertBox";

interface AddGiftCardNoticeProps {
  giftCardStatus: GiftCardStatus;
}
const AddGiftCardNotice = ({ giftCardStatus }: AddGiftCardNoticeProps) => {
  switch (giftCardStatus) {
    case GiftCardStatus.VALID:
      return null;
    case GiftCardStatus.EXPIRED:
      return (
        <AlertBox
          type={AlertBoxType.Error}
          title="Expired Gift Card"
          message="This Gift Card is expired."
        />
      );
    case GiftCardStatus.EXCEEDED:
      return (
        <AlertBox
          type={AlertBoxType.Warning}
          title="You’ve reached your Gift Card limit"
          message="For your security you can only store up to $3,999 worth of Gift Cards in your Everyday Pay wallet."
        />
      );
    case GiftCardStatus.INELIGIBLE:
      return (
        <AlertBox
          type={AlertBoxType.Error}
          title="Ineligible Gift Card"
          message="This type of Gift Card can’t be added at Woolworths."
        />
      );
    case GiftCardStatus.INVALID:
      return (
        <AlertBox
          type={AlertBoxType.Error}
          title="Invalid Gift Card"
          message="The Gift Card is invalid, please check the card number."
        />
      );
    default:
      return null;
  }
};

export default AddGiftCardNotice;
