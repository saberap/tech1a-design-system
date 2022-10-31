import { Story, Meta } from "@storybook/react/types-6-0";

import Clock, { ClockProps } from "./clock";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Clock",
  component: Clock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ClockProps> = (args) => <Clock {...args} />;

export const Time = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Time.args = {
  type: "time",
  currentDateTime : new Date("2022-10-30T16:46:49.897Z")
};

export const Jalali = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Jalali.args = {
  type: "jalali",
  currentDateTime : new Date("2022-10-30T16:46:49.897Z")
};


export const Georgian = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Georgian.args = {
  type: "georgian",
  currentDateTime : new Date("2022-10-30T16:46:49.897Z")
};
