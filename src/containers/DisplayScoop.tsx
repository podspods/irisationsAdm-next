import { DateRange, Level, Scoop } from '@/common/typedef';
import { Status } from '@/common/typedef.irisations';
import ReactMarkdown from '@/components/ReactMarkdown';
import { isDateInRange } from '@/helpers/helper.date';
import { cn } from '@/helpers/helpers.tailwind';

export type DisplayScoopProps = {
  scoop: Scoop;
  idlang: number;
  preview? : boolean
};
export default function DisplayScoop({preview=false, ...props }: DisplayScoopProps) {
  const currentDate = new Date();
  const isVisible: boolean =
    props.scoop.status === Status.VALIDE &&
    isDateInRange(currentDate, props.scoop.dateRange);

  const colorBorderLevel = (level: Level) => {
    switch (level) {
      case Level.WARNING:
        return `border-warning-900 bg-warning-500`;
        break;
      case Level.ERROR:
        return `border-danger-900 bg-danger-500`;
        break;
      default:
        return `border-info-900 bg-info-500`;
        break;
    }
  };
  const baseClass = 'border  text-neutral-500 p-4 font-semibold text-2xl';
  const levelClass = colorBorderLevel(props.scoop.level);
  const className = cn(baseClass, levelClass);
  return (
    <div>
      {isVisible && (
        <div className={className}>
          <ReactMarkdown>{props.scoop.message[props.idlang]}</ReactMarkdown>
        </div>
      )}
      { !isVisible && preview && (
        <div className={className + ' border-dashed'}>
          <ReactMarkdown>{props.scoop.message[props.idlang]}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
