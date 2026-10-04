import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-28 bg-[#071313] border-t border-white/5 px-6 lg:px-16">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Core Layout Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Panel: Narrative Call to Action */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest text-[#5eead4] uppercase block mb-3">
              Secure Talent Gateway
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5eead4]">Connection</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">
              Currently open to prospective operations management, quality control, or full-stack software deployment opportunities. Let’s collaborate to optimize your system architectures.
            </p>

            {/* Direct Communication Channels Layout Array */}
            <div className="space-y-4">
              {/* Email Track */}
              <a 
                href="mailto:ogerovictor81@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0a1b1b] border border-white/5 hover:border-[#5eead4]/30 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-lg bg-[#071313] text-[#5eead4] group-hover:bg-[#5eead4] group-hover:text-[#071313] transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block">Email Routing Inbox</span>
                  <span className="text-sm font-semibold text-white/90 group-hover:text-[#5eead4] transition-colors">ogerovictor81@gmail.com</span>
                </div>
              </a>

              {/* Secure Phone Line Track */}
              <a 
                href="tel:+254101665969"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0a1b1b] border border-white/5 hover:border-[#5eead4]/30 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-lg bg-[#071313] text-[#5eead4] group-hover:bg-[#5eead4] group-hover:text-[#071313] transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.806-5.122-4.104-6.926-6.926l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block">Secure Mobile Network Line</span>
                  <span className="text-sm font-semibold text-white/90 group-hover:text-[#5eead4] transition-colors">+254 101 665 969</span>
                </div>
              </a>

           {/* LinkedIn Interactive Routing Track */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0a1b1b] border border-white/5 hover:border-[#5eead4]/30 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-lg bg-[#071313] text-[#5eead4] group-hover:bg-[#5eead4] group-hover:text-[#071313] transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.015-.51.09-.69.2-.5.64-1 1.39-1 1 0 1.38.76 1.38 1.87v4.49h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.1h-3v8.4h3z"/></svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block">Corporate Network Node</span>
                  <span className="text-sm font-semibold text-white/90 group-hover:text-[#5eead4] transition-colors">linkedin.com/in/victor-ogero-8594611a4</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Panel: Clean, High-End Contextual Info Card Grid Layout */}
          <div className="lg:col-span-7 bg-[#0a1b1b] border border-white/5 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-36 h-36 bg-[#5eead4]/5 rounded-full blur-3xl group-hover:bg-[#5eead4]/10 transition-all duration-500" />
            
            <h3 className="text-xl font-bold text-white mb-2">Systems Operational Hub</h3>
            <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-8">Kisumu Central, Kisumu, Kenya</p>
            
            <div className="space-y-6 text-sm text-white/70 leading-relaxed">
              <p>
                Whether you need a meticulous analyst to audit product safety parameters, an experienced plant coordinator to structure factory resource channels, or a backend software architect to automate database tracking records—I have the hybrid tools necessary to deliver exceptional results.
              </p>
              <p className="border-t border-white/5 pt-6 text-xs text-white/40">
                Designed and custom-coded from scratch using modular React components and Tailwind CSS v4 architecture compilation engines.
              </p>
            </div>
          </div>

        </div>

        {/* Global Footer Sign-off Track */}
        <div className="mt-28 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium">
          <p>© 2026 Victor Ogero. All rights architecture reserved.</p>
          <p className="tracking-wide">System Status: <span className="text-[#5eead4] animate-pulse font-bold">● ONLINE</span></p>
        </div>

      </div>
    </section>
  );
}
