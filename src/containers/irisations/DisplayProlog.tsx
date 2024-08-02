import { Lang } from '@/common/typedef';
import {
  PageSection,
  PageType,
  PicPosition
} from '@/common/typedef.irisations';
import ReactMarkdown from '@/components/ReactMarkdown';
import { isValidImageUrl } from '@/helpers/helpers.string';
import Image from 'next/image';
import DisplayNewsSection from './DisplayNewsSection';
import DisplayFooterSection from './DisplayFooterSection';

export type DisplaySectionProps = {
  section: PageSection;
  idlang: number;
};
/**
 *
 * @param section: section;
 * @param   langId: number;
 * @returns
 */
export default function DisplayProlog({ ...props }: DisplaySectionProps) {
  return (
    <section className={`section-prolog`}>
      {props.section.text[props.idlang]?.length > 0 && (
        <div className='text-justify p-4 bg-slate-200'>
          <ReactMarkdown>{props.section.text[props.idlang]}</ReactMarkdown>
        </div>
      )}
    </section>
  );
}
