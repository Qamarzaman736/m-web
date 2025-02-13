import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Hi, I'm <span className="text-secondary-300">Malaika Laal</span>
          </h1>
          <p className="text-xl mb-8 text-primary-100">
            AI Developer & Innovator crafting intelligent solutions for tomorrow's challenges
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-100 transition duration-300"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

