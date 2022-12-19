import { ComponentMeta } from "@storybook/react";
import Logo, {
  LogoTypes,
  LogoCategories,
} from "../../../components/General/Logo";

export const EverydayPay = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        padding: "40px",
        gap: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          gap: "40px",
        }}
      >
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayTextBannerPrimaryLarge}
          alt="Everyday Pay Logo"
        />
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayTextBannerSecondaryLarge}
          alt="Everyday Pay Logo"
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          gap: "40px",
        }}
      >
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayTextBannerPrimarySmall}
          alt="Everyday Pay Logo"
        />
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayTextBannerSecondarySmall}
          alt="Everyday Pay Logo"
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          gap: "40px",
        }}
      >
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayTextLeafPrimary}
          alt="Everyday Pay Logo"
        />
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayTextLeafSecondary}
          alt="Everyday Pay Logo"
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "40px",
        }}
      >
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayWalletLeafPrimary}
          alt="Everyday Rewards Logo"
        />
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayWalletLeafSecondary}
          alt="Everyday Rewards Logo"
        />
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayWalletLeafRestricted}
          alt="Everyday Rewards Logo"
        />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "40px",
          height: "100px",
        }}
      >
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayWalletPrimary}
          alt="Everyday Rewards Logo"
        />
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayWalletSecondary}
          alt="Everyday Rewards Logo"
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "40px",
          height: "100px",
        }}
      >
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayWalletTextBannerPrimaryLarge}
          alt="Everyday Pay Logo"
        />
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayWalletTextBannerSecondaryLarge}
          alt="Everyday Pay Logo"
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "40px",
          height: "100px",
        }}
      >
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayWalletTextBannerPrimarySmall}
          alt="Everyday Pay Logo"
        />

        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayWalletTextBannerSecondarySmall}
          alt="Everyday Pay Logo"
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "40px",
          height: "100px",
        }}
      >
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayWalletTextLeafPrimaryLarge}
          alt="Everyday Pay Logo"
        />
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayWalletTextLeafSecondaryLarge}
          alt="Everyday Pay Logo"
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "40px",
          height: "100px",
        }}
      >
        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayWalletTextLeafPrimarySmall}
          alt="Everyday Pay Logo"
        />

        <Logo
          category={LogoCategories.EverydayPay}
          type={LogoTypes.EverydayPayWalletTextLeafSecondarySmall}
          alt="Everyday Pay Logo"
        />
      </div>
    </div>
  );
};
export default {
  title: "DATA DISPLAY/Logos/Everyday Pay",
  component: EverydayPay,
} as ComponentMeta<typeof EverydayPay>;
