'use client';
import { menuList } from '@/common/constant.irisations';
import Localisation from '@/components/irisations/Localisation';
import Logo from '@/components/irisations/Logo';
import MenuNav from '@/components/irisations/MenuNav';
import { cn } from '@/helpers/helpers.tailwind';
import { useTranslation } from 'react-i18next';

export default function Header() {
 
  const { i18n  } = useTranslation();
  const changeLang = (lng: string) => {
    if (i18n.changeLanguage) {
      i18n.changeLanguage(lng);
    } else {
      console.error('i18n.changeLanguage is not a function');
    }
  };
 
  const myClassName = cn(
    'header flex  flex-col justify-center items-center w-full w-screen-xl',
  );


  return (
    <div className={myClassName} >
      <div className='upperHeader w-full h-18 flex flex-row justify-between '>
        <Logo />
        <Localisation />
      </div>
      <div className='lowerHeader  w-full flex flex-row justify-start '>
        <MenuNav itemList={menuList} />
        {i18n.language !== 'en' && (
          <button className={'p-2'} onClick={() => changeLang('en')}>
            🇬🇧
          </button>
        )}
        {i18n.language !== 'fr' && (
          <button className={'p-2'} onClick={() => changeLang('fr')}>
            🇫🇷
          </button>
        )}
      </div>
    </div>
  );
}

