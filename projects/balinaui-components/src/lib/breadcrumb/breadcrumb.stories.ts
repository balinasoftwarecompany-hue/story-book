import { Meta, StoryObj } from '@storybook/angular-vite';
import { Breadcrumb } from './breadcrumb';

const meta: Meta<Breadcrumb> = {
  title: 'Components/Breadcrumb',

  component: Breadcrumb,

  tags: ['autodocs'],

  parameters: {
    layout: 'padded'
  },

  argTypes: {

    // INPUTS

    items: {
      control: 'object',
      description: 'Breadcrumb items displayed in order'
    },

    clickable: {
      control: 'boolean',
      description: 'Allows breadcrumb items to be clicked'
    },

    disabled: {
      control: 'boolean',
      description: 'Disables breadcrumb interaction'
    },

    customClass: {
      control: 'text',
      description: 'Custom CSS class for developer styling'
    },

    // EVENTS

    clicked: {
      action: 'clicked',
      description: 'Emitted when a breadcrumb item is clicked'
    }
  }
};

export default meta;

type Story = StoryObj<Breadcrumb>;

// DEFAULT
export const Default: Story = {

  args: {

    items: [
      {
        label: 'Dashboard',
        url: '/dashboard'
      }
    ],

    clickable: true,

    disabled: false,

    customClass: ''
  }
};

// MULTIPLE LEVELS

export const MultipleLevels: Story = {

  args: {

    items: [
      {
        label: 'Dashboard',
        url: '/dashboard'
      },
      {
        label: 'Flight Leg',
        url: '/flight-leg'
      },
      {
        label: 'Flight Details',
        url: '/flight-details'
      }
    ],

    clickable: true,

    disabled: false,

    customClass: ''
  }
};

// DISABLED

export const Disabled: Story = {

  args: {

    items: [
      {
        label: 'Dashboard',
        url: '/dashboard'
      },
      {
        label: 'Flight Leg',
        url: '/flight-leg'
      }
    ],

    clickable: true,

    disabled: true,

    customClass: ''
  }
};

// NOT CLICKABLE

export const NotClickable: Story = {

  args: {

    items: [
      {
        label: 'Dashboard'
      },
      {
        label: 'Flight Leg'
      }
    ],

    clickable: false,

    disabled: false,

    customClass: ''
  }
};

export const CustomStyle: Story = {

  args: {

    items: [
      {
        label: 'Dashboard',
        url: '/dashboard'
      },
      {
        label: 'Flight Leg',
        url: '/flight-leg'
      }
    ],

    clickable: true,

    disabled: false,

    customClass: 'custom-breadcrumb'
  }
};