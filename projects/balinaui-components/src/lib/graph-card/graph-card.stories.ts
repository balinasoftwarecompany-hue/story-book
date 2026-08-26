import { Meta, StoryObj } from '@storybook/angular-vite';
import { GraphCard } from './graph-card';


const meta: Meta<GraphCard> = {
  title: 'Components/GraphCard',

  component: GraphCard,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered'
  },

  argTypes: {

    // INPUTS
    title: {
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

    // EVENT
    clicked: {
      action: 'clicked'
    }
  }
};

export default meta;

type Story = StoryObj<GraphCard>;

// DEFAULT


export const Default: Story = {

  args: {
    title: 'GMT',
    clickable: false,
    disabled: false,
    customClass: 'auto-card'
  }
};

// WITH IMAGE


export const WithImage: Story = {

  args: {
    title: 'GMT',
    clickable: false,
    disabled: false,
    customClass: 'auto-card'
  },

  render: (args) => ({

    props: args,

    template: `
      <brb-card
        [title]="title"
        [clickable]="clickable"
        [disabled]="disabled"
        [customClass]="customClass"
        (clicked)="clicked($event)"
      >

        <img
          class="card-image"
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7"
          alt="GMT"
        />

      </brb-card>
    `
  })
};

// WITH TEXT

export const WithText: Story = {

  args: {
    title: 'GMT',
    clickable: false,
    disabled: false,
    customClass: 'auto-card'
  },

  render: (args) => ({

    props: args,

    template: `
      <brb-card
        [title]="title"
        [clickable]="clickable"
        [disabled]="disabled"
        [customClass]="customClass"
        (clicked)="clicked($event)"
      >

        <p class="card-text">
          This is developer content inside the
          reusable Balina Card component.
          The Card automatically grows according
          to the content.
        </p>

      </brb-card>
    `
  })
};

// WITH BUTTONS
export const WithButtons: Story = {

  args: {
    title: 'GMT',
    clickable: false,
    disabled: false,
    customClass: 'auto-card'
  },

  render: (args) => ({

    props: args,

    template: `
      <brb-card
        [title]="title"
        [clickable]="clickable"
        [disabled]="disabled"
        [customClass]="customClass"
        (clicked)="clicked($event)"
      >

        <div class="button-content">

          <p>
            GMT information
          </p>

          <div class="buttons">

            <button>
              Refresh
            </button>

            <button>
              View Details
            </button>

          </div>

        </div>

      </brb-card>
    `
  })
};

// CLICKABLE
export const Clickable: Story = {

  args: {
    title: 'GMT',
    clickable: true,
    disabled: false,
    customClass: 'auto-card'
  }
};

// DISABLED
export const Disabled: Story = {

  args: {
    title: 'GMT',
    clickable: true,
    disabled: true,
    customClass: 'auto-card'
  }
};


// CUSTOM SIZE
export const CustomSize: Story = {

  args: {
    title: 'GMT',
    clickable: false,
    disabled: false,
    customClass: 'large-card'
  }
};