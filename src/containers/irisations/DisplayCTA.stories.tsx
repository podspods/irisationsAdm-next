import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import DisplayCTA from './DisplayCTA';
import { PageSection } from '@/common/typedef.irisations';
import { pageSectionInit } from '@/common/constant.irisations';

const meta: Meta<typeof DisplayCTA> = {
  title: 'irisations/container/DisplayCTA', // Nom de la story
  component: DisplayCTA,
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

const wksCTA : PageSection = pageSectionInit ;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    section: wksCTA,
    idlang: 0
  }
};

