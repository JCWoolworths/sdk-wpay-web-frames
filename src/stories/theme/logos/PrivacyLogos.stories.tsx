import { ComponentMeta } from "@storybook/react";
import Logo, {
  LogoTypes,
  LogoCategories,
} from "../../../components/General/Logo";

export const Privacy = () => {
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
          category={LogoCategories.Privacy}
          type={LogoTypes.IDCare}
          alt="ID Care Logo"
          height={40}
          width={40}
        />
        <Logo
          category={LogoCategories.Privacy}
          type={LogoTypes.OAIC}
          alt="OAIC Logo"
          height={40}
          width={40}
        />
        <Logo
          category={LogoCategories.Privacy}
          type={LogoTypes.ScamWatch}
          alt="Scam Watch Logo"
          height={40}
          width={40}
        />
      </div>
    </div>
  );
};
export default {
  title: "DATA DISPLAY/Logos/Privacy",
  component: Privacy,
} as ComponentMeta<typeof Privacy>;
