import { Story, Meta } from "@storybook/react/types-6-0";

import Input, { InputProps } from "./input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    textAlign: { control: "select", options: ["right", "center", 'left'] },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  placeholder: "Default Input",
  backgroundColor : '#000',
  textAlign : 'center',
  textColor: '#fff',
  className: 'custom-class'
};
