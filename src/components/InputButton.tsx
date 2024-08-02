import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ChangeEvent, MouseEvent, MouseEventHandler } from 'react';
import IconButton from './IconButton';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

export type SearchInputProps = {
  onChange?: (tag: string) => void;
  onClick?: (event : MouseEvent<HTMLButtonElement> ) => void;
  icon?: IconProp;
  placeholder?: string;
  tooltip? : string;
  value?: string;
};
export default function InputButton({
  placeholder = 'placeholder',
  icon = faQuestion,
  ...props
}: SearchInputProps) {
  const handleClick = (event : MouseEvent<HTMLButtonElement>) => {
   
    if (props.onClick) props.onClick(event);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (props.onChange)  props.onChange(value);
  };
  return (
    <div className='flex justify-between items-center w-52 border  border-black rounded m-4'>
      <input
        type='text'
        value={props.value}
        placeholder={placeholder}
        onChange={handleChange}
        className='w-44 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 border border-red-800'
      />
      <IconButton icon={icon} onClick={handleClick} tooltip={props.tooltip} />
    </div>
  );
}
