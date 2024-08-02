import { symlink } from 'fs';
import { DateRange } from './typedef';

export enum PicPosition {
  Left = 1,
  Right,
  Center
}
export enum Status {
  VALIDE = 1000,
  HIDDEN,
  DELETE,
  INIT
}

export enum PageId {
  HOME = 2000,
  DESIGN,
  RESTORATION,
  WORKSHOP,
  SERVICE,
  NEWS,
  CONTACT,
  CONDITION_OF_USE,
  GENRAL_TERMS,
  FOOTER
}

export enum EditFunction {
  ITALIC = 3000,
  BOLD,
  ORD_LIST,
  UNORD_LIS,
  HR,
  BR,
  EXPORT_IMAGE,
  ADD_LINK,
  INPUT_ADD_LINK, // when input is open
  UPLOAD,
  TEST
}

export enum ContactSubject {
  DESIGN = 4000,
  RESTORATION,
  EDUCATION,
  CLASSES,
  OTHER
}
export enum PageType {
  HOME = 5000,
  STANDARD,
  NEWS,
  FOOTER,
  CONTACT,
  OTHERS
}

export enum SectionType {
  STANDARD = 6000,
  PROLOG,
  CTA,
  NEWS,
  FOOTER,
  EPILOG
}
export enum SlideType {
  SINGLE = 7000,
  MULTI,
  STANDARD
}


export type SectionIdent = {
  id: string;
  pageType: PageType;
  status: Status;
  title: string[]; // multi lang title
  titleLink: string[]; // multi lang link for title
  pageId: PageId;
  sectionOrder: number;
  dateRange: DateRange;
  type: SectionType;
};

export type Option = {
  value: string;
  label: string;
};

export type Page = {
  id: number;
  label: string;
  type: PageType;
};

export type PageSection = {
  // export type PageCard = {

  ident: SectionIdent;
  image: ImageType;
  text: string[]; // multi lang text body
  textCTA: string[]; // multi lang text CTA
  date: {
    create: Date;
    update: Date;
  };
};

// export type Slide = {
//   src: string;
//   label: string;
//   alt: string;
//   id: number;
// };

export type ImageType = {
  src: string;
  alt: string[]; // multi lang alt
  width: number;
  height: number;
  position: PicPosition;
};

export type Slide = {
  id: string;
  pageId: number;
  title: string;
  src: string;
  label: string[];
  slideOrder: number;
  alt: string[];
  status: Status;
  type: number;
  date: {
    create: Date;
    update: Date;
  };
};

export type Tab = {
  id: string;
  title: string;
  content: JSX.Element;
};

