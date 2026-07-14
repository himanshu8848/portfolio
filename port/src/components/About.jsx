import React from 'react';

export default function About() {
  // Updated with the languages, databases, frameworks, and tools from your resume
  const skills = [
    { 
      category: "Programming Languages", 
      items: ["C", "C++", "C#", "Python", "JavaScript", "HTML", "CSS"] 
    },
    { 
      category: "Frameworks & Core", 
      items: ["ASP.NET", "MVC", "Windows Forms", "WPF", "React.js", "Express.js"] 
    },
    { 
      category: "Database Systems", 
      items: ["SQL Server", "MongoDB", "Mongoose ODM"] 
    },
    { 
      category: "Tools & Technologies", 
      items: ["Git", "GitHub", "VS Code", "Firebase", "Stripe", "Render", "Postman"] 
    }
  ];

  // Updated with your exact software developer internship details
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Vulcan Advance Intelligence Computing Pvt. Ltd",
      period: "January 2025 - June 2025",
      description: "Developed a desktop application using C#, applying object-oriented programming principles for scalable and maintainable code. Designed a responsive interface to enhance user experience, implemented efficient application logic for smooth performance, and integrated a SQL database for structured data storage, retrieval, and management."
    },
    {
      role: "Full-Stack Web Developer",
      company: "Personal Projects & Open Source",
      period: "2025 - Present",
      description: "Architected secure authentication pipelines using Firebase and JWT. Implemented stripe-integrated payment layers, worked with MongoDB storage handlers, and constructed responsive user interfaces using modern React frameworks and Tailwind CSS architectures."
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-24 sm:py-32 w-full bg-white dark:bg-[#08080a] text-slate-900 dark:text-white border-t border-slate-200/50 dark:border-slate-900/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-20">
        
        {/* TOP LAYOUT: Bio & Technical Skills Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Strategic Bio */}
          <div className="lg:col-span-5 space-y-6">
             
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight leading-tight">
              Crafting scalable web systems from the database layer to the interface.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-light text-sm leading-relaxed">
              I am a full-stack developer focusing closely on building robust backend pipelines paired with fluid user experiences. I structure application data engines efficiently to guarantee high reliability under load.
            </p>
          </div>

          {/* Right Side: Skill Architecture Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pl-12 w-full">
            {skills.map((group, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0c0c10] border border-slate-200/50 dark:border-slate-900/50 transition-all duration-300 hover:border-orange-500/30 shadow-xs"
              >
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium rounded-md bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM LAYOUT: Professional Experience Timeline */}
        <div className="pt-12 border-t border-slate-100 dark:border-slate-900/40">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 block mb-6">
              Professional Journey
            </span>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:right-auto before:left-3.5 before:w-[1px] before:bg-slate-200 dark:before:bg-slate-800">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-10 group">
                  {/* Timeline Node Point */}
                  <div className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-orange-500 transition-colors duration-300" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role} <span className="text-slate-400 dark:text-slate-600 font-normal text-sm block sm:inline">@ {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 sm:text-right whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-light text-slate-600 dark:text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}