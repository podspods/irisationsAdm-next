'use client'
import { commonClass, darkMode, ligthMode } from '@/common/constant.theme';
import { cn } from '@/helpers/helpers.tailwind';
import { useTheme } from 'next-themes';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>&  {
  className?: string;
  disabled?: boolean;
};

export default function Button({ className,disabled,...props }: ButtonProps) {
  const { theme } = useTheme();
  const themeMode = theme === 'dark' ? darkMode : ligthMode;
  const internalClass = 'rounded'
  const classDisable = disabled ? 'cursor-not-allowed'  : 'active:scale-95'
  const combinedClassName = cn(commonClass, themeMode, internalClass, classDisable, className);

  return ( 
    <>
      <button type='button'
        {...props}
        disabled={disabled}
        className={combinedClassName + ' ' }
      ></button>
    </>
  );
}
