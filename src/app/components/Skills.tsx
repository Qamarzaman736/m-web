export default function Skills() {
    const skillCategories = [
      {
        name: "Machine Learning",
        skills: [
          { name: "Neural Networks", percentage: 90 },
          { name: "Deep Learning", percentage: 85 },
          { name: "Reinforcement Learning", percentage: 80 },
          { name: "Supervised Learning", percentage: 95 },
        ],
      },
      {
        name: "Programming",
        skills: [
          { name: "Python", percentage: 95 },
          { name: "TensorFlow", percentage: 85 },
          { name: "PyTorch", percentage: 80 },
          { name: "Scikit-learn", percentage: 90 },
        ],
      },
      {
        name: "Data Science",
        skills: [
          { name: "Data Analysis", percentage: 90 },
          { name: "Data Visualization", percentage: 85 },
          { name: "Big Data", percentage: 80 },
          { name: "SQL", percentage: 85 },
        ],
      },
      {
        name: "AI Applications",
        skills: [
          { name: "Natural Language Processing", percentage: 90 },
          { name: "Computer Vision", percentage: 85 },
          { name: "Predictive Analytics", percentage: 80 },
          { name: "Robotics", percentage: 75 },
        ],
      },
    ]
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-700">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary-700">{category.name}</h3>
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-primary-600 font-semibold">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-primary-600 h-2.5 rounded-full"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  