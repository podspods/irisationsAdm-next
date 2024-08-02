'use client';
import { useTheme } from 'next-themes';
import { useRef, useState } from 'react';

export type TooltipProps = React.HTMLAttributes<HTMLDivElement> & {
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  message?: string;
};
/**
 *
 * @param  position = 'top',
 * @param  message = '?',
 * @param  ...props
 * @returns react node
 */

export default function Tooltip({
  position = 'top',
  message = '?',
  ...props
}: TooltipProps) {
  const [show, setShow] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const backgroundColor =
    theme === 'dark' ? 'bg-secondary-800 ' : 'bg-secondary-200';
  const color = theme === 'dark' ? 'text-secondary-200' : 'text-secondary-800';
  return (
    <>
      <div className='relative'>
        <span
          className='cursor-pointer'
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}>
          {props.children}
        </span>
        {show && (
          <div
            ref={tooltipRef}
            className={`absolute whitespace-nowrap bottom-full flex flex-col items-center group-hover:flex p-1 rounded ${
              !show ? 'hidden' : ''
            } ${color} ${backgroundColor}`}
            style={{
              top: position === 'top' ? '-2rem' : 'auto',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            {...props}>
            {message}
          </div>
        )}
      </div>
    </>
  );
}
