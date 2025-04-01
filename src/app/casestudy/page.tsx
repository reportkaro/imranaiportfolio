'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyHeader from '@/components/case-studies/CaseStudyHeader';
import CaseStudyNav from '@/components/case-studies/CaseStudyNav';
import CaseStudyFooter from '@/components/case-studies/CaseStudyFooter';

export default function CaseStudy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50/30 to-gray-100">
      {/* Top Navigation */}
      <div className="bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <CaseStudyNav />
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero Section with enhanced styling */}
        <section className="mb-20 relative mt-8">
          {/* Decorative element */}
          <div className="absolute -top-10 -left-20 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20 z-0"></div>
          
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <CaseStudyHeader level="h1">
              LessonLoom: Automated Lesson Generation Platform
            </CaseStudyHeader>
            
            <div className="prose prose-lg max-w-none mb-10 bg-gradient-to-r from-white to-indigo-50 p-8 rounded-lg shadow-md border-l-4 border-indigo-500">
              <p className="m-0">
                As a product designer for LessonLoom, I led the design process for an innovative platform that automates the creation of educational materials using AI and templating systems. This case study walks through how our design team approached this complex challenge – from understanding user needs and pain points to crafting an intuitive interface that empowers educators to create high-quality content at scale.
              </p>
            </div>
          </motion.div>
        </section>
        
        {/* Footer */}
        <CaseStudyFooter />
    </div>
    </main>
  );
}