import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import textStyles from "./textStyles";
import fonts from "./fonts";
import components from "./chakraComponents";

const theme = extendTheme({
  colors,
  textStyles,
  fonts,
  components,
});

export default theme;
