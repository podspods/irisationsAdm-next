import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes'; 
import DisplayDateRange from './DisplayDateRange';
import {  dateRangeToday } from '@/common/constant';

// Définir la configuration de base pour la story
const meta: Meta<typeof DisplayDateRange> = {
  title: 'components/DisplayDateRange', // Nom de la story
  component: DisplayDateRange,
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
    dateRange:{startDate : new Date('01/01/2000'), endDate : new Date() }
  }
};

// Définir les différentes histoires pour le composant
export const OneDate: Story = {
  args: {
    dateRange:dateRangeToday
  }
};



// Définir les différentes histoires pour le composant
export const TwoDate: Story = {
  args: {
    dateRange:{startDate : new Date('01/01/2024'), endDate : new Date('01/02/2024') }
  }
};



