'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import Link from 'next/link';
import { ArrowLeft } from '@/components/Icons';

export default function LessonLoomContent() {
  return (
    <main className="pt-36 pb-16">
      <div className="container mx-auto px-6">
        <nav className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to Portfolio</span>
          </Link>
        </nav>
        
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="LessonLoom: Automated Lesson Generation Platform"
            subtitle="How we redesigned educational content creation with AI"
          />
          
          <div className="mt-16 prose prose-lg max-w-none">
            <p className="lead text-xl">
              As a Product Designer at LessonLoom, I led a design process that revolutionized how educational materials are created using AI and templating systems. The result was an intuitive interface that empowers educators to create high-quality content at scale.
            </p>
            
            {/* All instance of CourseForge have been replaced with LessonLoom */}
            
          </div>
        </div>
      </div>
    </main>
  );
} 