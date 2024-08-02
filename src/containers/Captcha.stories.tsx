import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import Captcha from './Captcha';

// Définir la configuration de base pour la story
const meta: Meta<typeof Captcha> = {
  title: 'container/Captcha', // Nom de la story
  component: Captcha,
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
