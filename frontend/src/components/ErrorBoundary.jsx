// components/ErrorBoundary.jsx
import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

const FallbackComponent = ({ error, resetErrorBoundary }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '2rem',
      color: '#b91c1c',
    }}
  >
    <h1>Something went wrong.</h1>
    <p>{error?.message || 'Unexpected error occurred.'}</p>
    <button
      style={{
        marginTop: '1rem',
        padding: '10px 20px',
        backgroundColor: '#2563eb',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
      onClick={resetErrorBoundary}
    >
      Retry
    </button>
  </div>
);

const ErrorBoundary = ({ children }) => (
  <ReactErrorBoundary
    FallbackComponent={FallbackComponent}
    onReset={() => {
      // Reset logic: e.g., refetch data or reload
      window.location.reload();
    }}
  >
    {children}
  </ReactErrorBoundary>
);

export default ErrorBoundary;
