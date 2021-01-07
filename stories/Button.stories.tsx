import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { Props } from '../src/Button';

export default {
  title: 'Example/Button',
  component: Button
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  text: 'Click',
  gradient: true,
  onClick: () => ({})
};
