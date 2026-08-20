import { Meta, StoryObj } from '@storybook/angular-vite';
import { TimeFilter } from './time-filter';

const meta: Meta<TimeFilter> = {

  title: 'Components/Time Filter',

  component: TimeFilter,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered'
  },

  argTypes: {

    // =====================================
    // INPUTS
    // =====================================

    label: {
      control: 'text',

      description:
        'Text displayed beside the time filter'
    },

    value: {
      control: 'text',

      description:
        'Unique value of the time filter'
    },

    selectedValue: {
      control: 'text',

      description:
        'Optional external value for connected groups'
    },

    customClass: {
      control: 'text',

      description:
        'Developer custom CSS class'
    },

    clickable: {
      control: 'boolean',

      description:
        'Controls whether the component can be clicked'
    },

    disabled: {
      control: 'boolean',

      description:
        'Disables the time filter'
    },


    // =====================================
    // OUTPUTS
    // =====================================

    selectedValueChange: {
      action: 'selectedValueChange',

      description:
        'Emitted when selection changes'
    },

    clicked: {
      action: 'clicked',

      description:
        'Emitted when the component is clicked'
    }
  }
};


export default meta;

type Story = StoryObj<TimeFilter>;


// =========================================
// DEFAULT
// =========================================

export const Default: Story = {

  args: {

    label: 'Last 24 Hours',

    value: '24h',

    selectedValue: null,

    customClass: '',

    clickable: true,

    disabled: false
  }
};


// =========================================
// SELECTED
// =========================================

export const Selected: Story = {

  args: {

    label: 'Last 24 Hours',

    value: '24h',

    selectedValue: '24h',

    customClass: '',

    clickable: true,

    disabled: false
  }
};


// =========================================
// DISABLED
// =========================================

export const Disabled: Story = {

  args: {

    label: 'Last 24 Hours',

    value: '24h',

    selectedValue: null,

    customClass: '',

    clickable: true,

    disabled: true
  }
};


// =========================================
// NOT CLICKABLE
// =========================================

export const NotClickable: Story = {

  args: {

    label: 'Last 24 Hours',

    value: '24h',

    selectedValue: null,

    customClass: '',

    clickable: false,

    disabled: false
  }
};


// =========================================
// CUSTOM STYLE
// =========================================

export const CustomStyle: Story = {

  args: {

    label: 'Last 24 Hours',

    value: '24h',

    selectedValue: null,

    customClass: 'custom-time-filter',

    clickable: true,

    disabled: false
  }
};