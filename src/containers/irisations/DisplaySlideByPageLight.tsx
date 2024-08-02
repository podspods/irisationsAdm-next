'use client';
import { api } from '@/common/api';
import { Page, Slide } from '@/common/typedef.irisations';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CRUD } from '@/common/typedef';
import DisplaySlideLight from './DisplaySlideLight';

export type DisplaySlideByPageLightProps = {
  page: Page;
  onClick: (id: string, operation: CRUD) => void;
  refresh? : number;
};
export default function DisplaySlideByPageLight({
  ...props
}: DisplaySlideByPageLightProps) {
  const [slideList, setSlideList] = useState<Slide[]>([]);
  useEffect(() => {
    const getSlideByPage = async () => {
      try {
        const response = await axios.get(
          api.irisations.carousel.readByPage(props.page.id)
        );
        const newSlideList: Slide[] = response.data.slideList.map(
          (value: any) => ({
            ...value,
            id: value._id
          })
        );
        setSlideList(newSlideList);
      } catch (error: any) {
        console.error('Errot fetch Post => error :', error);
      }
    };
    getSlideByPage();
  }, [props.page.id, props.refresh]);


// -----------------------------------------------------------------------------------------------------
  return (
    <div className='DisplaySectionByPageLight flex flex-col'>
      R:[ {props.refresh}]
      {
      slideList?.length >0  &&
      slideList.map((slide) => 
            <DisplaySlideLight
              slide={slide}
              key={slide.id}
              onClick={props.onClick}
            />
        )}
    </div>
  );
}
