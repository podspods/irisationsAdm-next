import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes'; // Importer le fournisseur de thème
import DisplayDate from './DisplayDate';

// Définir la configuration de base pour la story
const meta: Meta<typeof DisplayDate> = {
  title: 'components/DisplayDate', // Nom de la story
  component: DisplayDate,
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
  args: {
    label: 'Label',
    date: new Date()
  }
};

