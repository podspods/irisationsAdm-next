export type ToastProps = {
  message: string;
  show: boolean;
  onClose: () => void;
}
export default function Toast({...props}: ToastProps) {
  return (
    props.show ? (
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded shadow-lg">
        {props.message}
        <button className="ml-4 text-red-500" onClick={props.onClose}>×</button>
      </div>
    ) : null
  )
}