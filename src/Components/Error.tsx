import React from 'react';
import { useRouteError } from 'react-router-dom';

// defining error type
interface RouteError {
  message: string;
  status: number;
  statusText: string;
}

export default function Error() {
  const error = useRouteError() as RouteError;

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl text-white font-bold">Error: {error.message}</h1>
      <pre className="text-white text-lg">
        {error.status} - {error.statusText}
      </pre>
    </div>
  );
}
