import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import MessageInfo from './MessageInfo';

// Définir la configuration de base pour la story
const meta: Meta<typeof MessageInfo> = {
  title: 'container/MessageInfo', // Nom de la story
  component: MessageInfo,
  parameters: {
    layout: 'centered' // Centrer le composant dans l'iframe
  },
  args :{
    text:'text to dsiplay'
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
