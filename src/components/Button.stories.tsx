import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { ButtonComponent, ButtonComponentProps } from './Button';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Click me',
    },
    color: {
      control: 'radio',
      options: ['red', 'green'],
    },
  },
} as Meta;

const Template: ComponentStory<typeof ButtonComponent> = (args: ButtonComponentProps) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
