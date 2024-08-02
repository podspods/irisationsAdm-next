import { api } from '@/common/api';
import {
  pageList,
  pageOptionList,
  slideIinit
} from '@/common/constant.irisations';
import { CRUD } from '@/common/typedef';
import { Page, Slide, Status } from '@/common/typedef.irisations';
import Button from '@/components/Button';
import SelectBox from '@/components/SelectBox';
import DisplaySectionByPageLight from '@/containers/irisations/DisplaySectionByPageLight';
import DisplaySlideByPageLight from '@/containers/irisations/DisplaySlideByPageLight';
import EditCarousel from '@/containers/irisations/EditCarousel';
import { OptionValue2Page } from '@/helpers/helper.casting';
import { toastMe } from '@/helpers/helpers';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';

export type CarouselAdmProps = {};
export default function CarouselAdm({ ...props }: CarouselAdmProps) {
  // const slide: Slide = slideIinit;
  const [currentPage, setCurrentPage] = useState<Page>(pageList[0]);
  const [refresh, setRefresh] = useState<number>(0);
  const [slide, setSlide] = useState<Slide>(slideIinit);

  // -------------------------------------------------------------------------------------------------

  const handleOnPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValueSelected: string = event.target.value;
    const newPage: Page = OptionValue2Page(newValueSelected);

    setCurrentPage(newPage);
  };
  // -------------------------------------------------------------------------------------------------
  const handleSubmit = async () => {
    console.log('handleSubmit id ==>', slide.id);

    try {
      const route =
        slide.status === Status.INIT
          ? api.irisations.carousel.create
          : api.irisations.carousel.update(slide.id);
      const response = await axios.post(route, slide);
      console.log(' handleSubmit response==>', response);

      setSlide((prev) => ({
        ...prev,
        ...response.data.response
      }));
      // props.onChange(slide);
      setRefresh((prev) => prev + 1);

      toastMe(`slide Added/Updated : ${response.data.message}`);
    } catch (error) {}
  };

  // -------------------------------------------------------------------------------------------------
  const HandleSlideOrderReorg = async () => {
    try {
      const response = await axios.get(
        api.irisations.carousel.readByPage(currentPage.id)
      );
      const newSlideList: Slide[] = response.data.sectionList.map(
        async (value: any, index: number) => {
          const newSlide: Slide = {
            ...value,
            slideOrder: (index + 1) * 10
          };

          const route = api.irisations.carousel.update(newSlide.id);
          const response = await axios.post(route, newSlide);
          return newSlide;
        }
      );
    } catch (error: any) {
      console.error('Errot fetch Post => error :', error);
    }
  };
  // -------------------------------------------------------------------------------------------------
  const deleteSection = async (id: string) => {
    try {
      const response = await axios.delete(api.irisations.carousel.delete(id));
      console.log(' handleClick==>', response);
      setSlide(slideIinit);
      setRefresh((prev) => prev + 1);
    } catch (error) {}
  };
  // -------------------------------------------------------------------------------------------------
  const updateSection = async (id: string) => {
    try {
      const response = await axios.get(api.irisations.carousel.readById(id));
      console.log(' handleClick==>', response);
      setSlide(response.data.slide);
      setRefresh((prev) => prev + 1);
    } catch (error) {}
  };

  // -------------------------------------------------------------------------------------------------
  const handleClick = (id: string, operation: CRUD) => {
    toastMe(`click: ${id} : ${operation} `);
    
    operation === CRUD.DELETE ? deleteSection(id) : updateSection(id);
  };
  // -------------------------------------------------------------------------------------------------
  const HandleSlideMigration = () => {};

  // -------------------------------------------------------------------------------------------------
  const onSlideChange = (slide: Slide) => {
    setSlide((prev) => ({ ...prev, ...slide }));
  };

  // -------------------------------------------------------------------------------------------------
  const handleNew = () => {
    setSlide((prev) => ({
      ...slideIinit,
      pageId: prev.pageId,
      slideOrder: prev.slideOrder + (10*1)
    }));
  };
  // -----------------------------------------------------------------(--------------------------------

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-row justify-center items-center'>
        CarouselAdm: :[{refresh}]
      </div>
      <div className='flex flex-row p-4'>
        <SelectBox
          optionlist={pageOptionList}
          onChange={handleOnPageChange}
          label='select page'
        />
        <Button onClick={HandleSlideOrderReorg} className=' px-2 mx-2'>
          Reorg
        </Button>
        <DisplaySlideByPageLight
          page={currentPage}
          onClick={handleClick}
          refresh={refresh}
        />
      </div>
      <hr className='border border-red-950 m-4  w-full' />
      {/* <Button onClick={handleNew}  className='w-40'>New</Button> */}
      <EditCarousel slide={slide} onChange={onSlideChange} />
      <div className='flex flex-row'>
        <Button onClick={handleSubmit} className='p-2'>
          {slide?.status === Status.INIT ? 'Create' : 'Update'}
        </Button>
        <Button onClick={handleNew} className='ml-1 p-2'>
          New
        </Button>

        <Button onClick={HandleSlideMigration} className='ml-1 p-2'>one shot migration</Button>
      </div>
    </div>
  );
}
