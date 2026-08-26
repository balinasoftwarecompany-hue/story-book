import { Meta, StoryObj } from '@storybook/angular-vite';
import { FlightCard } from './flight-card';

const meta: Meta<FlightCard> = {

  title: 'Components/Flight Card',

  component: FlightCard,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered'
  },

  argTypes: {

    // INPUTS

    flightNumber: {
      control: 'text'
    },

    route: {
      control: 'text'
    },

    date: {
      control: 'text'
    },

    airTime: {
      control: 'text'
    },

    description: {
      control: 'text'
    },

    clickable: {
      control: 'boolean'
    },

    disabled: {
      control: 'boolean'
    },

    customClass: {
      control: 'text'
    },


    // EVENTS


    clicked: {
      action: 'clicked'
    }
  }
};

export default meta;

type Story = StoryObj<FlightCard>;


// DEFAULT


export const Default: Story = {

  args: {

    flightNumber: 'ET-123',

    route:
      'Addis Ababa (ADD) to Nairobi (NBO)',

    date:
      'June 14, 2026',

    airTime:
      '2h 10m',

    description:
      'This Flight Data Monitoring (FDM) report summarizes the operational performance of Flight ET-123 during its journey from Addis Ababa (ADD) to Nairobi (NBO). The aircraft departed on 14 June 2026 at 08:15 UTC and arrived at its destination at 10:05 UTC.',

    clickable: false,

    disabled: false,

    customClass: ''
  }
};



// CLICKABLE


export const Clickable: Story = {

  args: {

    ...Default.args,

    clickable: true
  }
};

// DISABLED

export const Disabled: Story = {

  args: {

    ...Default.args,

    disabled: true
  }
};

// CUSTOM SIZE
export const CustomSize: Story = {

  args: {

    ...Default.args,

    customClass: 'large-flight-card'
  }
};