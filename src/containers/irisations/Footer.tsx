'use client';
import { cn } from '@/helpers/helpers.tailwind';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PageId,
  PageSection,
  SectionType,
  Status
} from '@/common/typedef.irisations';
import { api } from '@/common/api';
import { lang2Id } from '@/helpers/helper.casting';
import DisplayFooterSection from './DisplayFooterSection';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const [pageSectionList, setpageSectionList] = useState<PageSection[]>([]);

  const { i18n  } = useTranslation();
  const myClassName = cn(
    'flex justify-center w-full items-center flex-row px-10 py-3 text-justify border-t-2 border-neutral-400'
  );

  useEffect(() => {
    const getCardByPage = async () => {
      try {
        const response = await axios.get(
          api.irisations.pageSection.readByPage(PageId.FOOTER)
        );
        const newpageSectionList: PageSection[] = response.data.sectionList.map(
          (value: any) => ({
            ...value
          })
        );
        setpageSectionList(newpageSectionList);
      } catch (error: any) {
        console.error('Errot fetch Post => error :', error);
      }
    };
    getCardByPage();
  }, []);

  const introCard = pageSectionList.find(
    (section) => section.ident.type === SectionType.PROLOG
  );
  const footerSectionList = pageSectionList.filter(
    (section) => section.ident.type === SectionType.FOOTER
  );
  return (
    <>
      <div className={myClassName}>
        {introCard && introCard.text[lang2Id(i18n.language)]}
      </div>
      <div className='lowerFooter flex m-3 flex-wrap justify-between'>
        {footerSectionList.map((section) => (
          <DisplayFooterSection
            section={section}
            key={section.ident.id}
            idLang={lang2Id(i18n.language)}
          />
        ))}
      </div>
    </>
  );
}
