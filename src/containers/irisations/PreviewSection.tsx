import { PageSection } from '@/common/typedef.irisations';
import DisplaySection from './DisplaySection';
import { Lang } from '@/common/typedef';
import { useEffect, useState } from 'react';

export type PreviewSectionProps = {
  section: PageSection;
  lang : number
};
export default function PreviewSection({ ...props }: PreviewSectionProps) {

  return (
    <>
      <div className='flex flex-row border border-warning-700'>
        <DisplaySection section={props.section} lang={props.lang}/>
      </div>
    </>
  );
}
