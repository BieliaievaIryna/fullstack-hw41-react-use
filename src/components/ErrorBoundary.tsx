import type { ReactNode } from "react"
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import ErrorFallback from "./ErrorFallback"

const ErrorBoundary = ({children}: {children: ReactNode}) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>{children}</ReactErrorBoundary>
  )
}

export default ErrorBoundary