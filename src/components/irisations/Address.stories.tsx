import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes'; // Importer le fournisseur de thème
import Address from './Address';

// Définir la configuration de base pour la story
const meta: Meta<typeof Address> = {
  title: 'irisations/components/Address', // Nom de la story
  component: Address,
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

