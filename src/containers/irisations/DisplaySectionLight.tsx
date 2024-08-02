import { route } from '@/common/api';
import { CRUD } from '@/common/typedef';
import { PageSection } from '@/common/typedef.irisations';
import { toastMe } from '@/helpers/helpers';
import { truncateString } from '@/helpers/helpers.string';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export type DisplaySectionLightProps = {
  pageSection: PageSection;
  onClick: (id: string, operation: CRUD) => void;
};
/**
 *
 * @param pageSection: PageSection
 * @returns
 */
export default function DisplaySectionLight({
  ...props
}: DisplaySectionLightProps) {
  return (
    <>
      <div className='flex flex-row justify-between'>
        <div className='flex'>
          <span className='px-2 w-10'>
            {props.pageSection.ident.sectionOrder}
          </span>
          <span className='px-4 font-bold  w-48'>
            {truncateString(props.pageSection.ident.title[0], 15)}
          </span>
          <span className='px-4  min-w-96'>
            {truncateString(props.pageSection.text[0], 80)}
          </span>
        </div>
        <div className='actionButton w-1/10 flex justify-between'>
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => {
              toastMe('click');
              props.onClick(props.pageSection.ident.id, CRUD.UPDATE);
            }}
            className='cursor-pointer px-2'
          />
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => {
              toastMe('click');
              props.onClick(props.pageSection.ident.id, CRUD.DELETE);
            }}
            className='cursor-pointer px-2'
          />
        </div>
      </div>
    </>
  );
}
