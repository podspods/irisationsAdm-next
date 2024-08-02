import { Lang } from '@/common/typedef';
import {
  PageSection,
} from '@/common/typedef.irisations';
import ReactMarkdown from '@/components/ReactMarkdown';

export type DisplayEpilogProps = {
  section: PageSection;
  idlang: number;
};
/**
 * @param section: section;
 * @param    idlang: number;
 * @returns
 */
export default function DisplayEpilog({ ...props }: DisplayEpilogProps) {
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
