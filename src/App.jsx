import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // 1. Import the newly forged about section
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#071313] text-white antialiased selection:bg-[#5eead4]/30 select-none">
      <Navbar />
      
      <main>
        <Hero />
        <About /> {/* 2. Injected right between the hero presentation and experience metrics */}
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
