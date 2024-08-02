export type MessageInfoProps = {
text:string 
}
export default function MessageInfo({...props}: MessageInfoProps) {
  return (
    <>
    <p>{props.text}</p>
    </>
  )
}