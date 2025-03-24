import React from 'react';
import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';
import Process from '../components/sections/Process';
import Projects from '../components/sections/Projects';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Process />
      <About />
      <Contact />
    </main>
  );
}
