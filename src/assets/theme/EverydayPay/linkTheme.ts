import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandPrimary = defineStyle({
  color: "everydayUniversal.secondary.darkOrange",
  fontWeight: 400,
  fontSize: "0.875rem",
  lineHeight: "20px",
  textDecoration: "underline",
  fontFamily: "Roboto",
});

export const linkTheme = defineStyleConfig({
  variants: { brandPrimary },
});
