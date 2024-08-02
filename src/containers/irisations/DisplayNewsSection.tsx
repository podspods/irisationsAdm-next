import DisplayDateRange from '@/components/DisplayDateRange';
import Image from 'next/image';
import { DisplaySectionProps } from './DisplaySection';
import ReactMarkdown from '@/components/ReactMarkdown';

export default function DisplayNewsSection({ ...props }: DisplaySectionProps) {
  return (
    <section className={`news-${props.section.ident.id} w-full`}>
      {props.section.ident.title[props.lang].length > 0 && (
        <span className='text-lg font-medium  p-2 w-full'>
          {props.section.ident.title[props.lang]}
        </span>
      )}
      <div className='ZnewsBody flex flex-col w-full   items-center justify-center lg:justify-between lg:flex-row'>
        {props.section.text[props.lang].length > 0 && (
          <div className='w-full lg:w-1/3 text-base text-justify  p-2'>
            <ReactMarkdown>{props.section.text[props.lang]}</ReactMarkdown>
          </div>
        )}
        {props.section.image.src.length > 0 && (
          <Image
            src={props.section.image.src}
            alt={props.section.image.alt[props.lang]}
            // width={props.section.image.width}
            width={props.section.image.width}
            height={0}
            className='mb-4 rounded flex justify-center items-center'
          />
        )}
        {props.section.ident.dateRange && (
          <DisplayDateRange
            dateRange={props.section.ident.dateRange}
            className='ZnewsDate w-full lg:w-1/4 overflow-hidden mt-10  pt-10'
          />
        )}
      </div>
    </section>
  );
}
