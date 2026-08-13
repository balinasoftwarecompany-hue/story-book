import { Meta, StoryObj } from '@storybook/angular-vite';
import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Components/Button',
  component: Button,

  parameters: {
    layout: 'centered',
  },

  argTypes: {

  text: {
    control: 'text'
  },

  variant: {
    control: 'select',
    options: [
      'solid',
      'outline',
      'ghost'
    ]
  },

  color: {
    control: 'select',
    options: [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'neutral',
      'light',
      'dark',
      'link'
    ]
  },

  customColor: {
    control: 'color'
  },

  hoverColor: {
    control: 'color'
  },

  activeColor: {
    control: 'color'
  },

  textColor: {
    control: 'color'
  },

  hoverTextColor: {
    control: 'color'
  },

  activeTextColor: {
    control: 'color'
  },

  disabledColor: {
    control: 'color'
  },

  disabledTextColor: {
    control: 'color'
  },

  disabledBorderColor: {
    control: 'color'
  },

  size: {
    control: 'select',
    options: [
      'xs',
      'sm',
      'md',
      'lg',
      'xl'
    ]
  },

  disabled: {
    control: 'boolean'
  },

  buttonClick: {
    action: 'button clicked'
  }
}
};

export default meta;

type Story = StoryObj<Button>;

export const Solid: Story = {
  args: {
    text: 'Primary Button',
    variant: 'solid',
    color: 'primary',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    text: 'Outline Button',
    variant: 'outline',
    color: 'primary',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    text: 'Ghost Button',
    variant: 'ghost',
    color: 'primary',
    size: 'md',
  },
};

export const Danger: Story = {
  args: {
    text: 'Delete',
    variant: 'solid',
    color: 'danger',
    size: 'md',
  },
};

export const Success: Story = {
  args: {
    text: 'Save',
    variant: 'solid',
    color: 'success',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    text: 'Large Button',
    variant: 'solid',
    color: 'primary',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled',
    variant: 'solid',
    color: 'primary',
    size: 'md',
    disabled: true,
  },
};