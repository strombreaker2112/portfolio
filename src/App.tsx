import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#300045] transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;