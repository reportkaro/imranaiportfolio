'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from '@/components/Icons';
import { usePathname } from 'next/navigation';

export default function CaseStudyFooter() {
  const pathname = usePathname();
  
  // Determine which case study is being viewed
  const isAIPCaseStudy = pathname?.includes('/aip');
  
  // Set the appropriate title and tagline based on the current page
  const title = isAIPCaseStudy 
    ? "Automated Instructional Planning" 
    : "LessonLoom: Automated Lesson Generation Platform";
    
  const tagline = isAIPCaseStudy
    ? "Transforming Educational Scheduling"
    : "AI-powered educational content creation";

  return (
    <motion.div
      className="mt-24 py-10 border-t border-gray-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted text-sm">{tagline}</p>
        </div>
        
        <div className="flex gap-4">
          <Link 
            href="/" 
            className="px-6 py-3 bg-white hover:bg-gray-50 text-accent border border-gray-200 rounded-lg shadow-sm flex items-center transition-all duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          
          <Link 
            href="/#work" 
            className="px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg shadow-sm flex items-center transition-all duration-200"
          >
            <span className="font-medium">View More Projects</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 