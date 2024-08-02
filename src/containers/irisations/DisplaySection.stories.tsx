import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import DisplayPageSection from './DisplaySection';
import { pageSectionInit } from '@/common/constant.irisations';
import { Lang } from '@/common/typedef';
import { PageId, PageType, PicPosition, SectionType, Status } from '@/common/typedef.irisations';

// Définir la configuration de base pour la story
const meta: Meta<typeof DisplayPageSection> = {
  title: 'irisations/container/DisplaySection', // Nom de la story
  component: DisplayPageSection,
  parameters: {
    layout: 'centered' // Centrer le composant dans l'iframe
  },
  args: {
    section: {
      ident: {
        id: 'id-1',
        status: Status.VALIDE,
        pageId: PageId.DESIGN,
        pageType: PageType.NEWS,
        sectionOrder: 10,
        title: ['titre FR', 'titre EN'],
        titleLink: ['titre Link FR', 'titre Link EN'],
        dateRange: { startDate: new Date('01/01/2000'), endDate: new Date() },
        type : SectionType.STANDARD
      },
      image: {
        src: 'http://irisations.com/img/eleve/vitrail_nadine_stage_debutant_decouverte_LD_Iri.jpg',
        alt: ['Alt  image fr', 'alt image EN'],
        width: 200,
        height: 0,
        position : PicPosition.Left
      },
      text: ["<br/>1. Session Novembre 2024<br/>1. Formation Pro CAP Arts & Techniques du Verre, <br/>Vitrailliste pour adultes. Inscriptions ouvertes en Juin 2024 jusqu'au 13 Octobre 2024 sous réserve de places disponibles.",
         "[EN] Session Novembre 2024 - Formation Pro CAP Arts & Techniques du Verre, Vitrailliste pour adultes. Inscriptions ouvertes en Juin 2024 jusqu'au 13 Octobre 2024 sous réserve de places disponibles."],
       textCTA: ['text CTA FR', 'textCTA EN'], 
      date: {
        create: new Date(),
        update: new Date()
      }
    },
    lang: Lang.FR
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
 
};

export const DefaultEN: Story = {
  args: {

    lang: Lang.EN
  }
};



export const News: Story = {
  args: {
    section: {
      ident: {
        id: 'id-1',
        status: Status.VALIDE,
        pageId: PageId.DESIGN,
        pageType: PageType.NEWS,
        sectionOrder: 10,
        title: ['titre FR', 'titre EN'],
        titleLink: ['titre Link FR', 'titre Link EN'],
        dateRange: { startDate: new Date('01/01/2000'), endDate: new Date() },
        type : SectionType.NEWS
      },
      image: {
        src: 'http://irisations.com/img/eleve/vitrail_nadine_stage_debutant_decouverte_LD_Iri.jpg',
        alt: ['Alt  image fr', 'alt image EN'],
        width: 200,
        height: 0,
        position : PicPosition.Left
      },
      text: ["<br/>1. Session Novembre 2024<br/>1. Formation Pro CAP Arts & Techniques du Verre, <br/>Vitrailliste pour adultes. Inscriptions ouvertes en Juin 2024 jusqu'au 13 Octobre 2024 sous réserve de places disponibles.",
         "[EN] Session Novembre 2024 - Formation Pro CAP Arts & Techniques du Verre, Vitrailliste pour adultes. Inscriptions ouvertes en Juin 2024 jusqu'au 13 Octobre 2024 sous réserve de places disponibles."],
       textCTA: ['text CTA FR', 'textCTA EN'], 
      date: {
        create: new Date(),
        update: new Date()
      }
    },
    lang: Lang.FR
  }
};
