import React from 'react';

export default function Projects() {
  const projectList = [
    {
      title: "INKA LittUp Web Platform",
      client: "LittUp Enterprise",
      scope: "Full-Stack Development & Deployment",
      description: "Engineered a fully mobile-responsive production web platform for a regional electrical engineering enterprise to accelerate B2B client acquisition.",
      features: [
        "Custom Lightbox responsive visual media engine arrays.",
        "Automated lead generation routing using integrated web forms.",
        "Direct integration with WhatsApp API channels for real-time customer onboarding."
      ],
      stack: ["React", "Tailwind CSS", "API Integration", "UI/UX Assembly"]
    },
    {
      title: "Propersats Escrow Protocol",
      client: "GitHub Ecosystem",
      scope: "Backend & Escrow Infrastructure Development",
      description: "Participated in the development of a mobile-first real estate escrow web application utilizing sub-second Bitcoin Lightning Network micro-payments to actively eliminate land-selling transactional fraud.",
      features: [
        "Contributed to building a 2-of-2 multi-signature escrow verification approval sequence logic.",
        "Engineered secure multi-stakeholder dashboards tailored for legal and surveying entities.",
        "Wrote rigorous automated E2E test suites utilizing Playwright and pytest tracking metrics."
      ],
      stack: ["Golang", "Bitcoin Lightning API", "Multi-Sig Logic", "Playwright", "pytest"]
    }
  ];

  return (
    <section id="projects" className="w-full py-28 bg-[#071313] border-t border-white/5 px-6 lg:px-16">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Header Block */}
        <div className="mb-20 text-center lg:text-left">
          <span className="text-xs font-bold tracking-widest text-[#5eead4] uppercase block mb-3">
            System Engineering Deployments
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5eead4]">Projects</span>
          </h2>
        </div>

        {/* Double Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectList.map((project, idx) => (
            <div key={idx} className="bg-[#0a1b1b] border border-white/5 hover:border-[#5eead4]/30 rounded-2xl p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-2xl">
              <div>
                <div className="flex flex-wrap justify-between items-center gap-2 mb-6">
                  <span className="text-xs font-bold tracking-wider text-[#5eead4]/80 uppercase">{project.scope}</span>
                  <span className="text-[11px] font-semibold text-white/40 uppercase tracking-widest bg-[#071313] px-3 py-1 rounded-full border border-white/5">{project.client}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white group-hover:text-[#5eead4] transition-colors duration-200 mb-4">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                <ul className="space-y-3 pl-1 mb-8">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-xs text-white/60 flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#5eead4] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {project.stack.map((tech, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-bold tracking-wider uppercase bg-[#071313] text-[#5eead4] px-3 py-1.5 rounded border border-[#5eead4]/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
