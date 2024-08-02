import { dateInit } from '@/common/constant';
import {
  date2Day,
  date2MonthStringShort,
  date2Year
} from '@/helpers/helper.date';

export type DisplayDateProps = React.HTMLAttributes<HTMLDivElement> & {
  date: Date;
};
/**
 *
 * @param   date : Date:
 * @returns
 */
export default function DisplayDateCalendar({ ...props }: DisplayDateProps) {
  const dayStart = date2Day(props.date);
  const monthStringStart = date2MonthStringShort(props.date);
  const yearStart = date2Year(props.date);

  return (
    <>
      {props.date !== dateInit && (
        <div className='px-4'>
          <div className='flex flex-col  w-20 shadow'>
            <div className='text-center rounded-t-lg border border-neutral-200 bg-neu(tral-100 text-3xl  text-neutral-300  '>
              {dayStart}
            </div>
            <div className='text-center  text-xs  bg-gradient-to-t from-red-800 to-red-500 text-neutral-50 '>
              {monthStringStart}
            </div>

            <div className='text-center text-base  rounded-b-lg bg-gradient-to-t from-red-800 to-red-500  text-neutral-50 '>
              {yearStart}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
