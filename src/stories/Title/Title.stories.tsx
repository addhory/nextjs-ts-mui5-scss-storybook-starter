import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Title from './Title';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */

  title: 'Title',
  component: Title,
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },

    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Title>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = { variant: undefined, children: 'Title' };
