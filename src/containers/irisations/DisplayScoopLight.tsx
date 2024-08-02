import { route } from '@/common/api';
import { CRUD, Scoop } from '@/common/typedef';
import { PageSection } from '@/common/typedef.irisations';
import { getLevelLabel, getPage } from '@/helpers/helper.casting';
import { date2String } from '@/helpers/helper.date';
import { toastMe } from '@/helpers/helpers';
import { truncateString } from '@/helpers/helpers.string';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export type DisplayScoopLightProps = {
  scoop: Scoop;
  onClick: (id: string, operation: CRUD) => void;
};
/**
 *
 * @param pageSection: PageSection
 * @returns
 */
export default function DisplayScoopLight({
  ...props
}: DisplayScoopLightProps) {
  
  return (
    <>
      <div className='flex flex-row p-2 justify-between'>
        <div className='flex'>
          <span className='px-2 w-32'>
            {getPage(props.scoop.pageId).label}
          </span>
          <span className='px-2 w-32'>
            {getLevelLabel(props.scoop.level)}
          </span>
          <span className='px-4  w-72'>
            {truncateString(props.scoop.message[0],50)}
          </span>
          <span className='px-4  w-32'>
          {date2String(props.scoop.dateRange.startDate,'dd/MM/yyyy')}
          </span>
          <span className='px-4  w-32'>
            {date2String(props.scoop.dateRange.endDate,'dd/MM/yyyy')}
          </span>
        </div>
        <div className='actionButton w-1/10 flex justify-between'>
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => {
              props.onClick(props.scoop.id, CRUD.UPDATE);
            }}
            className='cursor-pointer px-2'
          />
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => {
              toastMe('click');
              props.onClick(props.scoop.id, CRUD.DELETE);
            }}
            className='cursor-pointer px-2'
          />
        </div>
      </div>
    </>
  );
}
