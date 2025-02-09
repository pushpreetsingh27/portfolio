import React, { useState, useEffect } from "react";
import { Download, Linkedin, Github } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/pushpreetsingh27/",
      color: "text-blue-600 hover:text-blue-800",
    },
    {
      icon: <Github size={24} />,
      href: "https://github.com/pushpreetsingh27",
      color: "text-gray-800 hover:text-black",
    },
  ];

  const handleResumeDownload = () => {
    window.open("/path/to/your/resume.pdf", "_blank");
  };

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <div className="space-y-3">
            {isLoading ? (
              <>
                <Skeleton width={200} height={30} />
                <Skeleton width={"100%"} height={50} />
                <Skeleton width={"90%"} height={60} />
              </>
            ) : (
              <>
                <p className="text-blue-600 font-medium text-4xl sm:mt-8 ">Hello, I'm</p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800"> 
                  Pushpreet Singh
                  <span className="block text-3xl md:text-4xl text-blue-500 mt-2">
                    Frontend Developer
                  </span>
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  Passionate frontend developer with a keen eye for creating
                  responsive, user-friendly web experiences. Specialized in
                  React, Tailwind CSS, and modern web technologies. Transforming
                  design concepts into elegant, efficient code.
                </p>
              </>
            )}
          </div>

          {/* CTA and Social Links Container */}
          <div className="flex gap-2 md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            {isLoading ? (
              <Skeleton width={180} height={50} />
            ) : (
              <button
                onClick={handleResumeDownload}
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full 
                           hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg 
                           group font-medium"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
            )}

          </div>
        </div>

        {/* Image Container */}
        <div className="md:w-1/2 flex justify-center">
          {isLoading ? (
            <Skeleton circle={true} width={300} height={300} />
          ) : (
            <div className="relative">
              <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
              <img
                src="profile.webp"
                alt="Developer Profile"
                className="relative z-10 rounded-full w-64 h-64 md:w-96 md:h-96 object-cover 
                           border-4 border-white shadow-xl hover:scale-105 transition-transform"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
