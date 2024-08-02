
import React from 'react'; // Ajoutez cette ligne
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes'; // Importer le fournisseur de thème pour utiliser `useTheme`
import ButtonDark from './ButtonDark';

// Définir la configuration de base pour la story
const meta: Meta<typeof ButtonDark> = {
  title: 'Components/ButtonDark', // Nom de la story
  component: ButtonDark,
  parameters: {
    // Pour centrer le composant dans l'iframe
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Définir les différentes histoires pour le composant
export const Default: Story = {
  args: {},
};
