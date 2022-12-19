import { IconTypes } from "./icons.types";
import { icons } from "./icons";

interface LogoProps {
  type: IconTypes;
  alt: string;
  height?: string;
  width?: string;
}

const Icon = ({ type, alt, height, width }: LogoProps) => {
  const icon = icons(type);
  return (
    <img
      src={icon}
      alt={alt}
      style={{ height: `${height}`, width: `${width}` }}
    />
  );
};

export default Icon;
