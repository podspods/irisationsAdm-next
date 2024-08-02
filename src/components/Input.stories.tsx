import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';

// Définir la configuration de base pour la story
const meta: Meta<typeof Input> = {
  title: 'components/Input', // Nom de la story
  component: Input,
  parameters: {
    layout: 'centered' // Centrer le composant dans l'iframe
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof meta>;

// Définir les différentes histoires pour le composant
export const Default: Story = {
  args: {}
};

export const WithPlaceHolder: Story = {
  args: {
    placeholder: 'this is a placeholder'
  }
};

export const WithIcon: Story = {
  args: {
    icon: faLink
  }
};

export const WithPlaceholderAndIcon: Story = {
  args: {
    placeholder: 'this is a placeholder',
    icon: faLink
  }
};

export const TypeNumber: Story = {
  args: {
    type: 'number',
    placeholder: 'width',
  }
};
