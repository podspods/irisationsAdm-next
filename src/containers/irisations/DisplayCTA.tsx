import { PageSection } from '@/common/typedef.irisations';
import ReactMarkdown from '@/components/ReactMarkdown';
import { isValidImageUrl } from '@/helpers/helpers.string';
import Image from 'next/image';

export type DisplayCTAProps = {
  section: PageSection;
  idLang: number;
};
/**
 *
 * @param section: PageSection;
 * @param idLang: number;
 * @returns
 */
export default function DisplayCTA({ ...props }: DisplayCTAProps) {
  return (
    <div className='sectionCTA flex flex-col justify-center items-center lg:justify-start lg:items-start w-full'>
      {props.section.ident.title[props.idLang].length > 0 && (
        <h1 className='font-bold pb-4'>{props.section.ident.title[props.idLang]}</h1>
      )}
      <div className='mainBody flex flex-col w-full  lg:block'>
        {isValidImageUrl(props.section.image?.src) && (
          <Image
            src={props.section.image.src}
            alt={props.section.image.alt[props.idLang]}
            width={props.section.image.width}
            height={0}
            className='lg:float-left m-2 ml-4 rounded-lg'
          />
        )}
        <div className='textCTA lg:float-right bg-neutral-200 rounded-lg p-2 m-2 mr-4'>
          {props.section.textCTA[props.idLang] && (
            <ReactMarkdown>{props.section.textCTA[props.idLang]}</ReactMarkdown>
          )}
        </div>
        {props.section.text[props.idLang] && (
          <div className='text-body text-justify p-2 m-2'>
            <ReactMarkdown>{props.section.text[props.idLang]}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
