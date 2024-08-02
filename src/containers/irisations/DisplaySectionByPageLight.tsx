'use client';
import { api } from '@/common/api';
import { Page, PageSection } from '@/common/typedef.irisations';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplaySectionLight from './DisplaySectionLight';
import { CRUD } from '@/common/typedef';
import { toastMe } from '@/helpers/helpers';

export type DisplaySectionByPageLightProps = {
  page: Page;
  onClick: (id: string, operation: CRUD) => void;
  refresh? : number;
};
export default function DisplaySectionByPageLight({
  ...props
}: DisplaySectionByPageLightProps) {
  const [sectionList, setSectionList] = useState<PageSection[]>([]);
  useEffect(() => {
    const getCardByPage = async () => {
      try {
        const response = await axios.get(
          api.irisations.pageSection.readByPage(props.page.id)
        );
        const newSectionList: PageSection[] = response.data.sectionList.map(
          (value: any) => ({
            ...value,
            id: value._id
          })
        );
        setSectionList(newSectionList);
      } catch (error: any) {
        console.error('Errot fetch Post => error :', error);
      }
    };
    getCardByPage();
  }, [props.page.id, props.refresh]);


// -----------------------------------------------------------------------------------------------------
  return (
    <div className='DisplaySectionByPageLight flex flex-col'>
      {
      sectionList?.length >0  &&
        sectionList.map((section) => 
            <DisplaySectionLight
              pageSection={section}
              key={section.ident.id}
              onClick={props.onClick}
            />
        )}
    </div>
  );
}
