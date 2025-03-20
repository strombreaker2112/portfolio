import React from 'react';
import { FileDown, Code, Palette, Database, Globe, Server } from 'lucide-react';
import profilePic from '../assets/profile.jpg';
import resume from '../assets/Viraj.pdf'

export default function About() {
  const skills = [
    { name: 'UI/UX Design', progress: 80, icon: <Palette className="w-5 h-5" /> },
    { name: 'Graphic Design', progress: 90, icon: <Globe className="w-5 h-5" /> },
    { name: '3D Designing', progress: 75, icon: <Server className="w-5 h-5" /> },
    { name: 'Web Management', progress: 30, icon: <Database className="w-5 h-5" /> },
    { name: 'Problem Solving', progress: 65, icon: <Code className="w-5 h-5" /> },
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Viraj.pdf'; // Ensure 'Viraj.pdf' is in the /public folder
    link.download = 'Viraj_Resume.pdf'; // Custom file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FFF1CB] dark:bg-[#300045]/50 rounded-2xl -z-10"></div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
              <p className="text-xl font-regular text-primary">
                Enthusiastic and creative graphic designer currently pursuing a B.Tech degree in Electronics and Telecommunication (ENTC) from KIT’S College of Engg. Proficient in Figma and Canva, with a strong foundation in visual communication and design principles.
              </p><br />
              <p className="text-xl font-regular text-primary">
                Eager to leverage design skills to create engaging graphics that resonate with target audiences. Committed to continuous learning and applying innovative solutions in graphic design projects.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Technical Skills</h3>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {skill.icon}
                      <span className="text-primary">{skill.name}</span>
                    </div>
                    <span className="text-[#300045]">{skill.progress}%</span>
                  </div>
                  <div className="h-2 bg-[#300045]/10 dark:bg-[#FFF1CB]/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#300045] dark:bg-[#FFF1CB] rounded-full transition-all duration-1000"
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              <a href={resume} download={resume}>Download Resume</a>
              <FileDown className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
