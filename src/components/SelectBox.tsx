'use client';
import {
  borderDarkMode,
  borderLigthMode,
  commonClass,
  darkMode,
  ligthMode
} from '@/common/constant.theme';
import { Option } from '@/common/typedef.irisations';
import { encodeStringToNumber } from '@/helpers/helpers.string';
import { cn } from '@/helpers/helpers.tailwind';
import { useTheme } from 'next-themes';
import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';

export type SelectBoxProps = Omit<React.HTMLProps<HTMLSelectElement>, 'id'> & {
  optionlist: Option[];
  placeholder?: string;
  label?: string;
  id?: string;
  align?: 'row' | 'col';
  value? : string
};
/**
 *
 * @param  optionlist: Option[];
 * @param placeholder?: string;
 * @param label?: string;
 * @param  id?: string;
 * @returns
 */
export default function SelectBox({
  placeholder = 'Select an option',
  label,
  id = encodeStringToNumber(label),
  className,
  ...props
}: SelectBoxProps) {
  const { theme } = useTheme();
  const {t} = useTranslation()

  const themeMode = theme === 'dark' ? darkMode : ligthMode;
  const internalClass = 'rounded p-2';
  const combinedClassName = cn(
    commonClass,
    themeMode,
    'p-2 border-none',
    className
  );

  const combinedDiv = cn(
    'w-min flex flex-col  justify-center items-center',
    props.align === 'row' ? 'flex-row' : 'flex-col',
    theme === 'dark' ? borderDarkMode : borderLigthMode
  );
  const combinedLabel = 'text-center mx-2';


  return (
    <label
      htmlFor={id}
      className='relative block  rounded-md border border-gray-400 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2'>
      <select id={id} className={combinedClassName} {...props} value={props.value} >
        {placeholder && (
          <option value='' disabled>
            {placeholder}
          </option>
        )}
        {props.optionlist.map((option) => {
          return (
            <option key={option.value} value={option.value} >
              {t(option.label)}
            </option>
          );
        })}
      </select>
      <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
        {label}
      </span>
    </label>
  );
}
