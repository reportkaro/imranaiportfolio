import { Suspense } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Suspense for better loading */}
      <Suspense fallback={<div className="h-screen" />}>
        <Hero />
      </Suspense>
      
      {/* Main Content Sections */}
      <Suspense fallback={<div className="h-96" />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<div className="h-96" />}>
        <Process />
      </Suspense>
      
      <Suspense fallback={<div className="h-96" />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<div className="h-96" />}>
        <Contact />
      </Suspense>
    </main>
  );
}
