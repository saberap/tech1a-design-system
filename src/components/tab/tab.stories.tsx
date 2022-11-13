import { Story, Meta } from "@storybook/react/types-6-0";

import Tab, { TabProps } from "./tab";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Tab",
  component: Tab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TabProps> = (args) => <Tab {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items: [
    {
      title: "Tab 1",
      content: "Tab 1 Content",
    },
    {
      title: "Tab 2",
      content: "Tab 2 Content",
    },
    {
      title: "Tab 3",
      content: "Tab 3 Content",
    },
  ],
  className: 'custom-class',
};
