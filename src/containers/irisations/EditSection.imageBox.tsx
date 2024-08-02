import { langList } from '@/common/constant';
import { imageInit, picPositionList } from '@/common/constant.irisations';
import { Lang } from '@/common/typedef';
import { ImageType, Option, PicPosition } from '@/common/typedef.irisations';
import Input from '@/components/Input';
import SelectBox from '@/components/SelectBox';
import { lang2Id, position2Option, position2Value } from '@/helpers/helper.casting';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export type EditSectionImageBoxProps = {
  onChange: (image: ImageType) => void;
  image: ImageType;
};
/**
 *
 * @param onChange: (image: ImageType) => void;
 * @param  image: ImageType;
 * @returns
 */
export default function EditSectionImageBox({
  ...props
}: EditSectionImageBoxProps) {

// ---------------------------------------------------------------------------------------------------
  const handleChangePicSrc = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange({...props.image, src: event.target.value});
  };

  // ---------------------------------------------------------------------------------------------------
  const handleChangePicAlt = (
    event: ChangeEvent<HTMLInputElement>,
    idLang: number
  ) => {
    const newValue = event.target.value;
    const newAlt =
      idLang === 0 ? [newValue, props.image.alt[1]] : [props.image.alt[0], newValue];

    props.onChange({...props.image, alt: newAlt});
  };
  // ---------------------------------------------------------------------------------------------------
  const handleChangePicWidth = (event: ChangeEvent<HTMLInputElement>) => {

    props.onChange({...props.image,  width: parseInt(event.target.value, 10)});
  };
  // ---------------------------------------------------------------------------------------------------
  const handleChangePicHeight = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange({...props.image,  height: parseInt(event.target.value, 10)});
  };
  // ---------------------------------------------------------------------------------------------------
  const handlePositionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    
    props.onChange({...props.image,  position: parseInt(event.target.value, 10)});
  };
  // ---------------------------------------------------------------------------------------------------

  return (
    <>
      <div className='props.image flex flex-row border border-cyan-700'>
        <div className='flex flex-col pl-2'>
          <Input
            value={props.image.src}
            onChange={handleChangePicSrc}
            placeholder='image src'
          />
          {langList.map((lang) => {
            const langId = lang2Id(lang.value);
            return (
              <Input
                key={langId}
                value={props.image.alt[langId]}
                onChange={(event) => handleChangePicAlt(event, langId)}
                placeholder={`Alt text for ${lang.label}`}
              />
            );
          })}
        </div>
        <div className='flex flex-col pr-2'>
          <Input
            placeholder='width'
            value={props.image.width}
            onChange={handleChangePicWidth}
            type='number'
            className={'w-20 px-2 mx-1'}
          />
          <Input
            placeholder='height'
            value={props.image.height}
            onChange={handleChangePicHeight}
            type='number'
            className={'w-20 px-2 mx-1'}
          />
          <SelectBox
            optionlist={picPositionList}
            value={position2Value(props.image.position)}
            className={'w-20 px-2 mx-1'}
            onChange={handlePositionChange}
            label='pic position'
          />
        </div>
      </div>
    </>
  );
}
