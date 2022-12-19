import { defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  borderRadius: "4px",
  border: "1px solid",
  borderColor: "#D8DADC",
  boxShadow: "0px 2px 8px -2px rgba(58, 71, 78, 0.15)",
};

// export the component theme
export const tooltipTheme = defineStyleConfig({ baseStyle });
