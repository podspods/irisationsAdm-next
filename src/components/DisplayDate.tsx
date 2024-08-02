import { DateTime } from 'luxon';

export type DisplayDateProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  date: Date;
};
export default function DisplayDate({
  
  date,
  ...props
}: DisplayDateProps) {

  const label: string = props.label ? `${props.label}:` : ''
;
  let result: string = '';
  try {
    result = `${label} ${DateTime.fromJSDate(
      new Date(date)
    ).toLocaleString()}`;
  } catch (error) {
    result = `${label} ?`;
  }

  return (
    <div className='px-4' {...props}>
      {result}
    </div>
  );
}
