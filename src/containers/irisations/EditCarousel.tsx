import { langList } from '@/common/constant';
import { pageOptionList, slideTypeList, statutList } from '@/common/constant.irisations';
import { Page, Slide } from '@/common/typedef.irisations';
import Input from '@/components/Input';
import SelectBox from '@/components/SelectBox';
import {
  lang2Id,
  OptionValue2Page,
  slideType2Value,
  status2Value
} from '@/helpers/helper.casting';
import { ChangeEvent } from 'react';

export type EditCarouselProps = {
  slide: Slide;
  onChange: (slide: Slide) => void;
};
export default function EditCarousel({ ...props }: EditCarouselProps) {
  // ---------------------------------------------------------------------------------------------------
  const handleChangeSrc = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange({ ...props.slide, src: event.target.value });
  };
  // ---------------------------------------------------------------------------------------------------
  const handleChangeAlt = (
    event: ChangeEvent<HTMLInputElement>,
    idLang: number
  ) => {
    const newValue = event.target.value;
    const newAlt =
      idLang === 0
        ? [newValue, props.slide.alt[1]]
        : [props.slide.alt[0], newValue];

    props.onChange({ ...props.slide, alt: newAlt });
  };
  // ---------------------------------------------------------------------------------------------------
  const handleChangeLabel = (
    event: ChangeEvent<HTMLInputElement>,
    idLang: number
  ) => {
    const newValue = event.target.value;
    const newLabel =
      idLang === 0
        ? [newValue, props.slide.label[1]]
        : [props.slide.label[0], newValue];

    props.onChange({ ...props.slide, label: newLabel });
  };
  //---------------------------------------------------------------------------------------------------------------
  const handleChangeStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChange({
      ...props.slide,
      status: parseInt(event?.target.value, 10)
    });
  };
  //---------------------------------------------------------------------------------------------------------------
const handleChangeOrder = (event: ChangeEvent<HTMLInputElement>) => {
    const newOrder = parseInt(event.target.value, 10);
    props.onChange({ ...props.slide, slideOrder: newOrder });
  };
  // ---------------------------------------------------------------------------------------------------
  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    props.onChange({ ...props.slide, title: newValue });
  };
  // ---------------------------------------------------------------------------------------------------
  const handleChangeSlideType = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChange({
      ...props.slide,
      type: parseInt(event?.target.value, 10)
    });
  };
  //---------------------------------------------------------------------------------------------------------------
  const handleOnChangePage = (event: ChangeEvent<HTMLSelectElement>) => {
    const newPage: Page = OptionValue2Page(event.target.value);
    props.onChange({ ...props.slide, pageId: newPage.id });
  };
  // ---------------------------------------------------------------------------------------------------------------

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col'>
        <SelectBox
          optionlist={slideTypeList}
          value={slideType2Value(props.slide.type)}
          className='my-0 w-24 py-1'
          onChange={handleChangeSlideType}
          label='section type'
        />
        <Input
          value={props.slide.slideOrder}
          onChange={handleChangeOrder}
          type='number'
          step={10}
          className={'w-20'}
          placeholder='Order'
        />
        <SelectBox
          optionlist={pageOptionList}
          value={props.slide.pageId.toString()}
          onChange={handleOnChangePage}
          className='my-0'
          label='page belonging'
        />
              <SelectBox
          optionlist={statutList}
          value={status2Value(props.slide.status)}
          className='my-0 w-20'
          onChange={handleChangeStatus}
          label='page status'
        />
        <Input
          value={props.slide.title}
          onChange={handleChangeTitle}
          type='text'
          className={'w-20'}
          placeholder='Title'
        />
      </div>
      <div className='flex flex-col'>
        <Input
          value={props.slide.src}
          onChange={handleChangeSrc}
          placeholder='image src'
          className='w-full'
        />
        <div className='flex flex-row'>
          {langList.map((lang) => {
            const langId = lang2Id(lang.value);
            return (
              <Input
                key={langId}
                value={props.slide.alt[langId]}
                onChange={(event) => handleChangeAlt(event, langId)}
                placeholder={`Alt text for ${lang.label}`}
              />
            );
          })}
        </div>
        <div className='flex flex-row'>
          {langList.map((lang) => {
            const langId = lang2Id(lang.value);
            return (
              <Input
                key={langId}
                value={props.slide.label[langId]}
                onChange={(event) => handleChangeLabel(event, langId)}
                placeholder={`Label ${lang.label}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
