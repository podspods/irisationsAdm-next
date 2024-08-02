import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import '@/common/i18n';
export type ItemNav = {
  label: string;
  url: string;
};
export type MenuNavProps = {

  itemList: ItemNav[] 

};
export default function MenuNav({ ...props }: MenuNavProps) {
  const { t,i18n  } = useTranslation();
  return (

    <div className='flex flex-row justify-start items-start '>
     {props.itemList.map ((item) => 
      <Link className={'p-2'} href = {item.url} key={item.label}>{t(item.label)}</Link>
    )}
    </div>
  );
}
