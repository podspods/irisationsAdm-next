'use client';
import { cn } from '@/helpers/helpers.tailwind';
import { useTheme } from 'next-themes';
import Tooltip from './Tooltip';
import Image from 'next/image';
import { ImageType} from '@/common/typedef.irisations';
export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  textHover?: string;
  image : ImageType
};
export default function ImageButton({...props}: IconButtonProps) {
  const { theme } = useTheme();
  const baseClass = 'font-sans cursor-pointer select-none rounded';
  const color =
    theme === 'dark'
      ? 'bg-primary-800 text-primary-200'
      : 'bg-primary-200 text-primary-800';
  const transition = 'transition-all ease-in-out duration-200';
  const hoverDark = 'hover:bg-primary-700';
  const hoverLight = 'hover:bg-primary-100';
  const hover = theme === 'dark' ? hoverDark : hoverLight + ' hover:shadow-xl';
  const active = props.disabled ? '' : 'active:scale-7O';
  const cursor = props.disabled ? 'cursor-not-allowed' : 'cursor-pointer';
  const className = cn(
    hover,
    baseClass,
    // color,
    transition,
    cursor,
    active,
    props.className
  );

  if (props.textHover)
    return (
      <Tooltip message={props.textHover}>
        <button {...props}>
          <Image
            src={props.image.src}
            alt={props.image.alt[0]}
            width={props.image.width}
            height={props.image.height}
          />
        </button>
      </Tooltip>
    );
  return (
    <button {...props}>
      <Image src={props.image.src} alt={props.image.alt[0]} width={props.image.width} height={props.image.height} />
    </button>
  );
}
