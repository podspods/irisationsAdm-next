/**
 * Main page for Admin slide in carousel
 * feature for this page
 * 1. CRUD Side : (section with title, text, image date range) editor par must let the possibility to edit all lang
 * 1. overview Slide
 *
 */

'use client';

import { api } from '@/common/api';
import {
  pageOptionList,
  pageList,
  pageSectionInit
} from '@/common/constant.irisations';
import {
  Page,
  PageId,
  PageSection,
  SectionType,
  Status
} from '@/common/typedef.irisations';
import { OptionValue2Page } from '@/helpers/helper.casting';
import { ChangeEvent, useState } from 'react';
import { CRUD } from '@/common/typedef';
import axios from 'axios';
import SelectBox from '@/components/SelectBox';
import EditSection from '@/containers/irisations/EditSection';
import Button from '@/components/Button';
import { toastMe } from '@/helpers/helpers';
import DisplaySectionByPageLight from '@/containers/irisations/DisplaySectionByPageLight';

export type IrisationAdminProps = {};
export default function SectionAdm({ ...props }: IrisationAdminProps) {
  const [currentPage, setCurrentPage] = useState<Page>(pageList[0]);
  const [refresh, setRefresh] = useState<number>(0);
  const [operation, setOperation] = useState<CRUD>(CRUD.READ);
  const [currentSection, setCurrentSection] =
    useState<PageSection>(pageSectionInit);

  // -------------------------------------------------------------------------------------------------
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValueSelected: string = event.target.value;
    const newPage: Page = OptionValue2Page(newValueSelected);

    if (currentSection.ident.status === Status.INIT)
      setCurrentSection((prev) => ({
        ...prev,
        ident: { ...prev.ident, pageId: newPage.id }
      }));
    setCurrentPage(newPage);
  };
  // -------------------------------------------------------------------------------------------------

  const deleteSection = async (id: string) => {
    try {
      const response = await axios.delete(
        api.irisations.pageSection.delete(id)
      );
      console.log(' handleClick==>', response);
      setCurrentSection(pageSectionInit);
      setOperation(CRUD.DELETE);
      setRefresh((prev) => prev + 1);
    } catch (error) {}
  };
  // -------------------------------------------------------------------------------------------------
  const updateSection = async (id: string) => {
    try {
      const response = await axios.get(api.irisations.pageSection.readById(id));
      console.log(' handleClick==>', response);
      setCurrentSection(response.data.section);
      setOperation(CRUD.UPDATE);
      setRefresh((prev) => prev + 1);
    } catch (error) {}
  };
  // -------------------------------------------------------------------------------------------------

  const handleClick = (id: string, operation: CRUD) => {
    toastMe(`click: ${id} : ${operation} `);

    operation === CRUD.DELETE ? deleteSection(id) : updateSection(id);
  };
  // -------------------------------------------------------------------------------------------------
  const handleNew = () => {
    setCurrentSection((prev) => ({
      ...pageSectionInit,
      ident: {
        ...pageSectionInit.ident,
        pageId: prev.ident.pageId,
        sectionOrder: prev.ident.sectionOrder + 10
      }
    }));
    setOperation(CRUD.CREATE);
  };

  // -------------------------------------------------------------------------------------------------
  const onSectionChange = (newSection: PageSection) => {
    setRefresh((prev) => prev + 1);
    setCurrentSection(newSection);
  };
  // -------------------------------------------------------------------------------------------------
  const HandleOrderReorg = async () => {
    try {
      const response = await axios.get(
        api.irisations.pageSection.readByPage(currentPage.id)
      );
      const newSectionList: PageSection[] = response.data.sectionList.map(
        async (value: any, index: number) => {
          const newSection: PageSection = {
            ...value,
            ident: { ...value.ident, sectionOrder: (index + 1) * 10 }
          };
          console.log(' value==>', value);
          console.log(' value newSection==>', newSection);
          const route = api.irisations.pageSection.update(newSection.ident.id);
          const response = await axios.post(route, newSection);
          return newSection;
        }
      );
    } catch (error: any) {
      console.error('Errot fetch Post => error :', error);
    }
  };
  // -------------------------------------------------------------------------------------------------
  const HandleMigration = async () => {
    pageList.map((page) => pageAction(page.id));
  };
  // -------------------------------------------------------------------------------------------------

  const pageAction = async (pageId: PageId) => {
    console.log(' HandleMigration==>', pageId);
    try {
      const response = await axios.get(
        api.irisations.pageSection.readByPage(pageId)
      );
      const newSectionList: PageSection[] = response.data.sectionList.map(
        async (value: any) => {
          const newSection: PageSection = {
            ...pageSectionInit,
            ident: { ...value.ident },
            image: { ...value.image },
            text: [...value.text],
            textCTA: [...pageSectionInit.textCTA],
            date: { ...value.date }
          };
          console.log(' value==>', value);
          console.log(' value newSection==>', newSection);
          const route = api.irisations.pageSection.update(newSection.ident.id);
          const response = await axios.post(route, newSection);
          return newSection;
        }
      );
    } catch (error: any) {
      console.error('Errot fetch Post => error :', error);
    }
  };
  // -------------------------------------------------------------------------------------------------
  return (
    <div className='flex flex-col justify-center items-center w-[1200px]'>
      <p>Section Admin</p>
      <div className='head_of flex flex-row justify-start w-full border border-red-800'>
        <SelectBox
          optionlist={pageOptionList}
          onChange={handleOnChange}
          label='select page'
        />
        <Button onClick={HandleOrderReorg} className=' px-2 mx-2'>
          Reorg
        </Button>
        <DisplaySectionByPageLight
          page={currentPage}
          onClick={handleClick}
          refresh={refresh}
        />
      </div>
      <hr className='border border-red-950 m-4  w-full' />
      <EditSection
        pageSection={currentSection}
        onChange={onSectionChange}
        onNew={handleNew}
      />

      <Button onClick={HandleMigration}>Zone shot migration</Button>
    </div>
  );
}
