import { useState } from "react";
import { Switch } from "@chakra-ui/react";
import Icon, { IconTypes } from "../../General/Icon";
import {
  RobotoFont,
  FreshSansMediumFont,
} from "../../../assets/theme/EverydayPay/fonts";
import Logo, { LogoTypes, LogoCategories } from "../../General/Logo";
import AddUpdateCardModal, {
  CardAction,
  CardTypes,
} from "../../../components/AddUpdateCardModal";
import { GiftCard } from "../../../types/wallet.types";
import { totalGiftCardsValue } from "../calculateGiftCardsTotalValue";
import {
  Layout,
  Row,
  GiftCardsLabel,
  GiftCardBox,
  TotalValue,
  AddGiftCardLink,
} from "./GiftCard.styles";
import GiftCardsTooltip from "./GiftCardsTooltip";

interface GiftCardsProps {
  giftCards: GiftCard[];
  toggleGiftCardHandler: (on: boolean) => any;
  addGiftCardHandler: () => any;
}
const GiftCards = ({
  giftCards,
  toggleGiftCardHandler,
  addGiftCardHandler,
}: GiftCardsProps) => {
  const [openAddGiftCard, setOpenAddGiftCard] = useState(false);
  const hasGiftCards = giftCards && giftCards.length > 0;
  const totalValue = totalGiftCardsValue(giftCards);
  return (
    <>
      <Layout>
        <Row>
          <GiftCardsLabel fontFamily={FreshSansMediumFont}>
            Gift Cards
          </GiftCardsLabel>
          <GiftCardsTooltip>
            <Icon
              type={IconTypes.InfoFilled}
              alt="Info"
              height="16px"
              width="16px"
            />
          </GiftCardsTooltip>
          {hasGiftCards && (
            <AddGiftCardLink
              fontFamily={RobotoFont}
              onClick={() => setOpenAddGiftCard(true)}
              variant="brandPrimary"
            >
              Add Gift Card
            </AddGiftCardLink>
          )}
        </Row>
        <GiftCardBox>
          <Logo
            category={LogoCategories.Cards}
            type={LogoTypes.GenericCard}
            alt="Gift Card"
            width="32px"
            height="32px"
          />
          <TotalValue fontFamily={RobotoFont}>{totalValue}</TotalValue>
          {hasGiftCards ? (
            <Switch
              style={{ marginLeft: "auto" }}
              size="lg"
              onChange={(e) => {
                toggleGiftCardHandler(e.target.checked);
              }}
            />
          ) : (
            <AddGiftCardLink
              fontFamily={RobotoFont}
              onClick={() => setOpenAddGiftCard(true)}
              variant="brandPrimary"
            >
              Add Gift Card
            </AddGiftCardLink>
          )}
        </GiftCardBox>
      </Layout>
      <AddUpdateCardModal
        isOpen={openAddGiftCard}
        onClose={() => setOpenAddGiftCard(false)}
        cardType={CardTypes.GiftCard}
        cardAction={CardAction.Add}
        onSuccess={() => {
          setOpenAddGiftCard(false);
          addGiftCardHandler();
        }}
      />
    </>
  );
};

export default GiftCards;
