import { switchTheme } from "./switchTheme";
import { tooltipTheme } from "./tooltipTheme";
import { linkTheme } from "./linkTheme";
import colors from "./colors";
import { FreshSansRegularFont, RobotoFont } from "./fonts";
const fontFamily = `${FreshSansRegularFont}, ${RobotoFont}`;

const components = {
  Button: {
    baseStyle: {
      fontFamily,
      borderRadius: "24px",
      _hover: {
        opacity: "0.9",
      },
    },
    variants: {
      primary: {
        backgroundColor: colors.everydayUniversal.primary.orange,
        color: colors.everydayUniversal.primary.white,
        fontSize: "0.875rem",
        fontWeight: "normal",
      },

      secondary: {
        backgroundColor: colors.everydayUniversal.primary.white,
        color: colors.everydayUniversal.primary.orange,
        fontSize: "0.875rem",
      },
    },
  },
  Text: {
    variants: {
      primary: {
        color: colors.everydayUniversal.primary.orange,
      },
      secondary: {
        color: colors.everydayUniversal.extended.grey.regular,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: "24px",
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 500,
        lineHeight: "28px",
      },
      h3: {
        fontSize: "1.75rem",
        fontWeight: 500,
        lineHeight: "32px",
      },
      cardFieldLabel: {
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: "20px",
      },
    },
    Input: {
      baseStyle: {
        borderRadius: "2px",
      },
      defaultProps: {
        focusBorderColor: colors.everydayUniversal.primary.orange,
      },
    },
  },
  Switch: switchTheme,
  Tooltip: tooltipTheme,
  Link: linkTheme,
};

export default components;
