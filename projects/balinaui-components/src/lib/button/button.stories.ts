import { Meta, StoryObj } from '@storybook/angular-vite';
import { Button } from './button';

const meta: Meta<Button> = {

  title:
    'Balina UI/Button',

  component:
    Button,

  tags:
    ['autodocs'],

  parameters: {

    layout:
      'centered'
  },


  // =======================================
  // CONTROLS
  // =======================================

  argTypes: {

    label: {

      control:
        'text',

      description:
        'Text displayed inside the button.'
    },

    type: {

      control:
        'select',

      options: [
        'button',
        'submit',
        'reset'
      ]
    },

    disabled: {

      control:
        'boolean'
    },

    loading: {

      control:
        'boolean'
    },

    clickable: {

      control:
        'boolean',

      description:
        'Controls whether the button can be clicked.'
    },

    customClass: {

      control:
        'text',

      description:
        'Developer custom CSS class.'
    },

    clicked: {

      action:
        'clicked',

      description:
        'Emitted when the button is clicked.'
    }
  }
};

export default meta;

type Story =
  StoryObj<Button>;


// =========================================
// DEFAULT
// =========================================

export const Default: Story = {

  args: {

    label:
      'Button',

    type:
      'button',

    disabled:
      false,

    loading:
      false,

    clickable:
      true,

    customClass:
      ''
  }
};


// =========================================
// PRIMARY
// =========================================

export const Primary: Story = {

  args: {

    label:
      'Submit',

    type:
      'submit',

    disabled:
      false,

    loading:
      false,

    clickable:
      true,

    customClass:
      ''
  }
};


// =========================================
// NOT CLICKABLE
// =========================================

export const NotClickable: Story = {

  args: {

    label:
      'Not Clickable',

    type:
      'button',

    disabled:
      false,

    loading:
      false,

    clickable:
      false,

    customClass:
      ''
  }
};


// =========================================
// LOADING
// =========================================

export const Loading: Story = {

  args: {

    label:
      'Submit',

    type:
      'button',

    disabled:
      false,

    loading:
      true,

    clickable:
      true,

    customClass:
      ''
  }
};


// =========================================
// DISABLED
// =========================================

export const Disabled: Story = {

  args: {

    label:
      'Disabled',

    type:
      'button',

    disabled:
      true,

    loading:
      false,

    clickable:
      true,

    customClass:
      ''
  }
};


// =========================================
// CUSTOM STYLE
// =========================================

export const CustomStyle: Story = {

  args: {

    label:
      'Custom Button',

    type:
      'button',

    disabled:
      false,

    loading:
      false,

    clickable:
      true,

    customClass:
      'custom-balina-button'
  }
};