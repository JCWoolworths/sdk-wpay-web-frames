import Logo, { LogoTypes, LogoCategories } from "../../General/Logo";
import { RobotoFont } from "../../../assets/theme/EverydayPay/fonts";
import Icon, { IconTypes } from "../../General/Icon";
import { BankCardTypes, CreditCard } from "../../../types/wallet.types";
import BankCardStatus from "./BankCardStatus";
import {
  BankCardItem,
  BankDetails,
  CardSuffix,
  CardExpiry,
  CardStatus,
} from "./BankCard.styles";

interface BankCardProps {
  selected: boolean;
  creditCard: CreditCard;
  onSelect: () => any;
}

const CardTypes = {
  [BankCardTypes.MASTERCARD]: LogoTypes.MasterCard,
  [BankCardTypes.VISA]: LogoTypes.VisaCard,
};

const BankCard = ({ selected, creditCard, onSelect }: BankCardProps) => {
  const { cardSuffix, scheme, expired, primary, expiryMonth, expiryYear } =
    creditCard;
  const showCardStatus = primary || expired;
  const type = BankCardTypes[scheme];

  return (
    <BankCardItem
      selected={selected}
      expired={expired}
      onClick={() => onSelect()}
    >
      <Logo
        category={LogoCategories.Cards}
        type={CardTypes[type]}
        alt="Card"
        width="32px"
        height="32px"
      />
      <BankDetails>
        <CardSuffix fontFamily={RobotoFont}>....{" " + cardSuffix}</CardSuffix>
        <CardExpiry
          expired={expired}
        >{`${expiryMonth}/${expiryYear}`}</CardExpiry>
      </BankDetails>
      {showCardStatus && (
        <CardStatus>
          <BankCardStatus primary={primary} expired={expired} />
        </CardStatus>
      )}
      <Icon
        type={IconTypes.MoreVertical}
        alt="More"
        height="32px"
        width="32px"
      />
    </BankCardItem>
  );
};

export default BankCard;
