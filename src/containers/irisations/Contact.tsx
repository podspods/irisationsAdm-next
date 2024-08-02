import Button from '@/components/Button';
import Input from '@/components/Input';
import SelectBox from '@/components/SelectBox';
import Captcha from '../Captcha';
import Address from '@/components/irisations/Address';
import { contactSubjectOptionList } from '@/common/constant.irisations';
import {
  PH_EMAIL,
  PH_MESSAGE,
  PH_NAME,
  PH_PHONE,
  PH_SUBJECT,
  T_CONTACT_US
} from '@/common/constant.locale';
import { useTranslation } from 'react-i18next';

export type ContactProps = {};
export default function Contact({ ...props }: ContactProps) {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col justify-start w-1/3'>
      <h1 className='text-center p-4  font-bold'>{t(T_CONTACT_US)}</h1>
      <Input placeholder={t(PH_NAME)} className='my-1 w-72' />
      <Input placeholder={t(PH_EMAIL)} className='my-1 w-72' />
      <Input placeholder={t(PH_PHONE)} className='my-1  mb-5 w-72' />
      <SelectBox
        optionlist={contactSubjectOptionList}
        label={t(PH_SUBJECT)}
        className='w-72 '
      />
      <p className='text-center p-4'>{t(PH_MESSAGE)} </p>
      <textarea rows={5} cols={5} className='border border-cyan-500' />
      <Captcha />
      <Button className='w-fit px-4'> Ok</Button>
      <Address />
    </div>
  );
}
