import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary-700">
          AI Portfolio
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-primary-600 hover:text-primary-800 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-primary-600 hover:text-primary-800 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-primary-600 hover:text-primary-800 transition duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-primary-600 hover:text-primary-800 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

