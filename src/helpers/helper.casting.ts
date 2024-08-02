import { langList, levelList } from '@/common/constant';
import {
  pageInit,
  pageList,
  pageTypeList,
  picPositionList,
  sectionTypeList,
  slideTypeList,
  statutList
} from '@/common/constant.irisations';
import { Lang, Level } from '@/common/typedef';
import {
  Option,
  Page,
  PageId,
  PageType,
  PicPosition,
  SectionType,
  SlideType,
  Status
} from '@/common/typedef.irisations';

export function page2Option(pageList: Page[]): Option[] {
  if (!pageList?.length) return [];
  const result: Option[] = pageList.map((page) => ({
    value: page.id.toString(),
    label: page.label
  }));
  return result;
}
// ------------encodeStringToNumber  -------------------------------------------------------------------------------------

export function OptionValue2Page(idString: string): Page {
  const idInt = parseInt(idString, 10);
  const result: Page | undefined = pageList.find((page) => page.id === idInt);
  return result || pageInit;
}

export function getPage(id: PageId): Page {
  const result: Page | undefined = pageList.find((page) => page.id === id);
  return result || pageInit;
}

export function getLangId(language: keyof typeof Lang): number {
  return Lang[language];
}

export function lang2Id(lang: string): number {
  return langList.findIndex((option) => option.value === lang);
}

export function position2Option(position: PicPosition): Option {
  const option = picPositionList.find(
    (option) => option.value === position.toString()
  );
  return option || picPositionList[0];
}

export function position2Value(positon: PicPosition): string {
  return position2Option(positon).value;
}

export function status2Option(status: Status): Option {
  const option = statutList.find(
    (option) => option.value === status.toString()
  );
  return option || statutList[0];
}
export function status2Value(status: Status): string {
  console.log(' status==>', status);
  console.log(' status2Option(status)==>', status2Option(status));
  
  return status2Option(status).value;
}

export function pageType2Option(pageType: PageType): Option {
  const option = pageTypeList.find(
    (option) => option.value === pageType.toString()
  );
  return option || pageTypeList[0];
}


export function pageType2Value(pageType: PageType): string {
  return pageType2Option(pageType).value;
}

export function sectionType2Option(sectionType: SectionType): Option {
  const option = sectionTypeList.find(
    (option) => option.value === sectionType.toString()
  );
  return option || pageTypeList[0];
}


export function sectionType2Value(sectionType: SectionType): string {
  return sectionType2Option(sectionType).value;
}



export function slideType2Option(slideType: SlideType): Option {
  if (!slideType) return pageTypeList[0];
  const option = slideTypeList.find(
    (option) => option.value === slideType.toString()
  );
  return option || pageTypeList[0];
}


export function slideType2Value(slideType: SlideType): string {
  return slideType2Option(slideType).value;
}

export function getLevelLabel(idLevel: number): string {
  
  const result: Option | undefined = levelList.find((level) => level.value === idLevel.toString());
  return result?.label || 'no level' ;
}