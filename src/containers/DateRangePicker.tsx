import {  dateRangeToday, today } from '@/common/constant';
import { DateRange } from '@/common/typedef';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Assurez-vous d'importer le CSS
import { fr } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
export type DateRangePickerProps = {
  dateRange?: DateRange;
  onDatesChange: (dateRange: DateRange) => void;
};
/**
 *
 * @param  dateRange : DateRange ;
 * @param  onDatesChange: (dateRange : DateRange ) => void;
 * @returns
 */
export default function DateRangePicker({
  dateRange = dateRangeToday,
  ...props
}: DateRangePickerProps) {
  const {i18n} = useTranslation()
  const handleStartDateChange = (date: Date | null) => {
    const newDate = date || today;
    props.onDatesChange({ ...dateRange, startDate: newDate });
  };

  const handleEndDateChange = (date: Date | null) => {
    const newDate = date || today;
    props.onDatesChange({ ...dateRange, endDate: newDate });
  };

  return (
    <>
      <div className='flex flex-col space-y-4 w-32'>
        <div className='relative'>
          <label
            htmlFor={'startDate'}
            className='relative block rounded-md border border-gray-400 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2'>
            <DatePicker
              id={'startDate'}
              selected={dateRange.startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={dateRange.startDate}
              endDate={dateRange.endDate}
              className='block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
              placeholderText='Select start date'
              locale={i18n.language}
            />
            <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
              {'Start Date'}
            </span>
          </label>
        </div>
        <div className='relative'>
          <label
            htmlFor={'EndDate'}
            className='relative block rounded-md border border-gray-400 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2'>
            <DatePicker
              id={'EndDate'}
              selected={dateRange.endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={dateRange.startDate}
              endDate={dateRange.endDate}
              minDate={dateRange.startDate}
              className='block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
              placeholderText='Select start date'
              locale={i18n.language}
            />
            <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
              {'End Date'}
            </span>
          </label>
        </div>
      </div>
    </>
  );
}
