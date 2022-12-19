import { everydayPayLogo, cardsLogos } from "./logos";
import { LogoTypes, LogoCategories } from "./logos.types";

interface LogoProps {
  category: LogoCategories;
  type: LogoTypes;
  alt: string;
  height?: string;
  width?: string;
}
const logosFn = {
  [LogoCategories.EverydayPay]: everydayPayLogo,
  [LogoCategories.Cards]: cardsLogos,
};
const Logo = ({ category, type, alt, height, width }: LogoProps) => {
  const logos = logosFn[category];
  return (
    <img
      src={logos(type)}
      alt={alt}
      style={{ height: `${height}`, width: `${width}` }}
    />
  );
};

export default Logo;
