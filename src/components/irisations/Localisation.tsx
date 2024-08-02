import { BANNER_TITLE_L1, BANNER_TITLE_L2, BANNER_TITLE_L3 } from '@/common/constant.locale';
import { useTranslation } from 'react-i18next';

export type LocalisationProps = {};
export default function Localisation({ ...props }: LocalisationProps) {
   
  const {t} = useTranslation();
  return (
    <div className='flex flex-col items-end  p-2'>
      <span>{t(BANNER_TITLE_L1)}</span>
      <span>{t(BANNER_TITLE_L2)}</span>
      <span>{t(BANNER_TITLE_L3)}</span>
    </div>
  );
}
