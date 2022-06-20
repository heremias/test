import React from 'react';
import { Story, Meta } from '@storybook/react';

import { button, buttonProps } from './button';

export default {
  title: 'Example/Button',
  component: button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story/>
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<buttonProps> = (args) => <button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
