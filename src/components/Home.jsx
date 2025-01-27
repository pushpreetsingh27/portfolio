import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ContactSection from './Contact'; // Importing the ContactSection

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to my Portfolio!</h1>
          <h2 className="text-2xl md:text-3xl mb-4">I am <span className="text-blue-500">Pushpreet Singh</span></h2>
          <p className="text-xl mb-6">A software engineer working on Front-end and RPA technologies</p>
          <div className="flex space-x-4">
            <SocialLink href="https://www.instagram.com/agamsingh_27/" icon={FaInstagram} />
            <SocialLink href="https://github.com/pushpreetsingh27" icon={FaGithub} />
            <SocialLink href="https://twitter.com/PSingh2799" icon={FaTwitter} />
            <SocialLink href="https://www.linkedin.com/in/pushpreetsingh27/" icon={FaLinkedin} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <img src="https://source.unsplash.com/random/800x600?developer" alt="Pushpreet Singh" className="rounded-lg shadow-2xl" />
        </motion.div>
      </div>
      <ContactSection /> {/* Adding the ContactSection here */}
    </div>
  );
};

const SocialLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    <Icon className="w-8 h-8" />
  </a>
);

export default Home;
