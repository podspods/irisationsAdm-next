import { Lang } from '@/common/typedef';
import {
  PageSection,
  PageType,
  PicPosition,
  SectionType
} from '@/common/typedef.irisations';
import ReactMarkdown from '@/components/ReactMarkdown';
import { isValidImageUrl } from '@/helpers/helpers.string';
import Image from 'next/image';
import DisplayNewsSection from './DisplayNewsSection';
import DisplayFooterSection from './DisplayFooterSection';
import DisplayCTA from './DisplayCTA';

export type DisplaySectionProps = {
  section: PageSection;
  lang: Lang;
};
/**
 *
 * @param section: section;
 * @param   lang: Lang;
 * @returns
 */
export default function DisplaySection({ ...props }: DisplaySectionProps) {
  const flexDirection = (direction: PicPosition) => {
    switch (direction) {
      case PicPosition.Left:
        return 'float-left';
      case PicPosition.Right:
        return 'float-right';
      default:
        return 'flex flex-col justify-center items-center';
    }
  };

  const classImg = `${flexDirection(
    props.section.image.position || PicPosition.Center
  )}`;

  switch (props.section.ident.type) {
    case SectionType.NEWS:
      return <DisplayNewsSection section={props.section} lang={props.lang} />;
    case SectionType.FOOTER:
      return <DisplayFooterSection section={props.section} idLang={props.lang} />;
      // case SectionType.CTA:
      //   return <DisplayCTA section={props.section} idLang={props.lang} />;
  
    default:
      return (
        <section className={`news-${props.section.ident.id}`}>
          <div className='flex flex-col'>
            {props.section.ident.title[props.lang] && (
              <h1 className='py-2 font-bold text-lg text-left'>
                {props.section.ident.title[props.lang]}
              </h1>
            )}

            <div>
              {isValidImageUrl(props.section.image?.src) && (
                <Image
                  className={`${classImg} rounded-lg p-4`}
                  src={props.section.image?.src || ''}
                  alt={props.section.image?.alt[props.lang] || ''}
                  width={props.section.image?.width || 0}
                  height={0} // auto ?
                />
              )}
              {props.section.text[props.lang]?.length > 0 && (
                <div className='text-justify p-4'>
                  <ReactMarkdown>
                    {props.section.text[props.lang]}
                  </ReactMarkdown>
                </div>
              )}
 
            </div>
          </div>
        </section>
      );
  }
}
