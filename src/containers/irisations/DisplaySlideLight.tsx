import { route } from '@/common/api';
import { CRUD } from '@/common/typedef';
import {  Slide } from '@/common/typedef.irisations';
import { toastMe } from '@/helpers/helpers';
import { truncateString } from '@/helpers/helpers.string';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export type DisplaySectionLightProps = {
  slide: Slide;
  onClick: (id: string, operation: CRUD) => void;
};
/**
 *
 * @param  slide: Slide;
 * @param  onClick: (id: string, operation: CRUD) => void;
 * @returns
 */
export default function DisplaySlideLight({
  ...props
}: DisplaySectionLightProps) {
  return (
    <>
      <div className='flex flex-row justify-between'>
        <div className='flex'>
          <span className='px-2 w-10'>
            {props.slide.slideOrder}
          </span>
          <span className='px-4  min-w-96'>
            {truncateString(props.slide.title, 80)}
          </span>
          <span className='px-4  min-w-96'>
            {truncateString(props.slide.label[0], 80)}
          </span>
        </div>
        <div className='actionButton w-1/10 flex justify-between'>
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => {
              props.onClick(props.slide.id, CRUD.UPDATE);
            }}
            className='cursor-pointer px-2'
          />
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => {
              props.onClick(props.slide.id, CRUD.DELETE);
            }}
            className='cursor-pointer px-2'
          />
        </div>
      </div>
    </>
  );
}
