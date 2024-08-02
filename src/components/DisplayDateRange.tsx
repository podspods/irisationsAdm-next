import { DateRange } from '@/common/typedef';
import {
  daysBetweenDates,
  sortDates
} from '@/helpers/helper.date';
import { useTheme } from 'next-themes';

import DisplayDateCalendar from './DisplayDateCalendar';
import { commonClass, darkMode, ligthMode } from '@/common/constant.theme';
import { cn } from '@/helpers/helpers.tailwind';
import { dateInit } from '@/common/constant';
import { useTranslation } from 'react-i18next';
import { AND, TO } from '@/common/constant.locale';

export type DisplayDateProps = React.HTMLAttributes<HTMLDivElement> & {
  dateRange: DateRange;
};
/**
 *
 * @param  dateRange: DateRange;
 * sort date before displaying
 * @returns
 */
export default function DisplayDateRange({ ...props }: DisplayDateProps) {

  const { theme } = useTheme();
  const [t] = useTranslation()
  const themeMode = theme === 'dark' ? darkMode : ligthMode;
  const baseClass = 'flex flex-row items-center justify-center p-4 rounded'
  const className = cn(baseClass,commonClass, themeMode, props.className);

const isSecondDateDisplayed = ( dateRange: DateRange): {linkWord : string, sameDay : boolean , firstDate : Date, lastDate: Date}=> {

  if (!dateRange  || !dateRange.startDate || !dateRange.startDate ) 
    return   {linkWord : '', sameDay : true, firstDate : dateInit, lastDate : dateInit}

  const [firstDate, lastDate] = sortDates(
    dateRange.startDate,
    dateRange.endDate
  );
  const linkWord = daysBetweenDates(firstDate, lastDate) > 1 ? t(TO) : t(AND);
  const sameDay = daysBetweenDates(firstDate, lastDate) ===0
  return  {firstDate, lastDate, linkWord, sameDay}
}
const {linkWord, sameDay, firstDate,lastDate } = isSecondDateDisplayed (props.dateRange);  
  return (
    // <div className='px-4 '>
    <div className={className}>
    <DisplayDateCalendar date={firstDate} />
      {!sameDay && (
        <>
          <span>{linkWord}</span>
          <DisplayDateCalendar date={lastDate} />
        </>
      )}
    </div>
  );
}
