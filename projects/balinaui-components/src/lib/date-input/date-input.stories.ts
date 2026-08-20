import { Meta, StoryObj } from '@storybook/angular-vite';
import { DateInput } from './date-input';


const meta: Meta<DateInput> = {

  title: 'Components/Date Input',

  component: DateInput,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered'
  },

  argTypes: {

    label: {
      control: 'text'
    },

    placeholder: {
      control: 'text'
    },

    value: {
      control: 'text'
    },

    disabled: {
      control: 'boolean'
    },

    readonly: {
      control: 'boolean'
    },

    customClass: {
      control: 'text'
    },

    valueChange: {
      action: 'valueChange'
    },

    dateChange: {
      action: 'dateChange'
    },

    openedChange: {
      action: 'openedChange'
    },

    clicked: {
      action: 'clicked'
    }
  }
};

export default meta;

type Story = StoryObj<DateInput>;


// =========================================
// DEFAULT
// =========================================

export const Default: Story = {

  args: {

    label: 'Date',

    placeholder: 'Select date',

    value: '',

    disabled: false,

    readonly: false,

    customClass: ''
  }
};


// =========================================
// WITH VALUE
// =========================================

export const WithValue: Story = {

  args: {

    label: 'Date',

    placeholder: 'Select date',

    value: '2026-08-18',

    disabled: false,

    readonly: false,

    customClass: ''
  }
};


// =========================================
// DISABLED
// =========================================

export const Disabled: Story = {

  args: {

    label: 'Date',

    placeholder: 'Select date',

    value: '',

    disabled: true,

    readonly: false,

    customClass: ''
  }
};


// =========================================
// READONLY
// =========================================

export const Readonly: Story = {

  args: {

    label: 'Date',

    placeholder: 'Select date',

    value: '2026-08-18',

    disabled: false,

    readonly: true,

    customClass: ''
  }
};


// =========================================
// CUSTOM STYLE
// =========================================

export const CustomStyle: Story = {

  args: {

    label: 'Date',

    placeholder: 'Select date',

    value: '',

    disabled: false,

    readonly: false,

    customClass: 'custom-date-input'
  }
};