import { Meta, StoryObj } from '@storybook/angular-vite';
import { Card } from './card';

const meta: Meta<Card> = {

  title: 'Components/Card',

  component: Card,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered'
  },

  argTypes: {

    title: {
      control: 'text'
    },

    month: {
      control: 'text'
    },

    day: {
      control: 'text'
    },

    description: {
      control: 'text'
    },

    cardClick: {
      action: 'cardClick'
    }
  }
};

export default meta;

type Story = StoryObj<Card>;


// =========================================
// DEFAULT
// =========================================

export const Default: Story = {

  args: {

    title: 'Last 24 hours',

    month: 'Jul',

    day: 9,

    description:
      '156 flights were monitored with 96.8% on-time performance. Minor delays occurred due to weather and air traffic.'
  }
};


// =========================================
// CUSTOM DATA
// =========================================

export const CustomData: Story = {

  args: {

    title: 'Last 7 days',

    month: 'Aug',

    day: 18,

    description:
      '1,245 flights were monitored with 97.4% on-time performance. Minor delays occurred due to weather and air traffic.'
  }
};