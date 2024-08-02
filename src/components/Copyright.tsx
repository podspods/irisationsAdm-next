export type CopyrightProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
  yearStart?: string;
};
export default function Copyright({
  name,
  yearStart = '2000',
  ...props
}: CopyrightProps) {
  const currentYear = new Date().getFullYear();
  return (
    <div {...props}>
      <p>{`© ${yearStart} - ${currentYear} ${name}`}</p>
    </div>
  );
}
