interface ErrorProps {
  error: Error
}

const ErrorFallback = ({error}: ErrorProps) => {
  return (
    <div style={{color: 'red'}}>
      <p style={{ fontWeight: 'bold' }}>Щось пішло не так під час завантаження повідомлень:</p>
      <pre style={{ color: 'crimson' }}>{error.message}</pre>
    </div>
  )
}

export default ErrorFallback