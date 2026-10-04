import React from 'react';
import chemistryPic from '../assets/chemistry.jpg'; // 1. Import local ass

export default function About() {
  return (
    <section id="about" className="w-full py-28 bg-[#071313] border-t border-white/5 px-6 lg:px-16">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Layout Grid: 12-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          
           {/* Left Column: Adaptive Container - Zero Cropping, Zero Gaps */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center items-center w-full">
            {/* The outer box now tightly hugs the inner image size with w-fit */}
            <div className="relative w-fit max-w-sm rounded-2xl border border-white/10 p-2 bg-[#112d2d]/20 backdrop-blur-sm shadow-2xl group overflow-hidden">
              <div className="rounded-xl overflow-hidden bg-[#0a1f1f]">
                {/* block h-auto max-h-[550px] forces the full image layout to render with zero cropping */}
                <img 
                  src={chemistryPic} 
                  alt="Victor Ogero in Analytical Laboratory" 
                  className="block w-full h-auto max-h-[550px] object-contain transition-transform duration-750 ease-out group-hover:scale-102"
                />
              </div>
              {/* Dynamic Technical Geometric Framing Overlays */}
              <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-[#5eead4]/30 pointer-events-none" />
              <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-[#5eead4]/30 pointer-events-none" />
            </div>
          </div>


          {/* Right Column: The Core Narrative Architecture */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <span className="text-xs font-bold tracking-widest text-[#5eead4] uppercase block mb-3">
              The Professional Pivot
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Bridging Physical Science <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5eead4]">& Computational Logic</span>
            </h2>
            
            <div className="space-y-5 text-sm sm:text-base text-white/70 leading-relaxed">
              <p>
                I hold a Bachelor of Science in <span className="text-white font-semibold">Analytical Chemistry with Management</span>. My background is rooted heavily in high-precision laboratory testing, strict compliance standards, and managing cross-functional production workforces. Having orchestrated daily workflows for a 10-person technical team on manufacturing floors, I understand the challenges of operational scale and data traceability.
              </p>
              
              <p className="border-l-2 border-[#5eead4]/30 pl-4 italic bg-white/[0.01] py-2 rounded-r-md">
                "Curiosity drove me behind the screen. As an analyst running complex equipment, I wanted to know exactly how the systems we depend on actually function under the hood."
              </p>

              <p>
                This conviction led me to immerse myself in an intensive, project-driven software engineering ecosystem at <span className="text-[#5eead4] font-semibold">Zone01 Kisumu</span>. By combining structural chemistry methodologies with modern backend web architecture (Golang, Docker, REST APIs), I have developed a highly strategic, dual-engine mindset.
              </p>
              
              <p>
                I do not just perform raw physical chemical analysis, and I do not just write standalone blocks of code. I design the software automation pipelines, system configurations, and data architectures that allow modern industrial operations to operate with zero friction.
              </p>
            </div>

            {/* Quick Micro-Highlight Matrix Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
              <div>
                <span className="text-xs text-white/40 block font-semibold uppercase tracking-wider">Academic Foundation</span>
                <span className="text-sm font-bold text-white mt-1 block">BSc. Analytical Chemistry</span>
              </div>
              <div>
                <span className="text-xs text-white/40 block font-semibold uppercase tracking-wider">Engineering Forge</span>
                <span className="text-sm font-bold text-[#5eead4] mt-1 block">Zone01 Kisumu (01-Edu)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
