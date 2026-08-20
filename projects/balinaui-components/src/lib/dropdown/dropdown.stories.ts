import { Meta, StoryObj } from '@storybook/angular-vite';
import { Dropdown, DropdownOption } from './dropdown';

const options: DropdownOption[] = [
  {
    label: 'Addis Ababa',
    value: 'addis-ababa'
  },
  {
    label: 'Debre Berhan',
    value: 'debre-berhan'
  },
  {
    label: 'Bahir Dar',
    value: 'bahir-dar'
  },
  {
    label: 'Hawassa',
    value: 'hawassa'
  },
  {
    label: 'Gondar',
    value: 'gondar'
  },
  {
    label: 'Dire Dawa',
    value: 'dire-dawa'
  }
];


const meta: Meta<Dropdown> = {

  title: 'Components/Dropdown',

  component: Dropdown,

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
      description: 'Dropdown floating label'
    },

    placeholder: {
      control: 'text',
      description: 'Text displayed when nothing is selected'
    },

    options: {
      control: 'object',
      description: 'Dropdown options'
    },

    value: {
      control: 'text',
      description: 'Selected option value'
    },

    disabled: {
      control: 'boolean'
    },

    searchable: {
      control: 'boolean'
    },

    customClass: {
      control: 'text',
      description: 'Developer custom CSS class'
    },


    // =====================================
    // EVENTS
    // =====================================

    valueChange: {
      action: 'valueChange'
    },

    selectionChange: {
      action: 'selectionChange'
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

type Story = StoryObj<Dropdown>;


// =========================================
// DEFAULT
// =========================================

export const Default: Story = {

  args: {

    label: 'City',

    placeholder: 'Select city',

    options,

    value: '',

    disabled: false,

    searchable: true,

    customClass: ''
  }
};


// =========================================
// WITH VALUE
// =========================================

export const WithValue: Story = {

  args: {

    label: 'City',

    placeholder: 'Select city',

    options,

    value: 'addis-ababa',

    disabled: false,

    searchable: true,

    customClass: ''
  }
};


// =========================================
// WITHOUT SEARCH
// =========================================

export const WithoutSearch: Story = {

  args: {

    label: 'City',

    placeholder: 'Select city',

    options,

    value: '',

    disabled: false,

    searchable: false,

    customClass: ''
  }
};


// =========================================
// DISABLED
// =========================================

export const Disabled: Story = {

  args: {

    label: 'City',

    placeholder: 'Select city',

    options,

    value: '',

    disabled: true,

    searchable: true,

    customClass: ''
  }
};


// =========================================
// CUSTOM STYLE
// =========================================

export const CustomStyle: Story = {

  args: {

    label: 'City',

    placeholder: 'Select city',

    options,

    value: '',

    disabled: false,

    searchable: true,

    customClass: 'custom-dropdown'
  }
};