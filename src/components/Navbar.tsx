import React, { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-[#300045]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#300045] dark:text-[#FFF1CB]">Portfolio</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#resume" className="nav-link">Resume</a>
              <a href="#contact" className="nav-link">Contact</a>
              {/* <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#300045]/50 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-[#FFF1CB]" /> : <Moon className="w-5 h-5 text-[#300045]" />}
              </button> */}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            {/* <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#300045]/50 transition-colors mr-2"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-[#FFF1CB]" /> : <Moon className="w-5 h-5 text-[#300045]" />}
            </button> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#300045]/50 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#300045] dark:text-[#FFF1CB]" />
              ) : (
                <Menu className="w-6 h-6 text-[#300045] dark:text-[#FFF1CB]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="mobile-nav-link">Home</a>
            <a href="#about" className="mobile-nav-link">About</a>
            <a href="#projects" className="mobile-nav-link">Projects</a>
            <a href="#resume" className="mobile-nav-link">Resume</a>
            <a href="#contact" className="mobile-nav-link">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}