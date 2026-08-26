import type { Meta, StoryObj } from '@storybook/angular-vite';
import { MultiSelectDropdown } from './multi-select-dropdown';

const meta: Meta<MultiSelectDropdown> = {
  title: 'Components/MultiSelectDropdown',
  component: MultiSelectDropdown,

  parameters: {
    layout: 'centered',
  },

  argTypes: {

    label: {
      control: 'text',
    },

    placeholder: {
      control: 'text',
    },

    options: {
      control: 'object',
    },

    selectedValues: {
      control: 'object',
    },

    customClass: {
      control: 'text',
    },

    disabled: {
      control: 'boolean',
    },


    selectionChange: {
      action: 'selectionChange',
    },

    opened: {
      action: 'opened',
    },

    closed: {
      action: 'closed',
    },

    clicked: {
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<MultiSelectDropdown>;


// =========================================
// DEFAULT
// =========================================

export const Default: Story = {

  args: {

    label: 'Add Parameters',

    placeholder: 'Select options',

    options: [

      {
        label: 'Option',
        value: 'option1',
      },

      {
        label: 'Option',
        value: 'option2',
      },

      {
        label: 'Option',
        value: 'option3',
      },

    ],

    selectedValues: [],

    customClass: '',

    disabled: false,

  },
};


// =========================================
// WITH MANY OPTIONS
// =========================================

export const Scrollable: Story = {

  args: {

    label: 'Add Parameters',

    options: [

      {
        label: 'Option 1',
        value: 'option1',
      },

      {
        label: 'Option 2',
        value: 'option2',
      },

      {
        label: 'Option 3',
        value: 'option3',
      },

      {
        label: 'Option 4',
        value: 'option4',
      },

      {
        label: 'Option 5',
        value: 'option5',
      },

      {
        label: 'Option 6',
        value: 'option6',
      },

      {
        label: 'Option 7',
        value: 'option7',
      },

      {
        label: 'Option 8',
        value: 'option8',
      },

      {
        label: 'Option 9',
        value: 'option9',
      },

      {
        label: 'Option 10',
        value: 'option10',
      },

    ],

    selectedValues: [],

  },
};


// =========================================
// PRESELECTED
// =========================================

export const Preselected: Story = {

  args: {

    label: 'Add Parameters',

    options: [

      {
        label: 'Option 1',
        value: 'option1',
      },

      {
        label: 'Option 2',
        value: 'option2',
      },

      {
        label: 'Option 3',
        value: 'option3',
      },

      {
        label: 'Option 4',
        value: 'option4',
      },

    ],

    selectedValues: [
      'option1',
      'option3',
    ],
  },
};


// =========================================
// DISABLED
// =========================================

export const Disabled: Story = {

  args: {

    label: 'Add Parameters',

    options: [

      {
        label: 'Option 1',
        value: 'option1',
      },

      {
        label: 'Option 2',
        value: 'option2',
      },

      {
        label: 'Option 3',
        value: 'option3',
      },

    ],

    selectedValues: [],

    disabled: true,
  },
};


// =========================================
// CUSTOM CSS
// =========================================

export const CustomStyle: Story = {

  args: {

    label: 'Add Parameters',

    options: [

      {
        label: 'Option 1',
        value: 'option1',
      },

      {
        label: 'Option 2',
        value: 'option2',
      },

      {
        label: 'Option 3',
        value: 'option3',
      },

      {
        label: 'Option 4',
        value: 'option4',
      },

    ],

    selectedValues: [],

    customClass: 'storybook-custom-dropdown',
  },

  decorators: [

    (story) => ({

      ...story(),

      styles: [

      `

    .storybook-custom-dropdown {

      --dropdown-width: 320px;

      --dropdown-header-height: 55px;

      --dropdown-max-height: 220px;

      --dropdown-header-padding: 0 18px;

      --dropdown-border: 3px solid #c5c5c5;

      --dropdown-radius: 8px;

      --dropdown-label-size: 20px;

      --dropdown-option-size: 18px;

      --dropdown-option-height: 52px;

      --dropdown-option-gap: 22px;

      --checkbox-size: 24px;

    }

        `,
      ],
    }),
  ],
};