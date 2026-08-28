import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Checkbox } from './checkbox';

const meta: Meta<Checkbox> = {

  title: 'Components/Checkbox',

  component: Checkbox,

  parameters: {
    layout: 'centered',
  },

  argTypes: {

    label: {
      control: 'text',
    },

    checked: {
      control: 'boolean',
    },

    clickable: {
      control: 'boolean',
    },

    disabled: {
      control: 'boolean',
    },

    customClass: {
      control: 'text',
    },

    changed: {
      action: 'changed',
    },

    clicked: {
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<Checkbox>;


// DEFAULT

export const Default: Story = {

  args: {

    label: 'Chart',

    checked: true,

    clickable: true,

    disabled: false,

    customClass: '',
  },
};


// UNCHECKED

export const Unchecked: Story = {

  args: {

    label: 'Chart',

    checked: false,

    clickable: true,

    disabled: false,

    customClass: '',
  },
};


// CHECKED

export const Checked: Story = {

  args: {

    label: 'Chart',

    checked: true,

    clickable: true,

    disabled: false,

    customClass: '',
  },
};


// DISABLED

export const Disabled: Story = {

  args: {

    label: 'Chart',

    checked: false,

    clickable: true,

    disabled: true,

    customClass: '',
  },
};


// DISABLED CHECKED

export const DisabledChecked: Story = {

  args: {

    label: 'Chart',

    checked: true,

    clickable: true,

    disabled: true,

    customClass: '',
  },
};


// CUSTOM CSS

export const CustomStyle: Story = {

  args: {

    label: 'Chart',

    checked: true,

    clickable: true,

    disabled: false,

    customClass: 'large-checkbox',
  },

  decorators: [

    (story) => ({

      ...story(),

      styles: [

        `
        .large-checkbox {

          --checkbox-size: 36px;

          --checkbox-label-size: 20px;

          --checkbox-gap: 12px;

          --checkbox-radius: 8px;

          --checkbox-checked-background: #2962ff;

          --checkbox-checked-border: #2962ff;

        }
        `,

      ],

    }),

  ],
};