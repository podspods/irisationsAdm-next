import { PageSection } from '@/common/typedef.irisations';
import ReactMarkdown from '@/components/ReactMarkdown';
import Image from 'next/image';
import Link from 'next/link';

export type DisplayFooterSectionProps = {
  section: PageSection;
  idLang: number;
};
/**
 * 
 * @param section: PageSection; 
 * @param idLang: number;
}; 
 * @returns 
 */
export default function DisplayFooterSection({
  ...props
}: DisplayFooterSectionProps) {
const text = props.section.text[0] 
  return (
    // <div className='flex flex-col  w-[405px] h-[400px]'>
    <div className='flex flex-col justify-center items-center w-[405px]'>
      {/* <div className='flex justify-center items-center '> */}
        <Image
          src={props.section.image.src}
          alt={props.section.image.alt[props.idLang]}
          width={props.section.image.width}
          height={props.section.image.height}
          className='ImageFooterCard w-[370px] h-[250px] rounded-xl p-2  shadow-xl'
        />
      {/* </div> */}
      <Link
        href={
          props.section.ident.titleLink[props.idLang]?.length
            ? props.section.ident.titleLink[props.idLang]
            : '#'
        }>
        <h1 className='text-center text-xl p-2'>
          {props.section.ident.title[props.idLang]}
        </h1>
      </Link>
      <ReactMarkdown>{`${ props.section.text[props.idLang]}`}</ReactMarkdown>

    </div>
  );
}
