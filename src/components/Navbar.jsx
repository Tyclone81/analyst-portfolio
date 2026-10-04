import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  // Smooth scroll handler for that premium slo-mo movement
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#071313]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Architecture Signpost */}
        <div className="text-xl font-bold tracking-tight text-white">
          Victor<span className="text-[#5eead4]">.</span>Ogero
        </div>

        {/* Desktop Interface Tracks */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md text-xs font-semibold bg-[#112d2d] text-[#5eead4] border border-[#5eead4]/20 hover:bg-[#5eead4] hover:text-[#071313] transition-all duration-300 shadow-sm"
          >
            VIEW RESUME
          </a>
        </div>

        {/* Mobile Expansion Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Array */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#071313] border-b border-white/5 px-6 py-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="text-base font-medium text-white/80 hover:text-white py-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full text-center px-5 py-3 rounded-md text-sm font-semibold bg-[#112d2d] text-[#5eead4] border border-[#5eead4]/20"
          >
            VIEW RESUME
          </a>
        </div>
      )}
    </nav>
  );
}
