import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import ReactMarkdown from './ReactMarkdown';

// Définir la configuration de base pour la story
const meta: Meta<typeof ReactMarkdown> = {
  title: 'components/ReactMarkdown', // Nom de la story
  component: ReactMarkdown,
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
    children: 'Here is a [link to Google](https://www.google.com) and a [link to GitHub](https://github.com).'
  }
};
