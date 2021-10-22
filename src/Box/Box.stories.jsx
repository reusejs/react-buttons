import React from 'react';

import Box  from './Box';

export default {
    title: 'Atoms/Box',
    component: Box,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };


  const Template = (args) => <Box {...args} />;

  export const Primary = Template.bind({});

  Primary.args = {
    primary: true,
    label: 'Box',
  };