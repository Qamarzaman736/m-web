import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "web Develpoments",
    description: "Web development: Building and maintaining websites and web applications using programming languages, frameworks, and databases to create interactive and dynamic online experiences.",
    image: "/w.jpeg",
    github: "https://github.com/yourusername/image-recognition",
  },
  {
    title: "Digital Marketing",
    description: "Digital marketing: Promoting products, brands, and services using digital channels like search engines, social media, email, and websites to reach target audiences and drive online sales and engagement..",
    image: "/d.jpeg",
    github: "https://github.com/yourusername/nlp-chatbot",
  },
  {
    title: "Custum GPT Develpor",
    description: "Custom GPT: A tailored AI model, fine-tuned for specific tasks or industries, using a base GPT model and customized training data to generate more accurate and relevant responses.",
    image: "/c.jpeg",
    github: "https://github.com/yourusername/predictive-analytics",
  },
]

export default function Projects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary-700">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

