import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { Navbar } from './navbar';

const meta: Meta<Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    brand: { control: 'text' },
    links: { control: 'object' },
    initiallyLoggedIn: { control: 'boolean' },
    userName: { control: 'text' },
    userEmail: { control: 'text' },
    login: { action: 'logged in' },
    logout: { action: 'logged out' },
  },
};

export default meta;
type Story = StoryObj<Navbar>;

// Default: shows the Login button first
export const LoggedOut: Story = {
  args: {
    brand: 'Aero',
    links: ['Contact Us', 'Parameter'],
    initiallyLoggedIn: false,
  },
};

// Login toggles into this state: profile icon appears,
// clicking it opens the logout dropdown.
export const LoggedIn: Story = {
  args: {
    brand: 'Aero',
    links: ['Contact Us', 'Parameter'],
    initiallyLoggedIn: true,
    userName: 'Abebe Alemu',
    userEmail: 'Abebe@example.com',
  },
};

export const CustomLinks: Story = {
  args: {
    brand: 'Aero',
    links: ['Contact Us', 'Parameter', 'About', 'Support'],
    initiallyLoggedIn: false,
  },
};