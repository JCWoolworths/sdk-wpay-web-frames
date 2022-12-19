import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {},
  thumb: {
    bg: "everydayUniversal.primary.white",
    width: "24px",
    height: "24px",
  },
  track: {
    bg: "everydayUniversal.extended.charcoal.light40",
    _checked: {
      bg: "everydayUniversal.alert.success",
    },
    height: "24px",
    width: "48px",
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
