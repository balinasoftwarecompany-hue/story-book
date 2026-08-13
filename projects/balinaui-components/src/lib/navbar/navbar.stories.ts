import { Meta, StoryObj, moduleMetadata ,applicationConfig} from '@storybook/angular-vite';
import { provideRouter } from '@angular/router';
import { Navbar } from './navbar';

const meta: Meta<Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
      layout: 'fullscreen',
    },
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([])
      ]
    })
  ]
,
  argTypes: {
    brand: { control: 'text' },
    links: { control: 'object' },
    initiallyLoggedIn: { control: 'boolean' },
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
    links: [
      { label: 'Home', url: '/' },
      { label: 'Products', url: '/products' },
      { label: 'Services', url: '/services' },
      { label: 'Contact', url: '/contact' }
    ],
    initiallyLoggedIn: false,
    image: 'https://i.pinimg.com/1200x/4a/57/0c/4a570c4e8dbb4729567848eb69c19055.jpg',
  },
};

// Login toggles into this state: profile icon appears,
// clicking it opens the logout dropdown.
export const LoggedIn: Story = {
  args: {
    brand: 'Aero',
    links: [
      { label: 'Home', url: '/' },
      { label: 'Products', url: '/products' },
      { label: 'Services', url: '/services' },
      { label: 'Contact', url: '/contact' }
    ],
    initiallyLoggedIn: true,
    // username and email were removed because they are not defined on the Navbar component's props
    image: 'https://i.pinimg.com/1200x/4a/57/0c/4a570c4e8dbb4729567848eb69c19055.jpg',
  },
};

export const CustomLinks: Story = {
  args: {
    brand: 'Aero',
    links: [
      { label: 'Home', url: '/' },
      { label: 'Products', url: '/products' },
      { label: 'Services', url: '/services' },
      { label: 'Contact', url: '/contact' }
    ],
    initiallyLoggedIn: false,
    image: 'https://i.pinimg.com/1200x/4a/57/0c/4a570c4e8dbb4729567848eb69c19055.jpg',
  },
};