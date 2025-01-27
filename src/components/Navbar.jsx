import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navLinks = [
    { href: '#home', icon: <Home size={20} />, label: 'Home' },
    { href: '#about', icon: <User size={20} />, label: 'About' },
    { href: '#projects', icon: <Briefcase size={20} />, label: 'Projects' },
    { href: '#contact', icon: <Mail size={20} />, label: 'Contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 tracking-wider">
          {isLoading ? <Skeleton width={150} height={30} /> : 'pushpreet singh'}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isLoading ? (
            <Skeleton circle={true} width={30} height={30} />
          ) : (
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          {isLoading
            ? Array(4)
                .fill()
                .map((_, index) => (
                  <li key={index}>
                    <Skeleton width={80} height={20} />
                  </li>
                ))
            : navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors group"
                  >
                    {link.icon}
                    <span className="text-sm font-medium group-hover:scale-105 transition-transform">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
        </ul>

        {/* Mobile Navigation */}
        {isOpen && !isLoading && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={toggleMenu}
                    className="flex items-center space-x-3 p-4 border-b hover:bg-blue-50 transition-colors"
                  >
                    {link.icon}
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
