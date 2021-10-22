import React from 'react';

import Base from './index';

export default {
    title: 'Buttons/Base',
    component: Base,
};

const Template = (args) => <Base {...args}>Hello</Base>;

export const Default = Template.bind({});

Default.args = {
    busy: false,
    busyText: "Processing..",
    type: 'button',
    disable: false,
};