'use client';
import { api } from '@/common/api';
import { Page, PageSection } from '@/common/typedef.irisations';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplaySectionLight from './DisplaySectionLight';
import { CRUD, Scoop } from '@/common/typedef';
import { toastMe } from '@/helpers/helpers';
import DisplayScoopLight from './DisplayScoopLight';

export type DisplayScoopListProps = {
  onClick: (id: string, operation: CRUD) => void;
  refresh?: number;
};
export default function DisplayScoopList({ ...props }: DisplayScoopListProps) {
  const [scoopList, setScoopList] = useState<Scoop[]>([]);
  useEffect(() => {
    const getScoop = async () => {
      try {
        const response = await axios.get(api.irisations.scoop.read);
        const newScoopList: Scoop[] = response.data.scoopList.map(
          (value: any) => ({
            ...value,
            id: value._id
          })
        );
        setScoopList(newScoopList);
      } catch (error: any) {
        console.error('Errot fetch Post => error :', error);
      }
    };
    getScoop();
  }, [props.refresh]);

  // -----------------------------------------------------------------------------------------------------
  return (
    <div className='DisplaySectionByPageLight flex flex-col'>
      {scoopList?.length > 0 &&
        scoopList.map((scoop) => (
          <DisplayScoopLight
            scoop={scoop}
            key={scoop.id}
            onClick={props.onClick}
          />
        ))}
    </div>
  );
}
