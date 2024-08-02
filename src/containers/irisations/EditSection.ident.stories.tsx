import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import EditSectionIdent from './EditSection.ident';
import { sectionIdentInit } from '@/common/constant.irisations';

// Définir la configuration de base pour la story
const meta: Meta<typeof EditSectionIdent> = {
  title: 'irisations/container/EditSectionIdent', // Nom de la story
  component: EditSectionIdent,
  parameters: {
    layout: 'centered' // Centrer le composant dans l'iframe
  },
  args: {
    onChange : (identInit) => {},
    ident : sectionIdentInit
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

};
