import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
export type ErrorBoundaryProps = {
  children: React.ReactNode;
};
export default function ErrorBoundary({ ...props }: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {props.children}
    </ReactErrorBoundary>
  );
}
