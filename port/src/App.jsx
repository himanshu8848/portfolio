import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About'; 
import Contact from './components/Contact';

import './index.css'

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="bg-[#fafafa] text-slate-900 dark:bg-[#08080a] dark:text-white transition-colors duration-300 antialiased font-sans min-h-screen">
      
      {/* Dynamic Floating Mode Matrix Controller */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-12 h-12 rounded-full bg-white/80 dark:bg-[#121216]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-center text-slate-700 dark:text-slate-300 transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          {theme === 'dark' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
        </button>
      </div>

      <Navbar />
      <Hero />
      <Projects />
      
      <About />
      <Contact />
      <footer 
  id="contact" 
  className="bg-gradient-to-b from-white to-blue-50/70 dark:from-[#08080a] dark:to-[#0c1524] border-t border-slate-200/40 dark:border-slate-900 py-16 text-center transition-colors duration-300"
>
  <div className="max-w-7xl mx-auto px-6 text-slate-500 dark:text-slate-400 text-xs tracking-wider space-y-2">
      <p className="font-bold text-slate-700 dark:text-blue-400">
        contact: himanshusingh6408@gmail.com
      </p>
      <p>&copy; 2026 Himanshu Singh. Developed under high-fidelity dark visual patterns.</p>
  </div>
</footer>
    </div>
  );
}