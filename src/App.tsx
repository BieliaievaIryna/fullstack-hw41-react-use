import { Suspense } from 'react';
import MessageComponent from './components/MessageComponent';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {

  return (
    <div>
      <h1>Messages</h1>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <MessageComponent />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App
