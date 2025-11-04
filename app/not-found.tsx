import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center rounded-md p-6 mt-3">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/" className="mt-4">
        <span className="text-blue-600 hover:underline text-lg">
          Go back to Home
        </span>
      </Link>
    </div>
  );
}
