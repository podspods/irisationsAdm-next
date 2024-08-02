import { DateRange } from '@/common/typedef';
import { DateTime } from 'luxon';
export function date2String (date: Date, format : string) : string {

  if (!date || format ==='') return '';
  
  const dateTime = DateTime.fromJSDate(new Date(date));
  const formattedDate = dateTime.toFormat(format);
  return formattedDate;
}

export function date2Day (date: Date) : string {
  return date2String (date,'dd');
}
export function date2Month (date: Date) : string {
  return date2String (date,'MM');
}
export function date2Year (date: Date) : string {
  return date2String (date,'yyyy');
}
export function date2MonthString (date: Date) : string {
  return date2String (date,'MMMM');
}

export function date2MonthStringShort (date: Date) : string {
  return date2String (date,'MMM');
}

export function sortDates(date1: Date, date2: Date): [Date, Date] {
  if (date1 > date2) {
    return [date2, date1]; // date1 est après date2
  } else if (date1 < date2) {
    return [date1, date2]; // date1 est avant date2
  } else {
    return [date1, date2]; // Les deux dates sont identiques
  }
}

export function daysBetweenDates(dateA: Date, dateB: Date): number {

  const date1 = new Date (dateA)
  const date2 = new Date (dateB)
  const timeDifference = Math.abs(date2.getTime() - date1.getTime());
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
  return daysDifference;
}

export function isDateInRange (currentDate: Date, dateRange: DateRange): boolean {
  return new Date(currentDate) >= new Date(dateRange.startDate) && new Date(currentDate) <= new Date(dateRange.endDate);
};
