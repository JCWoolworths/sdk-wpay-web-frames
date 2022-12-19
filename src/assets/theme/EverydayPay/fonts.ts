import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "../../fonts/fresh-sans/light.css";
import "../../fonts/fresh-sans/regular.css";
import "../../fonts/fresh-sans/medium.css";
import "../../fonts/fresh-sans/bold.css";

export const FreshSansBoldFont = "Fresh-sans-bold";
export const FreshSansMediumFont = "Fresh-sans-medium";
export const FreshSansRegularFont = "Fresh-sans-regular";
export const FreshSansLightFont = "Fresh-sans-light";
export const RobotoFont = "Roboto";

const fontFamily = `${FreshSansRegularFont}, ${RobotoFont}`;

const fonts = {
  body: fontFamily,
  heading: fontFamily,
  freshSansBoldFont: FreshSansBoldFont,
  freshSansMediumFont: FreshSansMediumFont,
  freshSansRegularFont: FreshSansRegularFont,
  freshSansLightFont: FreshSansLightFont,
  roboto: RobotoFont,
};

export default fonts;
