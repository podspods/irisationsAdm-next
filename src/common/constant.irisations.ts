import { ItemNav } from '@/components/irisations/MenuNav';
import { route } from './api';
import {
  SectionIdent,
  ContactSubject,
  ImageType,
  Option,
  Page,
  PageSection,
  PageId,
  PageType,
  PicPosition,
  Slide,
  Status,
  SectionType,
  Tab,
  SlideType
} from './typedef.irisations';
import { dateRangeToday } from './constant';
import { page2Option } from '@/helpers/helper.casting';


export const menuList: ItemNav[] = [
  {
    label: 'Home',
    url: route.irisations.home
  },
  {
    label: 'Design',
    url: route.irisations.design
  },
  {
    label: 'Restoration & Conservation',
    url: route.irisations.restoration
  },
  {
    label: 'Classes and Workshop',
    url: route.irisations.workshop
  },
  {
    label: 'Services',
    url: route.irisations.services
  },
  {
    label: 'News',
    url: route.irisations.news
  },
  {
    label: 'Contact',
    url: route.irisations.contact
  }
];

export const optionInit: Option = {
  value: '-1',
  label: 'Init value'
};

export const imageInit: ImageType = {
  src: '',
  alt: ['', ''],
  width: 1,
  height: 1,
  position: PicPosition.Center
};

export const sectionIdentInit: SectionIdent = {
  id: '',
  status: Status.INIT,
  title: ['', ''],
  titleLink: ['', ''],
  pageId: PageId.HOME,
  sectionOrder: 10,
  pageType: PageType.STANDARD,
  dateRange: dateRangeToday,
  type: SectionType.STANDARD
};

export const pageSectionInit: PageSection = {
  ident: sectionIdentInit,
  image: imageInit,
  text: ['', ''],
  textCTA: ['', ''],

  date: {
    create: new Date(),
    update: new Date()
  }
};

export const pageInit = {
  id: PageId.HOME,
  label: 'home',
  type: PageType.STANDARD
};

export const pageList: Page[] = [
  { id: PageId.HOME, label: 'home', type: PageType.HOME },
  { id: PageId.DESIGN, label: 'design', type: PageType.STANDARD },
  { id: PageId.RESTORATION, label: 'restoration', type: PageType.STANDARD },
  { id: PageId.WORKSHOP, label: 'workshop', type: PageType.STANDARD },
  { id: PageId.SERVICE, label: 'service', type: PageType.STANDARD },
  { id: PageId.NEWS, label: 'news', type: PageType.NEWS },
  { id: PageId.CONTACT, label: 'contact', type: PageType.CONTACT },
  {
    id: PageId.CONDITION_OF_USE,
    label: 'condition of use',
    type: PageType.STANDARD
  },
  { id: PageId.GENRAL_TERMS, label: 'General terms', type: PageType.STANDARD },
  { id: PageId.FOOTER, label: 'Pied de pages', type: PageType.FOOTER }
];

export const pageOptionList = page2Option(pageList);

export const picPositionList: Option[] = [
  { value: PicPosition.Left.toString(), label: 'Left' },
  { value: PicPosition.Right.toString(), label: 'Right' },
  { value: PicPosition.Center.toString(), label: 'Center' }
];

export const statutList: Option[] = [
  { value: Status.VALIDE.toString(), label: 'valide' },
  { value: Status.HIDDEN.toString(), label: 'caché' },
  { value: Status.DELETE.toString(), label: 'delete' },
  { value: Status.INIT.toString(), label: 'Init' }
];

export const pageTypeList: Option[] = [
  { value: PageType.HOME.toString(), label: 'Home page' },
  { value: PageType.STANDARD.toString(), label: 'standard page' },
  { value: PageType.NEWS.toString(), label: 'News page' },
  { value: PageType.FOOTER.toString(), label: 'Footer page' },
  { value: PageType.CONTACT.toString(), label: 'Contact page' },
  { value: PageType.OTHERS.toString(), label: 'other page' }
];

export const facebookIcon: ImageType = {
  src: '/image/facebook-j-aime.jpg',
  alt: ["facebook j'aime", 'facebook like'],
  width: 47,
  height: 33,
  position: PicPosition.Center
};

export const instagramIcon: ImageType = {
  src: '/image/instagram.jpg',
  alt: ['instagram logo', 'instagram logo'],
  width: 33,
  height: 33,
  position: PicPosition.Center
};

export const pinterestIcon: ImageType = {
  src: '/image/pinterest.jpg',
  alt: ['pinterest logo', 'pinterest logo'],
  width: 33,
  height: 33,
  position: PicPosition.Center
};

export const contactSubjectOptionList: Option[] = [
  { value: ContactSubject.DESIGN.toString(), label: 'Stained glass design' },
  {
    value: ContactSubject.RESTORATION.toString(),
    label: 'Stained glass restoration and conservation'
  },
  { value: ContactSubject.EDUCATION.toString(), label: 'Education' },
  { value: ContactSubject.CLASSES.toString(), label: 'Classes' },
  { value: ContactSubject.OTHER.toString(), label: 'Other' }
];

export const sectionTypeList: Option[] = [
  { value: SectionType.PROLOG.toString(), label: 'Prolog' },
  { value: SectionType.CTA.toString(), label: 'Click to action' },
  { value: SectionType.EPILOG.toString(), label: 'Epilog' },
  { value: SectionType.FOOTER.toString(), label: 'Pied de page' },
  { value: SectionType.NEWS.toString(), label: 'News' },
  { value: SectionType.STANDARD.toString(), label: 'stardard' }
];

export const slideTypeList: Option[] = [
  { value: SlideType.STANDARD.toString(), label: 'Standard' },
  { value: SlideType.SINGLE.toString(), label: 'Single' },
  { value: SlideType.MULTI.toString(), label: 'Multi' },
]

export const slideIinit: Slide = {
  id: 'id',
  pageId: PageId.HOME,
  title: '',
  src: '',
  // src: 'https://www.irisations.com/img/eleve/vitrail_corinne_stage_debutant_decouverte_LD_Iri.jpg',
  label: ['', ''],
  slideOrder: 10,
  alt: ['', ''],
  status: Status.INIT,
  type: 0,
  date: {
    create: new Date(),
    update: new Date()
  }
};


export const slideListInit: Slide[] =[
  slideIinit
]
