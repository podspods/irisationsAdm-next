import { useTheme } from 'next-themes';
import IconMoon from './IconMoon';
import IconSun from './IconSun';

export type ButtonDarkProps = {

}
export default function ButtonDark({...props}: ButtonDarkProps) {
  const { theme,  setTheme } = useTheme();
  return (
    <>
      <button
        className='bg-primary-100 text-primary-900 rounded px-2 border border-primary-900 hover:bg-primary-200 hover:text-primary-600'
        onClick={() =>
          setTheme((prev) => (theme !== 'dark' ? 'dark' : 'light'))
        }>
        {theme !== 'dark' ? <IconMoon /> : <IconSun />}
      </button>
    </>
  )
}