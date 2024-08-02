import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import { scoopInit } from '@/common/constant';
import DisplayScoop from './DisplayScoop';

// Définir la configuration de base pour la story
const meta: Meta<typeof DisplayScoop> = {
  title: 'container/DisplayScoop', // Nom de la story
  component: DisplayScoop,
  parameters: {
    layout: 'centered' // Centrer le composant dans l'iframe
  },
  args :{
    scoop : scoopInit
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
