import React from 'react';
import { cn } from '@/helpers/helpers.tailwind';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';

export type IconProps = FontAwesomeIconProps & {
  icon: IconProp;
};
export default function Icon({ ...props }: IconProps) {

  const className = cn('cursor-pointer p-2 text-base', props.className)
  return (
      <FontAwesomeIcon icon={props.icon} className={className} />
  );
}
