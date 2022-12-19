import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "@chakra-ui/react";

const SampleText = "Lorem ipsum dolor sit amet.";
const Typeset = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: "20px",
      }}
    >
      <div style={{ display: "flex", width: "100%" }}>
        <Text style={{ flexBasis: "125px" }} variant="h1">
          h1:
        </Text>
        <Text variant="h1">{SampleText}</Text>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <Text style={{ flexBasis: "125px" }} variant="h2">
          h2:
        </Text>
        <Text variant="h2">{SampleText}</Text>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <Text style={{ flexBasis: "125px" }} variant="h3">
          h3:
        </Text>
        <Text variant="h3">{SampleText}</Text>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <Text style={{ flexBasis: "125px" }} variant="h4">
          h4:
        </Text>
        <Text variant="h4">{SampleText}</Text>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <Text style={{ flexBasis: "125px" }} variant="h5">
          h5:
        </Text>
        <Text variant="h5">{SampleText}</Text>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <Text style={{ flexBasis: "125px" }} variant="h6">
          h6:
        </Text>
        <Text variant="h6">{SampleText}</Text>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <Text style={{ flexBasis: "125px" }} variant="subtitle1">
          subtitle1:
        </Text>
        <Text variant="subtitle1">{SampleText}</Text>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <Text style={{ flexBasis: "125px" }} variant="subtitle2">
          subtitle2:
        </Text>
        <Text variant="subtitle2">{SampleText}</Text>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <Text style={{ flexBasis: "125px" }} variant="body1">
          body1:
        </Text>
        <Text variant="body1">{SampleText}</Text>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <Text style={{ flexBasis: "125px" }} variant="body2">
          body2:
        </Text>
        <Text variant="body2">{SampleText}</Text>
      </div>
    </div>
  );
};

export default {
  title: "THEME/Text",
  component: Typeset,
} as ComponentMeta<typeof Typeset>;

const Template: ComponentStory<typeof Typeset> = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      gap: "20px",
    }}
  >
    <div style={{ display: "flex", width: "100%" }}>
      <Text style={{ flexBasis: "125px" }} variant="h1">
        h1:
      </Text>
      <Text variant="h1">{SampleText}</Text>
    </div>
    <div style={{ display: "flex", width: "100%" }}>
      <Text style={{ flexBasis: "125px" }} variant="h2">
        h2:
      </Text>
      <Text variant="h2">{SampleText}</Text>
    </div>
    <div style={{ display: "flex", width: "100%" }}>
      <Text style={{ flexBasis: "125px" }} variant="h3">
        h3:
      </Text>
      <Text variant="h3">{SampleText}</Text>
    </div>
    <div style={{ display: "flex", width: "100%" }}>
      <Text style={{ flexBasis: "125px" }} variant="h4">
        h4:
      </Text>
      <Text variant="h4">{SampleText}</Text>
    </div>
    <div style={{ display: "flex", width: "100%" }}>
      <Text style={{ flexBasis: "125px" }} variant="h5">
        h5:
      </Text>
      <Text variant="h5">{SampleText}</Text>
    </div>
    <div style={{ display: "flex", width: "100%" }}>
      <Text style={{ flexBasis: "125px" }} variant="h6">
        h6:
      </Text>
      <Text variant="h6">{SampleText}</Text>
    </div>
    <div style={{ display: "flex", width: "100%" }}>
      <Text style={{ flexBasis: "125px" }} variant="subtitle1">
        subtitle1:
      </Text>
      <Text variant="subtitle1">{SampleText}</Text>
    </div>
    <div style={{ display: "flex", width: "100%" }}>
      <Text style={{ flexBasis: "125px" }} variant="subtitle2">
        subtitle2:
      </Text>
      <Text variant="subtitle2">{SampleText}</Text>
    </div>
    <div style={{ display: "flex", width: "100%" }}>
      <Text style={{ flexBasis: "125px" }} variant="body1">
        body1:
      </Text>
      <Text variant="body1">{SampleText}</Text>
    </div>
    <div style={{ display: "flex", width: "100%" }}>
      <Text style={{ flexBasis: "125px" }} variant="body2">
        body2:
      </Text>
      <Text variant="body2">{SampleText}</Text>
    </div>
  </div>
);

export const Sizes = Template.bind({});
