import React from 'react';
import constructionPic from '../assets/construction.jpg';

export default function Experience() {
  const topIndustrialExp = [
    {
      role: "Quality Control & Production Personnel",
      company: "Biscept Limited",
      period: "Industrial Production Tracks",
      type: "Precision Systems",
      bullets: [
        "Executed validated analytical testing methods on raw materials and finished beverage products to guarantee strict quality alignment.",
        "Calibrated and maintained high-precision laboratory instruments (alcoholometers, analytical balances) to minimize system downtime.",
        "Managed QC data pipelines and records utilizing LIMS (Laboratory Information Management Systems) to ensure complete audit traceability.",
        "Partnered directly with production engineering teams to enforce specifications, significantly reducing out-of-spec product batches."
      ],
      tags: ["LIMS Data Tracking", "Instrument Calibration", "Analytical Testing"]
    },
    {
      role: "Laboratory Technologist",
      company: "Kisii National Polytechnic",
      period: "Applied Sciences Track",
      type: "SOP Architecture",
      bullets: [
        "Prepared complex chemical reagents, calibration standards, and analytical samples for practical operations.",
        "Provided rigorous technical support and safety guidance to trainees during applied lab procedures.",
        "Maintained laboratory hardware efficiency through regular diagnostics and system cleaning protocols.",
        "Assisted in updating Standard Operating Procedures (SOPs) to optimize laboratory workflow speeds and safety metrics."
      ],
      tags: ["SOP Development", "Reagent Preparation", "Technical Support"]
    }
  ];

  const jengaExp = {
    role: "Site Manager",
    company: "Creative Jenga",
    period: "Construction Operations Track",
    type: "Operations & Management",
    bullets: [
      "Supervised procurement logistics and verified structural material quality per project specifications.",
      "Inspected raw site materials and enforced safety protocols to minimize on-site industrial accidents.",
      "Managed labor compensation frameworks by maintaining an accurate, up-to-date inventory tracking matrix."
    ],
    tags: ["Logistics", "Procurement Management", "Safety Compliance"]
  };

  const softwareExp = [
    {
      role: "Software Engineer (Trainee)",
      company: "Zone01 Kisumu",
      period: "Intensive 01-Edu Setting",
      type: "Core Systems Architecture",
      bullets: [
        "Building production-grade backend applications in Go, applying clean code principles and modular design patterns.",
        "Solving complex algorithmic and data-structure problems while managing distributed version control workflows via Git/GitHub.",
        "Collaborating with engineering peers on production-style microservices, following modern software engineering best practices."
      ],
      tags: ["Golang", "Git Architecture", "Algorithms", "Clean Code"]
    }
  ];
  
  return (
    <section id="experience" className="w-full py-28 bg-[#0a1b1b] border-t border-white/5 px-6 lg:px-16">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center lg:text-left">
          <span className="text-xs font-bold tracking-widest text-[#5eead4] uppercase block mb-3">
            The Hybrid Track Record
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5eead4]">Experience</span>
          </h2>
        </div>

        {/* Industrial Section Tracks */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-white/40 uppercase tracking-widest mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-white/20"></span> Industrial Operations & Analytical Chemistry
          </h3>
          
          {/* Row 1: Biscept & Poly sitting side-by-side in full half-width splits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {topIndustrialExp.map((exp, idx) => (
              <div 
                key={idx} 
                className="bg-[#071313] border border-white/5 hover:border-[#5eead4]/20 rounded-xl p-8 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#112d2d] text-[#5eead4]">
                      {exp.type}
                    </span>
                    <span className="text-xs text-white/40 font-medium">{exp.period}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#5eead4] transition-colors duration-200">
                    {exp.role}
                  </h4>
                  <h5 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6 mt-1">{exp.company}</h5>
                  
                  <ul className="space-y-3.5">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="text-xs text-white/70 leading-relaxed flex items-start gap-2.5">
                        <span className="text-[#5eead4] mt-1.5 block w-1.5 h-1.5 rounded-full shrink-0 bg-[#5eead4]"></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 mt-8 border-t border-white/5">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/[0.02] text-white/60 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

                    {/* Row 2: Overhauled Creative Jenga Operational Showcase (Expanded Portrait Frame) */}
          <div className="bg-[#071313] border border-white/5 hover:border-[#5eead4]/20 rounded-xl p-8 sm:p-10 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group shadow-2xl">
            
            {/* Expanded 5-Columns Field Asset Frame */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
              <div className="relative w-full max-w-[340px] rounded-xl border border-white/10 p-2 bg-[#112d2d]/20 backdrop-blur-sm shadow-xl overflow-hidden">
                <div className="rounded-lg overflow-hidden bg-[#0a1f1f] aspect-[3/4]">
                  <img 
                    src={constructionPic} 
                    alt="Victor Ogero - Creative Jenga On-Site Operations" 
                    className="block w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#5eead4]/30 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#5eead4]/30 pointer-events-none" />
              </div>
              <p className="text-[11px] font-bold tracking-widest uppercase text-white/40 text-center mt-4 leading-relaxed max-w-[300px]">
                On-Site Foundation Layout & Survey Execution <br />
                <span className="text-[#5eead4]/40 font-semibold">@ Creative Jenga</span>
              </p>
            </div>

            {/* Shifted 7-Columns Narrative Profile Tracks */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#112d2d] text-[#5eead4]">
                    {jengaExp.type}
                  </span>
                  <span className="text-xs text-white/40 font-medium">{jengaExp.period}</span>
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-[#5eead4] transition-colors duration-200">
                  {jengaExp.role}
                </h4>
                <h5 className="text-xs font-bold text-white/50 uppercase tracking-widest mt-1 mb-6">{jengaExp.company}</h5>
                
                <ul className="space-y-4">
                  {jengaExp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-sm sm:text-base text-white/70 leading-relaxed flex items-start gap-3">
                      <span className="text-[#5eead4] mt-2 block w-1.5 h-1.5 rounded-full shrink-0 bg-[#5eead4]"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 mt-8 border-t border-white/5">
                {jengaExp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded bg-[#112d2d]/30 text-[#5eead4] border border-[#5eead4]/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Software Engineering Core Layer (Row 3) */}
        <div>
          <h3 className="text-lg font-bold text-white/40 uppercase tracking-widest mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-white/20"></span> Software Engineering Core
          </h3>
          <div className="w-full">
            {softwareExp.map((exp, idx) => (
              <div key={idx} className="bg-[#071313] border border-white/5 hover:border-[#5eead4]/20 rounded-xl p-8 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group shadow-xl">
                <div className="lg:col-span-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#112d2d] text-[#5eead4] inline-block mb-3">
                    {exp.type}
                  </span>
                  <h4 className="text-2xl font-bold text-white group-hover:text-[#5eead4] transition-colors duration-200">
                    {exp.role}
                  </h4>
                  <h5 className="text-xs font-bold text-white/50 uppercase tracking-widest mt-1 mb-4">{exp.company}</h5>
                  <p className="text-xs text-[#5eead4]/70 font-semibold tracking-wide">{exp.period}</p>
                </div>
                
                <div className="lg:col-span-8 flex flex-col justify-between h-full">
                  <ul className="space-y-4">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="text-sm text-white/70 leading-relaxed flex items-start gap-3">
                        <span className="text-[#5eead4] mt-2 block w-1.5 h-1.5 rounded-full shrink-0 bg-[#5eead4]"></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-white/5">
                    {exp.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded bg-[#112d2d]/30 text-[#5eead4] border border-[#5eead4]/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
