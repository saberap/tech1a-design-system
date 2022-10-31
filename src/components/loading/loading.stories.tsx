import { Story, Meta } from "@storybook/react/types-6-0";

import Loading, { LoadingProps } from "./loading";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/Loading",
    component: Loading,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

export const Balls = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Balls.args = {
    type: 'balls',
    className: 'test',
    color: '#52796f',
    height: 50,
    width: 50
};


export const Bars = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Bars.args = {
    type: 'bars',
    className: 'test',
    color: '#52796f',
    height: 50,
    width: 50
};


export const Bubbles = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Bubbles.args = {
    type: 'bubbles',
    className: 'test',
    color: '#52796f',
    height: 50,
    width: 50
};


export const Cubes = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Cubes.args = {
    type: 'cubes',
    className: 'test',
    color: '#52796f',
    height: 50,
    width: 50
};

export const Cylon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Cylon.args = {
    type: 'cylon',
    className: 'test',
    color: '#52796f',
    height: 50,
    width: 50
};


export const Spin = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Spin.args = {
    type: 'spin',
    className: 'test',
    color: '#52796f',
    height: 50,
    width: 50
};



export const SpinningBubbles = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SpinningBubbles.args = {
    type: 'spinningBubbles',
    className: 'test',
    color: '#52796f',
    height: 50,
    width: 50
};



export const Spokes = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Spokes.args = {
    type: 'spokes',
    className: 'test',
    color: '#52796f',
    height: 50,
    width: 50
};




