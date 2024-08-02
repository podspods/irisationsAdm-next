import { external, route } from '@/common/api';
import Link from 'next/link';
import ImageButton from '../ImageButton';
import Copyright from '../Copyright';
import { facebookIcon, instagramIcon, pinterestIcon } from '@/common/constant.irisations';
import { MENU_CONDITION_USE, MENU_TERM_CONDITION } from '@/common/constant.locale';
import { useTranslation } from 'react-i18next';

export default function Sole() {
  const { t  } = useTranslation();

  return (
    <div className='flex flex-row items-center border-t-2 border-neutral-400 pt-5'>
      <p className='px-4 '>
        <Link href={route.irisations.conditionOfUse}>{t(MENU_CONDITION_USE)}</Link>
      </p>
      <p className='px-4 '>
        <Link href={route.irisations.generalTerms}>
        {t(MENU_TERM_CONDITION)}
        </Link>
      </p>
      <p className='px-4 '>
        <Link href={external.facebook}>
          <ImageButton image={facebookIcon} />
        </Link>
      </p>

      <p className='px-4 '>
        <Link href={external.instagram}>
          <ImageButton image={instagramIcon} />
        </Link>
      </p>
      <p className='px-4 '>
        <Link href={external.pinterest}>
          <ImageButton  image={pinterestIcon} />
        </Link>
      </p>
      <Copyright name='Irisations' className='px-4' yearStart='2014' />
    </div>
  );
}
