// app/not-found.tsx  error-404 page
'use client'

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button onClick={() => router.back()}>Go Back</button>
      <Link href="/">Go to Home</Link>
    </div>
  );
}
