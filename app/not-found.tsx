import Link from 'next/link';

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]  p-4">
      <h1 className="text-9xl font-extrabold mb-4">404</h1>
      <p className="text-2xl md:text-3xl mb-6">Oops! Page not found.</p>
      <p className="text-lg md:text-xl mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary btn-lg">
        Go Back Home
      </Link>
    </div>
  );
}
