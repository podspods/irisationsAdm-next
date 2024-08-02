import { T_TRAIN, T_TRAIN_L1, T_TRAIN_L2 } from '@/common/constant.locale'
import { useTranslation } from 'react-i18next'

export type TrainAccessProps = {

}
export default function TrainAccess({...props}: TrainAccessProps) {
  const {t} = useTranslation()
  return (
    <div className=' p-4'>
    <h1 className='text-center font-bold'>{t(T_TRAIN)}</h1>
    <p >{t(T_TRAIN_L1)}</p>
    <p className='text-left'>{t(T_TRAIN_L2)}</p>
    </div>
  )
}