import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FFF1CB] dark:bg-slate-800 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl text-[#300045] font-bold">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:contact@example.com" className="flex items-center gap-2 text-[#300045] dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Mail className="w-4 h-4" />
                virajmore1728@gmail.com
              </a>
              <p className="flex items-center gap-2 text-[#300045] dark:text-gray-300">
                <Phone className="w-4 h-4" />
                +91 7276**91**
              </p>
              <p className="flex items-center gap-2 text-[#300045] dark:text-gray-300">
                <MapPin className="w-4 h-4" />
                Kolhapur, Maharashtra, India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl text-[#300045] font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-[#300045] dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#300045] dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#resume" className="text-[#300045] dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#300045] dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl text-[#300045] font-bold">Connect</h3>
            <div className="flex gap-4">
              {/* <a
                href="https://github.com/abhitrambadiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#300045] dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Github className="w-6 h-6" />
              </a> */}
              <a
                href="https://www.linkedin.com/in/viraj-more-3899132b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#300045] dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/viraj_more_2112"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#300045] dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/viraj_2112/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#300045] dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-[#300045] dark:text-gray-300">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;