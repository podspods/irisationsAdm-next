import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes'; // Importer le fournisseur de thème
import DisplayDateRange from './DisplayDateRange';
import { dateRangeInit, dateRangeToday } from '@/common/constant';
import DisplayDateCalendar from './DisplayDateCalendar';

// Définir la configuration de base pour la story
const meta: Meta<typeof DisplayDateCalendar> = {
  title: 'components/DisplayDateCalendar', // Nom de la story
  component: DisplayDateCalendar,
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
    date : new Date()
  }
};

