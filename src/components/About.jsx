import React from 'react';
import { 
  Code, 
  Laptop, 
  Target, 
  Zap 
} from 'lucide-react';

const AboutMe = () => {
  const technologies = [
    { name: 'HTML', color: 'text-orange-500', bgColor: 'bg-orange-100' },
    { name: 'CSS', color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { name: 'JavaScript', color: 'text-yellow-500', bgColor: 'bg-yellow-100' },
    { name: 'React', color: 'text-cyan-500', bgColor: 'bg-cyan-100' },
    { name: 'Node.js', color: 'text-green-600', bgColor: 'bg-green-100' },
    { name: 'MongoDB', color: 'text-emerald-600', bgColor: 'bg-emerald-100' },
    { name: 'ExpreesJS', color: 'text-emerald-600', bgColor: 'bg-emerald-100' },
    { name: 'Tailwind', color: 'text-sky-500', bgColor: 'bg-sky-100' },
    { name: 'UiPath', color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { name: 'GitHub', color: 'text-gray-800', bgColor: 'bg-gray-100' },
    { name: 'Firebase', color: 'text-orange-500', bgColor: 'bg-orange-100' },
    { name: 'Power Automate', color: 'text-indigo-600', bgColor: 'bg-indigo-100' }
  ];

  return (
    <div
    id='about'
    className="min-h-80 bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - About Me Content */}
        <div className="md:w-2/3 space-y-6">
          <div className="flex items-center space-x-4 mb-4">
            <Code className="text-blue-600" size={40} />
            <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="flex items-center space-x-2">
              <Laptop className="text-blue-500 mr-2" size={20} />
              As a passionate frontend developer, I specialize in creating dynamic, 
              responsive web applications that deliver exceptional user experiences.
            </p>
            
            <p className="flex items-center space-x-2">
              <Target className="text-green-500 mr-2" size={20} />
              My expertise spans modern web technologies, with a strong focus on React 
              and contemporary frontend frameworks. I transform complex design concepts 
              into elegant, efficient, and interactive web solutions.
            </p>
            
            <p className="flex items-center space-x-2">
              <Zap className="text-yellow-500 mr-2" size={20} />
              Beyond frontend development, I bring unique skills in Robotic Process 
              Automation (RPA) technologies like UiPath and Power Automate. This 
              interdisciplinary background allows me to approach problem-solving 
              with innovative and holistic strategies.
            </p>
          </div>
        </div>

        {/* Right Side - Technologies */}
        <div className="md:w-1/3 bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Technologies
          </h3>
          
          <div className="grid grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center justify-center p-3 rounded-lg 
                            ${tech.bgColor} ${tech.color} 
                            hover:scale-105 transition-transform cursor-pointer`}
              >
                <span className={`font-semibold text-sm ${tech.color}`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;