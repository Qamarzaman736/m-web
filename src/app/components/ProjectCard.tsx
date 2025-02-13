import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  github: string
}

export default function ProjectCard({ title, description, image, github }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary-700">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={github}
          className="inline-flex items-center text-primary-600 hover:text-primary-800 transition duration-300"
        >
          View on GitHub
        </Link>
      </div>
    </div>
  )
}

