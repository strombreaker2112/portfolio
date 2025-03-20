import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="section-dark min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 dark:to-black/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-primary mb-6 opacity-0 animate-fade-in">
            Viraj More
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#300045] mb-8 opacity-0 animate-fade-in animation-delay-200">
           Kolhapur, Maharashtra, India
          </p>
          <p className="text-lg font-semibold text-[#300045]/60 dark:text-[#FFF1CB]/60 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in animation-delay-400">
           Pursuing B.Tech in Electronics and Telecommunications.<br />
           Always exploring innovations in circuit design and telecom technology. 🚀
          </p>
          <div className="flex justify-center space-x-4 opacity-0 animate-fade-in animation-delay-600">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-secondary">
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-current rounded-full animate-scroll"></div>
          </div>
        </a>
      </div>
    </section>
  );
}