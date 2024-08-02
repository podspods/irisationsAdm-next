'use client';
import { encodeStringToNumber } from '@/helpers/helpers.string';
import { cn } from '@/helpers/helpers.tailwind';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { UseThemeProps } from 'next-themes/dist/types';
import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  label?: string;
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
  hasError = false,
  label,
  id = encodeStringToNumber(label),
  className,
  icon,
  ...props
}: InputProps) {
  const { theme } = useTheme();

  const opacity = hasError ? 'bg-warning-500' : 'bg-neutral-100';
  const baseClassName =
    // 'h-10 bg-green  placeholder-transparent  rounded py-4 px-4';
    'h-10 bg-green rounded py-4 px-4';
  const borderClass = 'rounded-lg  border-primary-200 border';
  const focus = 'focus:border-solid focus:outline-none focus:ring-0 ';
  const color = theme === 'dark' ? 'bg-dark text-dark' : 'bg-light text-light';
  const hoverDark = 'hover:bg-hoverDark ';
  const hoverLight = 'hover:bg-hoverLight';
  const hover = theme === 'dark' ? hoverDark : hoverLight + ' hover:shadow-xl';
  const globalClassName = cn(
    baseClassName,
    borderClass,
    opacity,
    focus,
    color,
    hover,
    className
  );
  console.log('props  ==>', props);

  return (
    <div className='MainContainer '>
      <div className='flex flex-col justify-center items-center'>
        {label && (
          <label htmlFor={id} className='block w-full text-center mb-2'>
            {label}
          </label>
        )}
        {!label && props.placeholder && (
          <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
            {props.placeholder}
          </span>
        )}

        <div className='ButtonAndIcon relative  flex flex-row justify-center items-center'>
          <input id={id} name={id} className={globalClassName} {...props} />
          {icon && (
            <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
              <FontAwesomeIcon icon={icon} className='h-4 w-4' />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

