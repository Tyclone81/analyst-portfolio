import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Analytical & Core Chemistry",
      subtitle: "Laboratory Testing & Precision Calibration",
      icon: (
        <svg className="w-5 h-5 text-[#5eead4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v17.792M14.25 3.104v17.792M3 12h18" />
        </svg>
      ),
      skills: [
        "Equipment Calibration (Alcoholometers, Analytical Balances)",
        "Validated Analytical Methods & Testing",
        "Raw Material & Finished Product Verification",
        "Chemical Reagent & Calibration Standard Preparation"
      ]
    },
    {
      title: "Operations & Quality Management",
      subtitle: "Industrial Workflows, Compliance & Leadership",
      icon: (
        <svg className="w-5 h-5 text-[#5eead4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      skills: [
        "LIMS (Laboratory Information Management Systems)",
        "Workforce Orchestration & Task Assignment (10+ Personnel)",
        "Standard Operating Procedures (SOP) Development",
        "Procurement Logistics, Inventory Tracking & On-Site Safety"
      ]
    },
    {
      title: "Software & Systems Engineering",
      subtitle: "Modern Backend Execution & Automation Tools",
      icon: (
        <svg className="w-5 h-5 text-[#5eead4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      skills: [
        "Backend Engineering (Golang Architecture)",
        "Version Control Workflows (Git & GitHub Hubs)",
        "Automated E2E Testing (Playwright, Pytest Suites)",
        "Responsive Interface Design (JavaScript, React, Tailwind)"
      ]
    }
  ];

  return (
    <section id="skills" className="w-full py-28 bg-[#0a1b1b] border-t border-white/5 px-6 lg:px-16">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center lg:text-left">
          <span className="text-xs font-bold tracking-widest text-[#5eead4] uppercase block mb-3">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Hybrid <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5eead4]">Capabilities Matrix</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            A diverse operational skill set refined across high-precision laboratories, production floors, and code repositories.
          </p>
        </div>

        {/* Triple Column Skill Category Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-[#071313] border border-white/5 hover:border-[#5eead4]/20 rounded-xl p-8 transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div>
                {/* Category Header Area */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-2.5 rounded-lg bg-[#112d2d]/50 border border-[#5eead4]/10 group-hover:bg-[#5eead4] group-hover:text-[#071313] transition-all duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#5eead4] transition-colors duration-200">
                      {category.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-white/40 tracking-wide mt-0.5">{category.subtitle}</p>
                  </div>
                </div>

                {/* Skill Item Stack */}
                <div className="space-y-3.5 mt-8">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.01] border border-white/5 hover:bg-[#112d2d]/20 transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5 text-[#5eead4] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-xs text-white/80 font-medium leading-relaxed">
                        {skill}
                      </span>
                    </div>
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
