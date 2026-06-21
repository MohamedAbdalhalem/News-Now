"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1 className="text-6xl font-extrabold mb-4">Something went wrong</h1>

      <p className="text-lg text-center mb-8">{error.message}</p>

      <div className="flex gap-4">
        <button onClick={reset} className="btn btn-primary">
          Try Again
        </button>

        <Link href="/" className="btn btn-outline">
          Go Home
        </Link>
      </div>
    </div>
  );
}
