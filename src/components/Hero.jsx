import React, { useState, useEffect } from 'react';
import profilePic from '../assets/profile.jpg';

export default function Hero() {
  const roles = [
    "Analytical Chemist.",
    "QC & Production Manager.",
    "Systems & Software Architect."
  ];
  
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIdx];
    
    // Adjust typing speeds: typing is fast, deleting is extra snappy
    let typingSpeed = isDeleting ? 30 : 60;

    // Handle full phrase pause state or empty deletion loop trigger
    if (!isDeleting && displayedText === fullText) {
      typingSpeed = 2200; // Hold the full role title visible for 2.2 seconds
    } else if (isDeleting && displayedText === "") {
      typingSpeed = 300; // Snappy 0.3 second pause when empty before typing next role
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText !== fullText) {
        // Typing Phase: Add the next letter to the string
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText === fullText) {
        // Full text reached: Transition into erasure state track
        setIsDeleting(true);
      } else if (isDeleting && displayedText !== "") {
        // Deleting Phase: Peel away the last character
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      } else if (isDeleting && displayedText === "") {
        // Empty state reached: Cycle to the next structural role index array pointer
        setIsDeleting(false);
        setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIdx, roles]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-[#071313] overflow-hidden px-6 lg:px-16 pt-20">
      {/* Background Layer: Deep Atmospheric Chemical Matrix Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-luminosity bg-[radial-gradient(#5eead4_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        style={{ backgroundImage: `url('https://unsplash.com')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#071313]/40 via-[#071313]/90 to-[#071313]" />

      {/* Primary Structural Core Flex Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Narrative Frame */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <span className="text-xs font-bold tracking-widest text-[#5eead4] uppercase mb-3">
            SYSTEMS INTELLIGENCE & STANDARDS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-none">
            Hello, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#5eead4]">
              Victor Ogero
            </span>
          </h1>
          
          {/* Refactored Character-by-Character Typewriter Interface Box */}
          <div className="h-12 sm:h-16 flex items-center mb-8 text-xl sm:text-2xl lg:text-3xl font-medium text-white/90">
            <span>A transitioning&nbsp;</span>
            <span className="text-[#5eead4] font-semibold tracking-wide border-r-2 border-[#5eead4]/60 pr-1 animate-pulse">
              {displayedText}
            </span>
          </div>

          {/* Curated Benjamin Franklin Quality Manifesto Callout Box */}
          <div className="border-l-2 border-[#5eead4]/30 pl-6 my-4 max-w-xl bg-white/[0.02] py-4 pr-4 rounded-r-md backdrop-blur-sm">
            <p className="text-sm sm:text-base italic text-white/70 leading-relaxed">
              "The bitterness of poor quality remains long after the sweetness of low price or fast turnaround is forgotten."
            </p>
            <span className="block text-xs font-bold text-[#5eead4] uppercase tracking-widest mt-2">
              — Benjamin Franklin <span className="text-white/30">| Operational Manifesto</span>
            </span>
          </div>

          {/* Social Gateway Triggers */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a 
              href="#contact"
              className="px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider bg-[#5eead4] text-[#071313] hover:bg-white transition-all duration-300 shadow-lg shadow-[#5eead4]/10"
            >
              Initiate Project
            </a>
            <div className="flex items-center gap-4 ml-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#5eead4] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.015-.51.09-.69.2-.5.64-1 1.39-1 1 0 1.38.76 1.38 1.87v4.49h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.1h-3v8.4h3z"/></svg>
              </a>
              <a href="mailto:ogerovictor81@gmail.com" className="text-white/60 hover:text-[#5eead4] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.015-.51.09-.69.2-.5.64-1 1.39-1 1 0 1.38.76 1.38 1.87v4.49h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.1h-3v8.4h3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Graphical Subject Frame (Asymmetrical Anchor) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-[#5eead4]/20 p-2 bg-[#112d2d]/30 backdrop-blur-md shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0a1f1f] flex items-center justify-center text-white/20">
              <img 
                src={profilePic} 
                alt="Victor Ogero" 
                className="w-full h-full object-cover contrast-125 hover:contrast-100 transition-all duration-500"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-[#5eead4]/40" />
          <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-[#5eead4]/40" />
        </div>

      </div>
    </section>
  );
}
