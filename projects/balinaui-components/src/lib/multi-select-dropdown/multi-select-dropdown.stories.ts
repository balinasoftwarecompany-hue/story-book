import type { Meta, StoryObj } from '@storybook/angular-vite';
import { MultiSelectDropdown } from './multi-select-dropdown';


const meta: Meta<MultiSelectDropdown> = {
  title: 'Components/Multi Select Dropdown',
  component: MultiSelectDropdown,

  tags: ['autodocs'],

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

    useCheckbox: {
      control: 'boolean',
      description:
        'Show checkboxes and allow multiple selections',
    },

    disabled: {
      control: 'boolean',
    },

    customClass: {
      control: 'text',
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


// OPTIONS

const options = [
  {
    label: 'Price',
    value: 'price',
  },
  {
    label: 'Volume',
    value: 'volume',
  },
  {
    label: 'RSI',
    value: 'rsi',
  },
  {
    label: 'MACD',
    value: 'macd',
  },
  {
    label: 'Moving Average',
    value: 'moving-average',
  },
  {
    label: 'Bollinger Bands',
    value: 'bollinger',
  },
  {
    label: 'Stochastic',
    value: 'stochastic',
  },
  {
    label: 'Average True Range',
    value: 'atr',
  },
];


// NORMAL DROPDOWN

export const NormalDropdown: Story = {

  args: {

    label: 'Add Parameters',

    placeholder: 'Select options',

    options,

    selectedValues: [],

    useCheckbox: false,

    disabled: false,

    customClass: '',
  },
};


// CHECKBOX DROPDOWN

export const CheckboxDropdown: Story = {

  args: {

    label: 'Add Parameters',

    placeholder: 'Select options',

    options,

    selectedValues: [],

    useCheckbox: true,

    disabled: false,

    customClass: '',
  },
};


// PRESELECTED

export const Preselected: Story = {

  args: {

    label: 'Add Parameters',

    placeholder: 'Select options',

    options,

    selectedValues: [
      'price',
      'volume',
      'rsi',
    ],

    useCheckbox: true,

    disabled: false,

    customClass: '',
  },
};


// DISABLED

export const Disabled: Story = {

  args: {

    label: 'Add Parameters',

    placeholder: 'Select options',

    options,

    selectedValues: [],

    useCheckbox: false,

    disabled: true,

    customClass: '',
  },
};


// DISABLED OPTION

export const WithDisabledOption: Story = {

  args: {

    label: 'Add Parameters',

    placeholder: 'Select options',

    options: [

      {
        label: 'Price',
        value: 'price',
      },

      {
        label: 'Volume',
        value: 'volume',
      },

      {
        label: 'RSI',
        value: 'rsi',
        disabled: true,
      },

      {
        label: 'MACD',
        value: 'macd',
      },

      {
        label: 'Moving Average',
        value: 'moving-average',
      },

    ],

    selectedValues: [],

    useCheckbox: true,

    disabled: false,

    customClass: '',
  },
};


// MANY OPTIONS / SCROLL

export const Scrollable: Story = {

  args: {

    label: 'Add Parameters',

    placeholder: 'Select options',

    options: [

      {
        label: 'Price',
        value: 'price',
      },

      {
        label: 'Volume',
        value: 'volume',
      },

      {
        label: 'RSI',
        value: 'rsi',
      },

      {
        label: 'MACD',
        value: 'macd',
      },

      {
        label: 'Moving Average',
        value: 'moving-average',
      },

      {
        label: 'Bollinger Bands',
        value: 'bollinger',
      },

      {
        label: 'Stochastic',
        value: 'stochastic',
      },

      {
        label: 'Average True Range',
        value: 'atr',
      },

      {
        label: 'Momentum',
        value: 'momentum',
      },

      {
        label: 'CCI',
        value: 'cci',
      },

      {
        label: 'Williams %R',
        value: 'williams',
      },

      {
        label: 'ADX',
        value: 'adx',
      },

      {
        label: 'OBV',
        value: 'obv',
      },

      {
        label: 'Parabolic SAR',
        value: 'sar',
      },

    ],

    selectedValues: [],

    useCheckbox: true,

    disabled: false,

    customClass: '',
  },
};


// CUSTOM CSS

export const CustomStyle: Story = {

  args: {

    label: 'Add Parameters',

    placeholder: 'Select options',

    options,

    selectedValues: [],

    useCheckbox: true,

    disabled: false,

    customClass: 'custom-dropdown',
  },

  decorators: [

    (story) => ({

      ...story(),

      styles: [

        `
        .custom-dropdown {

          --dropdown-width: 400px;

          --dropdown-header-height: 50px;

          --dropdown-radius: 14px;

          --dropdown-option-height: 44px;

          --dropdown-label-size: 16px;

          --dropdown-option-size: 15px;

          --dropdown-max-height: 220px;

        }
        `,

      ],

    }),

  ],
};