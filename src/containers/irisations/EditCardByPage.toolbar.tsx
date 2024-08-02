'use client';
import { EditFunction } from '@/common/typedef.irisations';
import IconButton from '@/components/IconButton';
import {
  faBold,
  faItalic,
  faLink,
  faListOl,
  faListUl,
  faMicroscope,
  faMinus,
  faTurnDown
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ImageUploadForm from './ImageUploadForm';
import InputButton from '@/components/InputButton';

export type EditCardByPageToolbarProps = {
  onClick: (editFunction: EditFunction, url: string) => void;
  isInputLinkVisible: boolean;
};
/**
 *
 * @param  onClick: (editFunction: EditFunction) => void
 * @returns
 */

export default function EditCardByPageToolbar({
  ...props
}: EditCardByPageToolbarProps) {
  const [linkUrl, setLinkUrl] = useState<string>('');

  // const handleChange = () => {

  // }

  return (
    <div className='border border-yellow-600 flex flex-row'>
      <IconButton
        icon={faItalic}
        onClick={() => props.onClick(EditFunction.ITALIC, '')}
        tooltip='Italic'
      />
      <IconButton
        icon={faBold}
        onClick={() => props.onClick(EditFunction.BOLD, '')}
        tooltip='bold'
      />
      <IconButton
        icon={faListUl}
        onClick={() => props.onClick(EditFunction.UNORD_LIS, '')}
        tooltip='UL-li'
      />
      <IconButton
        icon={faListOl}
        onClick={() => props.onClick(EditFunction.ORD_LIST, '')}
        tooltip='OL-li'
      />
      <IconButton
        icon={faMinus}
        onClick={() => props.onClick(EditFunction.HR, '')}
        tooltip='</hr>'
      />
      <IconButton
        icon={faTurnDown}
        onClick={() => props.onClick(EditFunction.BR, '')}
        tooltip='<br/>'
        className='rotate-45'
      />
      <ImageUploadForm
        onUpload={(url) => props.onClick(EditFunction.UPLOAD, url)}
      />
      {!props.isInputLinkVisible ? (
        <IconButton
          icon={faLink}
          onClick={() => props.onClick(EditFunction.ADD_LINK, linkUrl)}
          tooltip='link'
        />
      ) : (
        <InputButton
          onChange={setLinkUrl}
          value={linkUrl}
          onClick={() => props.onClick(EditFunction.INPUT_ADD_LINK, linkUrl)}
          placeholder='Url'
          icon={faLink}
        />
      )}
      <IconButton
        icon={faMicroscope}
        onClick={() => props.onClick(EditFunction.TEST, '')}
      />
    </div>
  );
}
