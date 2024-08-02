import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import AccessMap from './AccessMap';

// Définir la configuration de base pour la story
const meta: Meta<typeof AccessMap> = {
  title: 'container/AccessMap', // Nom de la story
  component: AccessMap,
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

export const Default: Story = {
  args: {
   
  }
};
