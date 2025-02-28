import React from 'react'

const PortfolioPageComponent1 = () => {
const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      liveUrl: "https://www.behance.net/gallery/215296101/Luminous-Labs-Brand-Identity-Website?tracking_source=search_projects|website&l=0",
      codeUrl: "#",
      imageUrl: "https://via.placeholder.com/600x400"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time collaborative task management application",
      tags: ["React", "Firebase", "Tailwind", "Context API"],
      liveUrl: "#",
      codeUrl: "#",
      imageUrl: "https://via.placeholder.com/600x400"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics",
      tags: ["React", "Chart.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      codeUrl: "#",
      imageUrl: "https://via.placeholder.com/600x400"
    },
  ];
  
    return (
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-White dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
            My Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800"
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 dark:text-gray-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full dark:bg-blue-900 dark:text-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 mt-4">
                    <a 
                      href={project.liveUrl}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.codeUrl}
                      className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300 text-sm dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

export default PortfolioPageComponent1