import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import DisplayDateRange from '../../components/DisplayDateRange';
import { dateRangeToday } from '@/common/constant';
import Contact from './Contact';

// Définir la configuration de base pour la story
const meta: Meta<typeof Contact> = {
  title: 'irisations/container/Contact', // Nom de la story
  component: Contact,
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
