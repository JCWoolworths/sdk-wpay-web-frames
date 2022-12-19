import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "@chakra-ui/react";
import {
  FreshSansBoldFont,
  FreshSansMediumFont,
  FreshSansRegularFont,
  FreshSansLightFont,
  RobotoFont,
} from "../../../assets/theme/EverydayPay/fonts";

const Typeset = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          gap: "20px",
        }}
      >
        <Text variant="h2" fontFamily={FreshSansBoldFont}>
          Fresh Sans Bold
        </Text>
        <Text variant="h2" fontFamily={FreshSansMediumFont}>
          Fresh Sans Medium
        </Text>
        <Text variant="h2" fontFamily={FreshSansRegularFont}>
          Fresh Sans Regular
        </Text>
        <Text variant="h2" fontFamily={FreshSansLightFont}>
          Fresh Sans Light
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          gap: "20px",
        }}
      >
        <Text variant="h2" fontWeight="bold" fontFamily={RobotoFont}>
          Roboto Bold
        </Text>
        <Text variant="h2" fontWeight="medium" fontFamily={RobotoFont}>
          Roboto Medium
        </Text>
        <Text variant="h2" fontWeight="normal" fontFamily={RobotoFont}>
          Roboto Normal
        </Text>
        <Text variant="h2" fontWeight="light" fontFamily={RobotoFont}>
          Roboto Light
        </Text>
      </div>
    </div>
  );
};

export default {
  title: "THEME/Typography",
  component: Typeset,
} as ComponentMeta<typeof Typeset>;

const Template: ComponentStory<typeof Typeset> = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "50px",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        gap: "20px",
      }}
    >
      <Text variant="h2" fontFamily={FreshSansBoldFont}>
        Fresh Sans Bold
      </Text>
      <Text variant="h2" fontFamily={FreshSansMediumFont}>
        Fresh Sans Medium
      </Text>
      <Text variant="h2" fontFamily={FreshSansRegularFont}>
        Fresh Sans Regular
      </Text>
      <Text variant="h2" fontFamily={FreshSansLightFont}>
        Fresh Sans Light
      </Text>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        gap: "20px",
      }}
    >
      <Text variant="h2" fontWeight="bold" fontFamily={RobotoFont}>
        Roboto Bold
      </Text>
      <Text variant="h2" fontWeight="medium" fontFamily={RobotoFont}>
        Roboto Medium
      </Text>
      <Text variant="h2" fontWeight="normal" fontFamily={RobotoFont}>
        Roboto Normal
      </Text>
      <Text variant="h2" fontWeight="light" fontFamily={RobotoFont}>
        Roboto Light
      </Text>
    </div>
  </div>
);

export const Fonts = Template.bind({});
