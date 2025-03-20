import React from "react";
import { FileDown, GraduationCap, Briefcase, Award } from "lucide-react";

export default function Resume() {
  const experiences = [
    {
      type: "education",
      title: "Completed my schooling from",
      organization: "V.J. Deshmukh Highschool",
      period: "2011 - 2021",
      description: "A place which grew my communication, confidence and always motivated us to keep learning new skills. Scored 92% in board examination.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      type: "education",
      title: "Bachelor of Electronics & Telecommunication",
      organization: "KIT's College of Engineering",
      period: "2023 - 2027",
      description: "Gaining expertise in communication systems, embedded technology, and modern electronics.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      type: "work",
      title: "Associate Graphics & Design",
      organization: "E-Cell KITCoEK",
      period: "2023 - 2025",
      description:
        "Working as Associate in domain graphics and designing.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      type: "work",
      title: "Head Graphics & Design",
      organization: "ASSETS KITCoEK",
      period: "2024 - 2026",
      description:
        "Working as Head in domain graphics and designing.",
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  return (
    <section id="resume" className="section-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
          <h2 className="text-3xl font-bold text-primary">
            Experience & Education
          </h2>
          {/* <a href="/resume.pdf" className="btn-primary whitespace-nowrap">
            Download CV
            <FileDown className="ml-2 w-5 h-5" />
          </a> */}
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#300045]/20 dark:bg-[#FFF1CB]/20"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-0 p-4 rounded-full bg-[#FFF1CB] dark:bg-[#300045] text-[#300045] dark:text-[#FFF1CB]">
                  {experience.icon}
                </div>

                <div className="bg-[#FFF1CB]/30 dark:bg-[#FFF1CB]/5 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <span className="text-[#300045] font-medium ">
                    {experience.period}
                  </span>
                  <h3 className="text-[#300045] font-semibold mt-1">
                    {experience.title}
                  </h3>
                  <p className="text-[#300045] font-medium mt-1">
                    {experience.organization}
                  </p>
                  <p className="text-[#300045] mt-2">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
