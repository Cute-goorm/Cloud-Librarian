// app.error.tsx  error-500 page

'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>500 - Internal Server Error</h1>
      <p>Something went wrong. Please try again later.</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
