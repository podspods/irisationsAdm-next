'use client';
// import { useLangContext } from '@/app/(project)/irisations/layout';
import { api } from '@/common/api';
import {  PageSection, PageId, Slide, Status, SectionType } from '@/common/typedef.irisations';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from '../Carousel';
import DisplaySection from '@/containers/irisations/DisplaySection';
import DisplayCTA from './DisplayCTA';
import DisplayProlog from './DisplayProlog';
import DisplayEpilog from './DisplayEpilog';
import { useTranslation } from 'react-i18next';
import { lang2Id } from '@/helpers/helper.casting';
import { Scoop } from '@/common/typedef';
import { scoopInit } from '@/common/constant';
import DisplayScoop from '../DisplayScoop';

export type DisplayPageProps = {
  id : number;
};
export default function DisplayPage({ ...props }: DisplayPageProps) {
  const { i18n  } = useTranslation();

  const idLang = lang2Id(i18n.language);
  
  
  const [pageSectionList, setpageSectionList] = useState<PageSection[]>([]);
  const [prolog, setProlog] = useState<PageSection>();
  const [epilog, setEpilog] = useState<PageSection>();
  const [sectionCTA, setSectionCTA] = useState<PageSection>();
  const [slideList, setSlideList] = useState<Slide[]>([]);
  const [scoop, setScoop] = useState<Scoop>(scoopInit);

  useEffect(() => {
    const getCardByPage = async () => {
      try {
        const responseCarousel = await axios.get(
          api.irisations.carousel.readByPage(props.id)
        );
        const slideList: Slide[] = responseCarousel.data.slideList.map(
          (value: any) => ({
            ...value
          })
        );
        if (slideList.length >0 ) setSlideList(slideList)
        
        const response = await axios.get(
          api.irisations.pageSection.readByPage(props.id)
        );
        const newpageSectionList: PageSection[] = response.data.sectionList.map(
          (value: any) => ({
            ...value
          })
        );
        setpageSectionList(newpageSectionList);

        const responseScoop = await axios.get(
          api.irisations.scoop.readByPage(props.id)
        );
        const newScoopList: Scoop[] = responseScoop.data.scoopList.map(
          (value: any) => ({
            ...value
          })
        );
        
        if (newScoopList.length > 0) setScoop(newScoopList[0]) 
        const prolog = newpageSectionList.find((section) => section.ident.type === SectionType.PROLOG)
        if (prolog) setProlog(prolog)
          const epilog = newpageSectionList.find((section) => section.ident.type === SectionType.EPILOG)
        if (epilog) setEpilog(epilog)
          const sectionCTA = newpageSectionList.find((section) => section.ident.type === SectionType.CTA)
        if (sectionCTA) setSectionCTA(sectionCTA)
        const pageSectionList = newpageSectionList.filter((section) => section.ident.type === SectionType.STANDARD ||  section.ident.type === SectionType.NEWS)
        if (pageSectionList.length >0 ) setpageSectionList(pageSectionList)


      } catch (error: any) {
        console.error('Errot fetch Post => error :', error);
      }
    };
    getCardByPage();
  }, [props.id]);
  return (
    <div className='DisplayPage flex flex-col'>
      {scoop && <DisplayScoop  scoop={scoop} idlang={idLang}/>}
      { slideList.length >0 &&  <Carousel slideList={slideList} idlang={idLang}/> }
      { prolog?.ident.status === Status.VALIDE &&  <DisplayProlog section={prolog} idlang={idLang}/>}
      { sectionCTA?.ident.status === Status.VALIDE && sectionCTA &&  <DisplayCTA section={sectionCTA} idLang={idLang}/>}

      {pageSectionList.length >0  && pageSectionList.map((pageSection) => (
        <DisplaySection section={pageSection} key={pageSection.ident.id} lang={idLang}/>
      ))}
      { epilog?.ident.status === Status.VALIDE && prolog &&  <DisplayEpilog section={prolog} idlang={idLang}/>}

    </div>
  );
}
