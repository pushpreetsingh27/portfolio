import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "MERN Chat App",
      description: "A real-time messaging platform with dynamic updates, leveraging MongoDB, Express, React, and Node.js.",
      technologies: ["React", "Node.js", "MongoDB","ExpressJS" ,"Socket.io" , "Tailwind" ],
      image: "./Capture.PNG",
      githubLink: "https://github.com/pushpreetsingh27/mern-chat-app",
      liveLink: "https://your-ecommerce-demo.vercel.app"
    },
    {
      title: "React Blog App",
      description: "A feature-rich platform for creating, managing, and sharing blogs with secure Firebase authentication and storage.",
      technologies: ["React", "Firebase", "Tailwind"],
      image: "project-img.PNG",
      githubLink: "https://github.com/yourusername/task-management",
      liveLink: "https://blog-app-mu-five.vercel.app/"
    },
   
    
  ];

  return (
    <div
    id='projects'
    className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My Projects
          </h2>
         
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden 
                         transform transition-all hover:scale-105 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 
                                hover:opacity-20 transition-opacity"></div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-blue-100 text-blue-800 
                                 text rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 
                               bg-gray-800 text-white px-4 py-2 
                               rounded-full hover:bg-gray-700 
                               transition-colors"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 
                               bg-blue-600 text-white px-4 py-2 
                               rounded-full hover:bg-blue-700 
                               transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;