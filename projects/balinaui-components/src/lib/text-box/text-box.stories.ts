import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular-vite';
import { TextBox } from './text-box';

const meta: Meta<TextBox> = {
  title: 'Components/Text Box',

  component: TextBox,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  argTypes: {

    // INPUTS

    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed inside the text box',
    },

    value: {
      control: 'text',
      description: 'Current value of the text box',
    },

    type: {
      control: 'select',
      options: [
        'text',
        'password',
        'email',
        'number',
        'tel',
        'search',
      ],
      description: 'Input type',
    },

    disabled: {
      control: 'boolean',
      description: 'Disable the text box',
    },

    readonly: {
      control: 'boolean',
      description: 'Make the text box read-only',
    },

    customClass: {
      control: 'text',
      description: 'Custom CSS class provided by the developer',
    },


    // EVENTS

    valueChange: {
      action: 'valueChange',
      description: 'Emitted when the value changes',
    },

    inputChange: {
      action: 'inputChange',
      description: 'Emitted when the user types',
    },

    clicked: {
      action: 'clicked',
      description: 'Emitted when the text box is clicked',
    },
  },
};

export default meta;

type Story = StoryObj<TextBox>;


// DEFAULT

export const Default: Story = {
  args: {
    placeholder: 'Flight Numbers.......',
    value: '',
    type: 'text',
    disabled: false,
    readonly: false,
    customClass: '',
  },
};


// WITH VALUE

export const WithValue: Story = {
  args: {
    placeholder: 'Flight Numbers.......',
    value: 'ET123',
    type: 'text',
    disabled: false,
    readonly: false,
    customClass: '',
  },
};


// PASSWORD

export const Password: Story = {
  args: {
    placeholder: 'Enter password',
    value: '',
    type: 'password',
    disabled: false,
    readonly: false,
    customClass: '',
  },
};


// EMAIL

export const Email: Story = {
  args: {
    placeholder: 'Enter email',
    value: '',
    type: 'email',
    disabled: false,
    readonly: false,
    customClass: '',
  },
};


// NUMBER

export const Number: Story = {
  args: {
    placeholder: 'Enter number',
    value: '',
    type: 'number',
    disabled: false,
    readonly: false,
    customClass: '',
  },
};


// DISABLED

export const Disabled: Story = {
  args: {
    placeholder: 'Flight Numbers.......',
    value: '',
    type: 'text',
    disabled: true,
    readonly: false,
    customClass: '',
  },
};


// READ ONLY

export const Readonly: Story = {
  args: {
    placeholder: 'Flight Numbers.......',
    value: 'ET123',
    type: 'text',
    disabled: false,
    readonly: true,
    customClass: '',
  },
};


// CUSTOM CLASS

export const CustomStyle: Story = {
  args: {
    placeholder: 'Flight Numbers.......',
    value: '',
    type: 'text',
    disabled: false,
    readonly: false,
    customClass: 'custom-text-box',
  },

  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates how developers can customize the component using customClass and CSS custom properties.',
      },
    },
  },
};