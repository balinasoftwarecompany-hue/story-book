import { Meta, StoryObj } from '@storybook/angular-vite';
import { TimeFilter } from './time-filter';

const meta: Meta<TimeFilter> = {
  title: 'Components/Time Filter',
  component: TimeFilter,

  tags: ['autodocs'],

  argTypes: {
    label: {
      control: 'text',
      description: 'Text displayed next to the radio button'
    },

    value: {
      control: 'text',
      description: 'Unique value of this filter'
    },

    selectedValue: {
      control: 'text',
      description: 'Currently selected filter value'
    },

    selectedValueChange: {
      action: 'selectedValueChange'
    },

    clicked: {
      action: 'clicked'
    }
  },

  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<TimeFilter>;

export const Default: Story = {
  args: {
    label: 'Last 24 hours',
    value: '24h',
    selectedValue: '24h'
  }
};

export const NotSelected: Story = {
  args: {
    label: 'Last 7 days',
    value: '7d',
    selectedValue: '24h'
  }
};

export const Selected: Story = {
  args: {
    label: 'Last 24 hours',
    value: '24h',
    selectedValue: '24h'
  }
};
