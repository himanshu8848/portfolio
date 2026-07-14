import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  // Track page scroll position to toggle the clean glassmorphic container backdrop
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active section state based on scroll coordinates
  useEffect(() => {
    const handleIntersection = () => {
      const scrollPosition = window.scrollY + 120; // Offset for top tracking accuracy
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleIntersection);
    return () => window.removeEventListener('scroll', handleIntersection);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-white/80 dark:bg-[#08080a]/80 backdrop-blur-md border-b border-slate-200/40 dark:border-slate-900/40 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      {/* Container spacing optimized to prevent wrapping on narrow mobile screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-12 flex items-center justify-between">
        
        {/* Modern Typography Logo - Always visible on the left side */}
        <a 
          href="#about" 
          onClick={() => setIsOpen(false)}
          className="flex-shrink-0 text-base sm:text-lg font-bold font-display tracking-tight text-slate-900 dark:text-white group flex items-center gap-1"
        >
          <span>Himanshu</span>
          <span className="text-slate-400 dark:text-slate-600 font-normal transition-colors group-hover:text-orange-500">singh</span>
        </a>
        
        {/* Navigation Controls Wrapper */}
        <div className="flex items-center space-x-2 sm:space-x-6 md:space-x-8">
          
          {/* Desktop Links (Hidden on mobile/tablet) */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`relative py-1 transition-colors duration-300 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white ${
                  activeSection === item.id ? '!text-slate-900 dark:!text-white font-bold' : ''
                }`}
              >
                {item.label}
                {/* Active Underline Indicator */}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Divider Line & Social Icons - Always visible on both Mobile and Desktop */}
          <div className="flex items-center space-x-1 sm:space-x-4 pl-3 sm:pl-6 border-l border-slate-200/60 dark:border-slate-800/60">
            {/* GitHub Link */}
            <a 
              href="https://github.com/himanshu8848"
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub Profile"
              className="p-1.5 sm:p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-all duration-200 hover:scale-105"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            {/* LinkedIn Link */}
            <a 
              href="https://linkedin.com/in/himanshu-singh-841276253"
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn Profile"
              className="p-1.5 sm:p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-all duration-200 hover:scale-105"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Direct Mail / Message Box Button */}
            <a 
              href="mailto:himanshusingh6408@gmail.com"
              aria-label="Send Email"
              className="p-1.5 sm:p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-all duration-200 hover:scale-105"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615m19.5 0v0A2.25 2.25 0 0019.5 4.5" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle Button (Placed clean on the far right on mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-all duration-205 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Cancel (X) Icon
              <svg className="w-6 h-6 stroke-current stroke-2" viewBox="0 0 24 24" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Clean 2-Line Hamburger Icon
              <svg className="w-6 h-6 stroke-current stroke-2" viewBox="0 0 24 24" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer Panel */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#08080a]/95 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-900/50 transition-all duration-300 ease-in-out shadow-lg ${
          isOpen 
            ? 'max-h-screen opacity-100 py-6 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-semibold uppercase tracking-widest py-2 px-3 rounded-lg transition-all ${
                activeSection === item.id 
                  ? 'text-orange-500 bg-orange-50/50 dark:bg-orange-500/10' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900/40'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}