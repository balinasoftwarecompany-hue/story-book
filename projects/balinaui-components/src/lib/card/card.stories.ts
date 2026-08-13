import { Meta, StoryObj } from '@storybook/angular-vite';
import { Card } from './card';

const meta: Meta<Card> = {
  title: 'Components/Card',
  component: Card,

  tags: ['autodocs'],

  argTypes: {
    title: {
      control: 'text',
      description: 'Card title'
    },

    month: {
      control: 'text',
      description: 'Month displayed in the date box'
    },

    day: {
      control: 'text',
      description: 'Day displayed in the date box'
    },

    description: {
      control: 'text',
      description: 'Monitoring description'
    },

    cardClick: {
      action: 'card clicked'
    }
  },

  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<Card>;

export const Default: Story = {
  args: {
    title: 'Last 24 hours',
    month: 'Jul',
    day: 9,
    description:
      '156 flights were monitored with 96.8% on-time performance. Minor delays occurred due to weather and air traffic.'
  }
};

export const DifferentDate: Story = {
  args: {
    title: 'Last 24 hours',
    month: 'Aug',
    day: 12,
    description:
      '184 flights were monitored with 97.4% on-time performance. Minor delays occurred due to weather and air traffic.'
  }
};

export const ShortDescription: Story = {
  args: {
    title: 'Last 24 hours',
    month: 'Aug',
    day: 12,
    description:
      '156 flights were monitored with 96.8% on-time performance.'
  }
};