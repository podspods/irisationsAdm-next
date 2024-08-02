import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import { imageInit } from '@/common/constant.irisations';
import { ImageType } from '@/common/typedef.irisations';
import EditSectionImageBox from './EditSection.imageBox';

// Définir la configuration de base pour la story
const meta: Meta<typeof EditSectionImageBox> = {
  title: 'irisations/container/EditSectionImageBox', // Nom de la story
  component: EditSectionImageBox,
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
    onChange : (image :ImageType) => {},
    image : imageInit
  }
};
