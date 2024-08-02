import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import EditCardByPage from './EditSection';
import EditCardByPageToolbar from './EditCardByPage.toolbar';

// Définir la configuration de base pour la story
const meta: Meta<typeof EditCardByPageToolbar> = {
  title: 'irisations/container/EditCardByPageToolbar', // Nom de la story
  component: EditCardByPageToolbar,
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
