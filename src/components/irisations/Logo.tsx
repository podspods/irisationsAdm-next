import { route } from '@/common/api';
import { BANNER_LOGO } from '@/common/constant.locale';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
export type LogoProps = {};
export default function Logo({ ...props }: LogoProps) {
  const { t } = useTranslation();
  return (
    <div className=' flex items-center'>
      <Link href={route.irisations.home}>
        <span
          className={`${roboto.className} w-40 text-5xl p-4 font-irisations`}>
          {t(BANNER_LOGO)}
        </span>
      </Link>
    </div>
  );
}
