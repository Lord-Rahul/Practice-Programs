"use client"
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold animate-bounce">404</h1>
        <p className="mt-4 text-2xl font-semibold">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-lg">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
      </div>
      <div className="mt-6">
        <Link href="/">
          <span className="px-6 py-3 bg-white text-purple-600 rounded-lg shadow-lg hover:bg-purple-100 transition duration-300 cursor-pointer">
            Go Back Home
          </span>
        </Link>
      </div>
      <style jsx>{`
        h1 {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}

