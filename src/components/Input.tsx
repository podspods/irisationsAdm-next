'use client';
import { darkMode, ligthMode } from '@/common/constant.theme';
import { encodeStringToNumber } from '@/helpers/helpers.string';
import { cn } from '@/helpers/helpers.tailwind';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { UseThemeProps } from 'next-themes/dist/types';
import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  hasError?: boolean;
  icon?: IconDefinition;
};

/**
 *
 * @param id?: string;
 * @param label?: string;
 * @param hasError?: boolean;
 * @param icon?: IconDefinition;
 * @returns
 */

export default function Input({
  placeholder,
  hasError = false,
  id = encodeStringToNumber(placeholder),
  className,
  icon,
  ...props
}: InputProps) {
  const { theme } = useTheme();

  const opacity = hasError ? 'bg-warning-500' : 'bg-neutral-100';
  const baseClassName ='peer border-none p-1 bg-transparent placeholder-transparent '
  const focus = 'focus:border-transparent focus:outline-none focus:ring-0 ';
  const themeMode = theme === 'dark' ? darkMode : ligthMode  + ' hover:shadow-xl';
  const globalClassName = cn(
    baseClassName,
    opacity,
    focus,
    themeMode,className
  );
  return (
    <label
      htmlFor={id}
      className='relative block rounded-md border border-gray-400 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-2'>
      <input
        id={id}
        className={globalClassName + ' '}
        placeholder={placeholder}
        {...props}
      />
      <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
        {placeholder}
      </span>
      {icon && (
        <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
          <FontAwesomeIcon icon={icon} className='h-4 w-4' />
        </span>
      )}
    </label>
  );
}
