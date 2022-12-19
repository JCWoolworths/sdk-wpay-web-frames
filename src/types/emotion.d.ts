import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    fonts: {
      body: string;
      heading: string;
      freshSans: string;
      freshSansRegularFont: string;
      roboto: string;
    };
    fontWeights: {
      black: number;
      bold: number;
      extrabold: number;
      hairline: number;
      light: number;
      medium: number;
      normal: number;
      semibold: number;
      thin: number;
    };
    fontSizes: {
      "2xl": number;
      "2xs": number;
      "3xl": number;
      "3xs": number;
      "4xl": number;
      "5xl": number;
      "6xl": number;
      "7xl": number;
      "8xl": number;
      "9xl": number;
      lg: number;
      md: number;
      sm: number;
      xl: number;
      xs: number;
    };
    colors: {
      everydayUniversal: {
        primary: {
          orange: string;
          white: string;
        };
        secondary: {
          darkOrange: string;
          darkOrangeHover: string;
          charcoal: string;
          midGrey: string;
          lightGrey: string;
        };
        alert: {
          info: string;
          infoBorder: string;
          success: string;
          warning: string;
          error: string;
          errorBorder: string;
        };
        validation: {
          error: string;
        };
        extended: {
          orange: {
            light90: string;
            light60: string;
            light30: string;
            regular: string;
            dark10: string;
            dark30: string;
            dark50: string;
          };
          red: {
            light90: string;
            light60: string;
            light30: string;
            regular: string;
            dark10: string;
            dark30: string;
            dark50: string;
          };
          blue: {
            light93: string;
            light40: string;
            regular: string;
          };
          green: {
            light90: string;
            light60: string;
            light30: string;
            main: string;
            dark: string;
            dark30: string;
            dark50: string;
          };
          yellow: {
            light90: string;
            light60: string;
            light30: string;
            regular: string;
            dark10: string;
            dark30: string;
            dark50: string;
          };
          charcoal: {
            light90: string;
            light80: string;
            light70: string;
            light50: string;
            light40: string;
            light20: string;
            regular: string;
            dark30: string;
            dark60: string;
          };
          grey: {
            light90: string;
            light80: string;
            light70: string;
            light60: string;
            light50: string;
            light40: string;
            light30: string;
            light20: string;
            light10: string;
            regular: string;
            dark10: string;
            dark30: string;
            dark50: string;
            dark70: string;
            dark90: string;
          };
        };
      };
      everydayFamily: {
        everydayRewards: {
          peach: string;
          mint: string;
          pink: string;
          red: string;
          burntOrange: string;
          honey: string;
          yellow: string;
          green: string;
          aqua: string;
          blue: string;
          purple: string;
          lightPink: string;
          lightRed: string;
          lightOrange: string;
          lightHoney: string;
          lightGreen: string;
          lightAqua: string;
          lightBlue: string;
          lightPurple: string;
        };
        everydayPay: {
          lightBlush: string;
          blush: string;
          lightCoral: string;
          coral: string;
          velvet: string;
        };
      };
    };
    breakpoints: {
      ["2xl"]: string;
      base: string;
      lg: string;
      md: string;
      sm: string;
      xl: string;
    };
  }
}

// You are also able to use a 3rd party theme this way:
import "@emotion/react";
import { LibTheme } from "some-lib";

declare module "@emotion/react" {
  export interface Theme extends LibTheme {}
}
