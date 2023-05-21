import {Loading as Component} from './Loading';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Base/Loading',
  component: Component,
};

export const Loading: Story = {
  args: {
    label: 'Loading',
    backgroundColor: '#ff0',
  },
};

export default meta;
