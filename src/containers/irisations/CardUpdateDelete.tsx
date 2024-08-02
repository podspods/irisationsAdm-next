import { route } from '@/common/api'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export type CardUpdateDeleteProps = React.HTMLAttributes<HTMLDivElement>  & {
cardId? : string ;
}
export default function CardUpdateDelete({cardId='',...props}: CardUpdateDeleteProps) {
  return (
    <> 
    <div className='actionButton w-1/10 flex justify-between' {...props}>
          <Link href={route.irisationsAdmin.pageSectionUpdate(cardId)} className='px-2'><FontAwesomeIcon icon={faPenToSquare} /></Link>
          <Link href={route.irisationsAdmin.pageSectionDelete(cardId)} className='px-2'><FontAwesomeIcon icon={faTrash} /></Link>
        </div>
    </>
  )
}