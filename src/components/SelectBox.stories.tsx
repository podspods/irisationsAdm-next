import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import SelectBox from './SelectBox';
import { Option, PicPosition } from '@/common/typedef.irisations';


export const PicPositionList: Option[] = [
  { value: PicPosition.Left.toString(), label: 'Left' },
  { value: PicPosition.Right.toString(), label: 'Right' },
  { value: PicPosition.Center.toString(), label: 'Center' }
];

// Définir la configuration de base pour la story
const meta: Meta<typeof SelectBox> = {
  title: 'components/SelectBox', // Nom de la story
  component: SelectBox,
  parameters: {
    layout: 'centered' // Centrer le composant dans l'iframe
  },
  args: {
    optionlist: PicPositionList
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
    optionlist: PicPositionList
  }
};


export const Small: Story = {
  args: {
    className: 'w-24'
  }
};



