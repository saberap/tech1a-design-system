import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: { control: "select", options: ["filed", "outline"] },
    type: {
      control: {
        type: null,
      },
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Default Button",
  type: "default",
  disabled: false,
  loading: false,
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Default Button",
  type: "primary",
  disabled: false,
  loading: false,
};

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  children: "Default Button",
  type: "success",
  disabled: false,
  loading: false,
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Danger.args = {
  children: "Default Button",
  type: "danger",
  disabled: false,
  loading: false,
};

export const Custom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Custom.args = {
  children: "Custom Button",
  type: "custom",
  disabled: false,
  loading: false,
  backgroundColor: "#008cff",
  textColor: "#fff",
};

const SizeTemplate: Story<ButtonProps> = (args) => (
  <>
    <div style={{ marginBottom: "10px", display: "flex", alignItems: "start" }}>
      <Button {...args} size="large" style={{ marginRight: "10px" }}>
        Large Button
      </Button>
      <Button {...args} size="medium" style={{ marginRight: "10px" }}>
        Medium Button
      </Button>
      <Button {...args} size="default" style={{ marginRight: "10px" }}>
        Default Button
      </Button>
      <Button {...args} size="small" style={{ marginRight: "10px" }}>
        Small Button
      </Button>
    </div>
    <div style={{ marginBottom: "10px", display: "flex", alignItems: "start" }}>
      <Button
        {...args}
        type="primary"
        size="large"
        style={{ marginRight: "10px" }}
      >
        Large Button
      </Button>
      <Button
        {...args}
        type="primary"
        size="medium"
        style={{ marginRight: "10px" }}
      >
        Medium Button
      </Button>
      <Button
        {...args}
        type="primary"
        size="default"
        style={{ marginRight: "10px" }}
      >
        Default Button
      </Button>
      <Button
        {...args}
        type="primary"
        size="small"
        style={{ marginRight: "10px" }}
      >
        Small Button
      </Button>
    </div>
    <div style={{ marginBottom: "10px", display: "flex", alignItems: "start" }}>
      <Button
        {...args}
        type="success"
        size="large"
        style={{ marginRight: "10px" }}
      >
        Large Button
      </Button>
      <Button
        {...args}
        type="success"
        size="medium"
        style={{ marginRight: "10px" }}
      >
        Medium Button
      </Button>
      <Button
        {...args}
        type="success"
        size="default"
        style={{ marginRight: "10px" }}
      >
        Default Button
      </Button>
      <Button
        {...args}
        type="success"
        size="small"
        style={{ marginRight: "10px" }}
      >
        Small Button
      </Button>
    </div>
    <div style={{ marginBottom: "10px", display: "flex", alignItems: "start" }}>
      <Button
        {...args}
        type="danger"
        size="large"
        style={{ marginRight: "10px" }}
      >
        Large Button
      </Button>
      <Button
        {...args}
        type="danger"
        size="medium"
        style={{ marginRight: "10px" }}
      >
        Medium Button
      </Button>
      <Button
        {...args}
        type="danger"
        size="default"
        style={{ marginRight: "10px" }}
      >
        Default Button
      </Button>
      <Button
        {...args}
        type="danger"
        size="small"
        style={{ marginRight: "10px" }}
      >
        Small Button
      </Button>
    </div>
  </>
);

export const Sizes = SizeTemplate.bind({});

Sizes.args = {
  disabled: false,
  loading: false,
};
