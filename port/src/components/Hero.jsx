import React from 'react';

// Import the GIF asset from your assets folder as resolved
import programmingAnimation from '../assets/Programming.gif'; 

export default function Hero() {
  return (
    // FIXED: Changed min-h-screen to a dynamic container height on mobile so content doesn't overflow, scaling perfectly to min-h-screen on desktop
    <section id="about" className="relative min-h-fit lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-16 bg-transparent">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent z-10 pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Left Hand: Detailed Bio Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left max-w-2xl lg:max-w-none order-2 lg:order-1">
          <span className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-4">
            Available for Opportunities
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black font-display text-slate-900 dark:text-white leading-[1.1] lg:leading-[1.05] tracking-tight uppercase mb-6">
            I'm a Web<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-indigo-500 dark:from-orange-400 dark:via-pink-400 dark:to-indigo-400">
              Developer
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-light">
            Passionate Full-Stack Developer focusing on clean, seamless, and performant web infrastructures. Specializing in modular code translations that transform design architectures into pristine, highly-optimized web applications.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all shadow-lg text-center w-full sm:w-auto"
            >
              View My Projects
            </a>
            <a 
              href="mailto:himanshusingh6408@gmail.com" 
              className="px-6 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-all text-center w-full sm:w-auto"
            >
              Let's Connect
            </a>
          </div>

          {/* Quick Technical Keywords */}
          <div className="mt-12 pt-8 border-t border-slate-200/60 dark:border-slate-800/60">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Core Competencies</p>
            <div className="flex flex-wrap gap-2.5">
              {['React.js', 'C# / ASP.NET', 'MongoDB', 'SQL Server', 'Firebase', 'Stripe Integration', 'REST APIs','C/C++' ,'PYTHON'].map((skill) => (
                <span key={skill} className="px-3.5 py-1.5 rounded-md text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300/30 dark:border-slate-800/30">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Hand: Elegant Floating Local GIF Frame */}
        {/* FIXED: Swapped ordering so the animation stays gracefully on top when stacked on mobile screens */}
        <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end order-1 lg:order-2">
          <div className="group relative w-full max-w-[320px] sm:max-w-[400px] aspect-square flex items-center justify-center">
            
            {/* Soft backdrop blur lights */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-slate-500/10 to-blue-500/20 dark:from-orange-500/10 dark:via-transparent dark:to-blue-500/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
            
            {/* Floating Container Layer */}
            <div className="relative w-full h-full overflow-hidden transition-all duration-500 animate-float">
              
              {/* Radial gradient glow background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.15),transparent_70%)] z-10 pointer-events-none"></div>
              
              {/* FIXED: Removed raw "scale-195" to ensure image boundaries naturally stay contained without breaking horizontal layout bounds */}
              <img 
                src={programmingAnimation} 
                alt="Himanshu Coding Animation" 
                className="w-full h-full object-contain relative z-20 transition-transform duration-700 ease-out"
              />
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}