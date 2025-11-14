"use client"

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
      : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" 
            className="cursor-target flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 
              flex items-center justify-center transform transition-transform 
              group-hover:scale-110 duration-300">
              <span className="text-2xl font-bold text-white">A</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 
              bg-clip-text text-transparent hidden sm:block">
              Adekunle Owoseni
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: 'About', href: '/about' },
              { name: 'Projects', href: '/projects' },
              { name: 'Contact', href: '/contact' }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="cursor-target px-4 py-2 rounded-xl text-gray-700 dark:text-gray-200 
                  hover:bg-purple-500/10 dark:hover:bg-purple-500/20
                  relative group transition-all duration-300"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r 
                  from-purple-500 to-blue-500 group-hover:w-full transition-all 
                  duration-300" />
              </Link>
            ))}
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2" />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="cursor-target p-2 rounded-xl hover:bg-purple-500/10 
                dark:hover:bg-purple-500/20 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
          {[
            { name: 'About', href: '/about' },
            { name: 'Projects', href: '/projects' },
            { name: 'Contact', href: '/contact' }
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="cursor-target block px-3 py-2 rounded-xl text-base font-medium 
                text-gray-700 dark:text-gray-200 hover:bg-purple-500/10 
                dark:hover:bg-purple-500/20 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}