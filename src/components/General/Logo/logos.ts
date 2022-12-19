import EverydayPayTextBannerPrimaryLarge from "../../../assets/images/logos/EverydayPay/Text-banner-primary-large.png";
import EverydayPayTextBannerPrimarySmall from "../../../assets/images/logos/EverydayPay/Text-banner-primary-small.png";
import EverydayPayTextBannerSecondaryLarge from "../../../assets/images/logos/EverydayPay/Text-banner-secondary-large.png";
import EverydayPayTextBannerSecondarySmall from "../../../assets/images/logos/EverydayPay/Text-banner-secondary-small.png";
import EverydayPayTextLeafPrimary from "../../../assets/images/logos/EverydayPay/Text-leaf-primary.png";
import EverydayPayTextLeafSecondary from "../../../assets/images/logos/EverydayPay/Text-leaf-secondary.png";
import EverydayPayWalletLeafPrimary from "../../../assets/images/logos/EverydayPay/Wallet-leaf-primary.png";
import EverydayPayWalletLeafSecondary from "../../../assets/images/logos/EverydayPay/Wallet-leaf-secondary.png";
import EverydayPayWalletLeafRestricted from "../../../assets/images/logos/EverydayPay/Wallet-leaf-restricted.png";
import EverydayPayWalletPrimary from "../../../assets/images/logos/EverydayPay/Wallet-primary.png";
import EverydayPayWalletSecondary from "../../../assets/images/logos/EverydayPay/Wallet-secondary.png";
import EverydayPayWalletTextBannerPrimaryLarge from "../../../assets/images/logos/EverydayPay/Wallet-text-banner-primary-large.png";
import EverydayPayWalletTextBannerPrimarySmall from "../../../assets/images/logos/EverydayPay/Wallet-text-banner-primary-small.png";
import EverydayPayWalletTextBannerSecondaryLarge from "../../../assets/images/logos/EverydayPay/Wallet-text-banner-secondary-large.png";
import EverydayPayWalletTextBannerSecondarySmall from "../../../assets/images/logos/EverydayPay/Wallet-text-banner-secondary-small.png";
import EverydayPayWalletTextLeafPrimaryLarge from "../../../assets/images/logos/EverydayPay/Wallet-text-leaf-primary-large.png";
import EverydayPayWalletTextLeafPrimarySmall from "../../../assets/images/logos/EverydayPay/Wallet-text-leaf-primary-small.png";
import EverydayPayWalletTextLeafSecondaryLarge from "../../../assets/images/logos/EverydayPay/Wallet-text-leaf-secondary-large.png";
import EverydayPayWalletTextLeafSecondarySmall from "../../../assets/images/logos/EverydayPay/Wallet-text-leaf-secondary-small.png";
import EverydayPayBanner from "../../../assets/images/logos/EverydayPay/Banner.png";
import CreditDebitMasterVisa from "../../../assets/images/logos/Cards/credit-debit-card.png";
import MultiCard from "../../../assets/images/logos/Cards/multicard-logo.png";
import GenericCard from "../../../assets/images/logos/Cards/genericcard-logo.png";
import MasterCard from "../../../assets/images/logos/Cards/mastercard_logo.png";
import VisaCard from "../../../assets/images/logos/Cards/visacard_logo.png";

import { LogoTypes } from "./logos.types";

export const everydayPayLogo = (logo: LogoTypes) => {
  switch (logo) {
    case LogoTypes.EverydayPayTextBannerPrimaryLarge:
      return EverydayPayTextBannerPrimaryLarge;

    case LogoTypes.EverydayPayTextBannerPrimarySmall:
      return EverydayPayTextBannerPrimarySmall;

    case LogoTypes.EverydayPayTextBannerSecondaryLarge:
      return EverydayPayTextBannerSecondaryLarge;

    case LogoTypes.EverydayPayTextBannerSecondarySmall:
      return EverydayPayTextBannerSecondarySmall;

    case LogoTypes.EverydayPayTextLeafPrimary:
      return EverydayPayTextLeafPrimary;

    case LogoTypes.EverydayPayTextLeafSecondary:
      return EverydayPayTextLeafSecondary;

    case LogoTypes.EverydayPayWalletLeafPrimary:
      return EverydayPayWalletLeafPrimary;

    case LogoTypes.EverydayPayWalletLeafSecondary:
      return EverydayPayWalletLeafSecondary;

    case LogoTypes.EverydayPayWalletLeafRestricted:
      return EverydayPayWalletLeafRestricted;

    case LogoTypes.EverydayPayWalletPrimary:
      return EverydayPayWalletPrimary;

    case LogoTypes.EverydayPayWalletSecondary:
      return EverydayPayWalletSecondary;

    case LogoTypes.EverydayPayWalletTextBannerPrimaryLarge:
      return EverydayPayWalletTextBannerPrimaryLarge;

    case LogoTypes.EverydayPayWalletTextBannerPrimarySmall:
      return EverydayPayWalletTextBannerPrimarySmall;

    case LogoTypes.EverydayPayWalletTextBannerSecondaryLarge:
      return EverydayPayWalletTextBannerSecondaryLarge;

    case LogoTypes.EverydayPayWalletTextBannerSecondarySmall:
      return EverydayPayWalletTextBannerSecondarySmall;

    case LogoTypes.EverydayPayWalletTextLeafPrimaryLarge:
      return EverydayPayWalletTextLeafPrimaryLarge;

    case LogoTypes.EverydayPayWalletTextLeafPrimarySmall:
      return EverydayPayWalletTextLeafPrimarySmall;

    case LogoTypes.EverydayPayWalletTextLeafSecondaryLarge:
      return EverydayPayWalletTextLeafSecondaryLarge;

    case LogoTypes.EverydayPayWalletTextLeafSecondarySmall:
      return EverydayPayWalletTextLeafSecondarySmall;

    case LogoTypes.EverydayPayBanner:
      return EverydayPayBanner;

    default:
      break;
  }

  return null;
};

export const cardsLogos = (logo: LogoTypes) => {
  switch (logo) {
    case LogoTypes.CreditDebitCard:
      return CreditDebitMasterVisa;

    case LogoTypes.MultiCard:
      return MultiCard;

    case LogoTypes.GenericCard:
      return GenericCard;

    case LogoTypes.MasterCard:
      return MasterCard;

    case LogoTypes.VisaCard:
      return VisaCard;

    default:
      break;
  }

  return null;
};
