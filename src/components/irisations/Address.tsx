import { CONTACT_L1, CONTACT_L2, CONTACT_L3, CONTACT_L4 } from '@/common/constant.locale'
import { useTranslation } from 'react-i18next'

export type AddressProps = {

}
export default function Address({...props}: AddressProps) {
  const {t} = useTranslation()
  return (
    <div className=' py-4'>
       <p>{t(CONTACT_L1)}</p>
       <p>{t(CONTACT_L2)}</p>
       <p>{t(CONTACT_L3)}</p>
       <p>{t(CONTACT_L4)}</p>
 
    </div>
  )
}
