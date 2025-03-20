import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import logo from '../assets/logo.jpg'

export default function Projects() {
  const categories = ['All', 'Web', 'Mobile', 'UI/UX'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: 'Elixir Graphics Store',
      description: 'Your one-stop shop for stunning graphics. Elevate your brand with high-quality, eye-catching designs!',
      image: logo,
      category: 'Web',
      demo: 'https://demo.com',
      github: 'https://github.com',
      tags: ['Web', 'Graphics Store'],
    },
    // {
    //   title: 'Weather App',
    //   description: 'Real-time weather tracking with OpenWeather API',
    //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    //   category: 'Mobile',
    //   demo: 'https://demo.com',
    //   github: 'https://github.com',
    //   tags: ['React Native', 'API Integration'],
    // },
    // {
    //   title: 'Portfolio Design',
    //   description: 'Modern portfolio template with dark mode',
    //   image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
    //   category: 'UI/UX',
    //   demo: 'https://demo.com',
    //   github: 'https://github.com',
    //   tags: ['Figma', 'UI Design'],
    // },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-8">Featured Projects</h2>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#300045] text-[#FFF1CB] dark:bg-[#FFF1CB] dark:text-[#300045]'
                  : 'bg-[#300045]/10 text-[#300045] dark:bg-[#FFF1CB]/10 dark:text-[#FFF1CB] hover:bg-[#300045]/20 dark:hover:bg-[#FFF1CB]/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-[#300045]/50 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-[#300045]/80 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.demo}
                    className="p-2 bg-white rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6 text-[#300045]" />
                  </a>
                  {/* <a
                    href={project.github}
                    className="p-2 bg-white rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6 text-[#300045]" />
                  </a> */}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-l font-regular text-primary mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-[#300045]/10 dark:bg-[#FFF1CB]/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}