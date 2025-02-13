import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary-50 mt-8">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <p className="text-primary-700">&copy; 2024 AI Portfolio. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link
            href="https://github.com/yourusername"
            className="text-primary-600 hover:text-primary-800 transition duration-300"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            className="text-primary-600 hover:text-primary-800 transition duration-300"
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            className="text-primary-600 hover:text-primary-800 transition duration-300"
          >
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  )
}

