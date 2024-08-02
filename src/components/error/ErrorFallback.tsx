'use client';  
export type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;

}
export default function ErrorFallback({...props}: ErrorFallbackProps) {
  return (
    <div>
    <h1>new Error</h1>
    <p>{props.error.message}</p>
    <button onClick={props.resetErrorBoundary}>retry</button>
  </div>
  )
}