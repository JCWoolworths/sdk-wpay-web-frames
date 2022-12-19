import { ComponentMeta } from "@storybook/react";
import Logo, {
  LogoTypes,
  LogoCategories,
} from "../../../components/General/Logo";

export const Circles = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        padding: "40px",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "20px",
        }}
      >
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.AmpolCircle}
          alt="Ampol Logo"
          height={40}
          width={40}
        />
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.AmpolWWCircle}
          alt="Ampol and Woolworths Logo"
          height={40}
          width={40}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "20px",
        }}
      >
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.BupaCircle}
          alt="Bupa Logo"
          height={40}
          width={40}
        />
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.BWSCircle}
          alt="BWS Logo"
          height={40}
          width={40}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "20px",
        }}
      >
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.CaltexStrokeCircle}
          alt="Caltex Logo"
          height={40}
          width={40}
        />
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.CaltexWWCircle}
          alt="Caltex and Woolworths Logo"
          height={40}
          width={40}
        />
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.CaltexCircle}
          alt="Caltex Logo"
          height={40}
          width={40}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "20px",
        }}
      >
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.DinnerlyCircle}
          alt="Dinnerly Logo"
          height={40}
          width={40}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "20px",
        }}
      >
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.EGCircle}
          alt="EG Logo"
          height={40}
          width={40}
        />
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.EverydayPlusCircle}
          alt="Everyday+ Logo"
          height={40}
          width={40}
        />
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.EverydayExtraCircle}
          alt="Everyday Extra Logo"
          height={40}
          width={40}
        />
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.EverydayMarketCircle}
          alt="Everyday Market Logo"
          height={40}
          width={40}
        />
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.EverydayPayCircle}
          alt="Everyday Pay Logo"
          height={40}
          width={40}
        />
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.EverydayRewardsCircle}
          alt="Everyday Rewards Logo"
          height={40}
          width={40}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
        }}
      >
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.HealthyLifeCircle}
          alt="Healthy Life Logo"
          height={40}
          width={40}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
        }}
      >
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.MarleySpoonCircle}
          alt="Marley Spoon Logo"
          height={40}
          width={40}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
        }}
      >
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.OriginCircle}
          alt="Origin Logo"
          height={40}
          width={40}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
        }}
      >
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.PetCultureCircle}
          alt="Pet Culture Logo"
          height={40}
          width={40}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
        }}
      >
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.QantasCircle}
          alt="Qantas Logo"
          height={40}
          width={40}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
        }}
      >
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.SuperPharmacyCircle}
          alt="Super Pharmacy Logo"
          height={40}
          width={40}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "20px",
        }}
      >
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.WwCaltexCircle}
          alt="Woolworths and Caltex"
          height={40}
          width={40}
        />
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.WWMetroCircle}
          alt="Woolworths Metro Logo"
          height={40}
          width={40}
        />
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.WWPrimaryCircle}
          alt="Woolworths Primary Logo"
          height={40}
          width={40}
        />
        <Logo
          category={LogoCategories.Circles}
          type={LogoTypes.WWSecondaryCircle}
          alt="Woolworths Secondary Logo"
          height={40}
          width={40}
        />
      </div>
    </div>
  );
};
export default {
  title: "DATA DISPLAY/Logos/Circles",
  component: Circles,
} as ComponentMeta<typeof Circles>;
