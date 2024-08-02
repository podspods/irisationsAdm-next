import clsx from 'clsx';
import { useTheme } from 'next-themes';

export type DarkModeProps =  React.HTMLAttributes<HTMLDivElement> ;

export default function DarkMode({ children }: DarkModeProps) {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={clsx('min-h-screen min-w-full', {
          'text-dark bg-dark border-dark ': theme !== 'dark',
          'text-light bg-light border-light': theme === 'dark'
        })}>  {children}</div>
    </>
  );
}
