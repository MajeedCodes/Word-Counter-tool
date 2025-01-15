import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          404 - Page Not Found
        </h1>
        <p className="text-xl mb-6 text-gray-700">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
          Go back to Home
        </Link>
      </div>
    </div>
  )
}

