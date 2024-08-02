'use client';
import { cn } from '@/helpers/helpers.tailwind';
import { useTheme } from 'next-themes';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from './Icon';
import Tooltip from './Tooltip';
export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconProp;
  tooltip?: string;
};
export default function IconButton({ ...props }: IconButtonProps) {
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

  if (props.tooltip)
    return (
      <Tooltip message={props.tooltip}>
        <button {...props}>
          <Icon icon={props.icon} className={className} />
        </button>
      </Tooltip>
    );
  return (
    <button {...props}>
      <Icon icon={props.icon} className={className} />
    </button>
  );
}

