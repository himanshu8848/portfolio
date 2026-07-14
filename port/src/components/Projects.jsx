import React from 'react';

const PROJECT_DATA = [
  {
    type: "Web Production Application",
    title: "AI Exam Notes Generator",
    description: "A highly scalable web system leveraging generative AI networks to structure comprehensive learning guides, flowcharts, and markdown documents from user parameters.",
    tags: ["React.js", "Tailwind CSS", "Google Gemini AI", "MongoDB", "Stripe Suite"],
    liveUrl: "https://one-examnotesaicliclient.onrender.com",
    metrics: [
      "Formed strict identity storage logic via Google Authentication processes using Firebase with JWT validation matrices.",
      "Designed robust consumption infrastructure meters using Stripe APIs for subscription and credit handling loops.",
      "Created optimized microservice RESTful endpoints to coordinate identity operations, AI tasks, and dynamic document streaming pipelines safely.",
      "Constructed MongoDB relational database mapping to safely parse, track, and historicalize custom query metrics."
    ]
  }
];

export default function Projects() {
  return (
    // FIXED: Only background changed to bg-transparent, text/border transitions left original
    <section id="projects" className="py-32 bg-transparent border-t border-slate-200/50 dark:border-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
         
        <div className="grid grid-cols-1 gap-16">
          {PROJECT_DATA.map((proj, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-slate-100 dark:border-slate-900">
              <div className="lg:col-span-5">
                <span className="text-xs font-semibold text-slate-400 block mb-2">{proj.type}</span>
                {/* FIXED: Keeps your exact original text colors */}
                <h3 className="text-3xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">{proj.title}</h3>
                <p className="text-slate-600 dark:text-slate-800 text-sm leading-relaxed mb-6 font-light">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tags.map((t, i) => <span key={i} className="tech-badge">{t}</span>)}
                </div>
                {/* FIXED: Keeps your exact original text colors */}
                <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white hover:opacity-60 transition-opacity">
                  Launch Live Site <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </a>
              </div>
              
              {/* FIXED: Keeps your exact original text colors */}
              <div className="lg:col-span-7 space-y-3.5 text-slate-600 dark:text-slate-400 text-sm font-light pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                {proj.metrics.map((m, i) => (
                  <p key={i} className="flex items-start gap-2">
                    <i className="fa-solid fa-circle text-[6px] mt-2 text-slate-400"></i>
                    {m}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}