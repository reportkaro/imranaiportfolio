'use client';

import { motion } from 'framer-motion';
import CaseStudyHeader from '@/components/CaseStudyHeader';
import CaseStudyNav from '@/components/case-studies/CaseStudyNav';
import CaseStudyFooter from '@/components/case-studies/CaseStudyFooter';
import GenerationWorkflow from '@/components/GenerationWorkflow';

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
            
            <motion.div 
              className="prose prose-lg max-w-none mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
             
            </motion.div>
            
            <div className="prose prose-lg max-w-none mb-10 bg-gradient-to-r from-white to-indigo-50 p-8 rounded-lg shadow-md border-l-4 border-indigo-500">
              <p className="m-0">
                As a product designer for LessonLoom, I led the design process for an innovative platform that automates the creation of educational materials using AI and templating systems. This case study walks through how our design team approached this complex challenge – from understanding user needs and pain points to crafting an intuitive interface that empowers educators to create high-quality content at scale.
              </p>
            </div>
          </motion.div>
        </section>
        
        {/* Project Overview with styled cards */}
        <section className="mb-20">
          <CaseStudyHeader>
            Project Overview
          </CaseStudyHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-purple-50 p-6 rounded-lg shadow-md border-t-4 border-purple-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Role</h3>
              <p>Product Designer</p>
            </motion.div>
            
            <motion.div 
              className="bg-indigo-50 p-6 rounded-lg shadow-md border-t-4 border-indigo-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">Organization</h3>
              <p>NewGlobe</p>
            </motion.div>
            
            <motion.div 
              className="bg-pink-50 p-6 rounded-lg shadow-md border-t-4 border-pink-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-700">Technologies</h3>
              <p>Vue.js, .NET Core, Python, Azure OpenAI, AWS S3</p>
            </motion.div>
          </div>
        </section>
        
        {/* Challenge section with visual enhancements */}
        <section className="mb-20 relative">
          {/* Decorative element */}
          <div className="absolute -right-20 top-20 w-72 h-72 bg-indigo-100 rounded-full filter blur-3xl opacity-20 z-0"></div>
          
          <div className="relative z-10">
            <CaseStudyHeader>
              The Challenge
            </CaseStudyHeader>
            
            <div className="prose prose-lg max-w-none p-6 bg-gradient-to-br from-white to-purple-50 rounded-lg border border-gray-100">
              <p>
                NewGlobe, a global education organization, faced significant obstacles when creating teaching materials across multiple countries:
              </p>
              
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <span className="inline-flex justify-center items-center w-6 h-6 mr-2 mt-1 rounded-full bg-purple-100 text-purple-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span><strong className="text-purple-700">Time-intensive process</strong>: Content teams spent months developing customized teacher guides</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex justify-center items-center w-6 h-6 mr-2 mt-1 rounded-full bg-indigo-100 text-indigo-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span><strong className="text-indigo-700">Resource constraints</strong>: Skilled curriculum designers were pulled into repetitive formatting tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex justify-center items-center w-6 h-6 mr-2 mt-1 rounded-full bg-pink-100 text-pink-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span><strong className="text-pink-700">Quality consistency</strong>: Materials varied based on individual writers' interpretations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex justify-center items-center w-6 h-6 mr-2 mt-1 rounded-full bg-purple-100 text-purple-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span><strong className="text-purple-700">Localization bottlenecks</strong>: Adapting content for different regions created expansion delays</span>
                </li>
              </ul>
              
              <p className="mt-6 bg-white p-4 rounded border-l-4 border-indigo-500 shadow-sm">
                Content creators needed a solution that would free them from tedious formatting work while maintaining their pedagogical expertise in the process.
              </p>
            </div>
          </div>
        </section>
        
        {/* Design Process */}
        <section className="mb-28">
          <CaseStudyHeader>
            Design Process
          </CaseStudyHeader>
          
          <div className="space-y-12 max-w-none">
            <div className="bg-gradient-to-r from-white to-purple-50/70 p-8 rounded-lg shadow-md">
              <CaseStudyHeader level="h3" showGradientLine={false}>
                Research & Discovery
              </CaseStudyHeader>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  I began by deeply understanding the existing content creation workflow through:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                      <span className="inline-flex justify-center items-center w-8 h-8 mr-3 rounded-full bg-purple-100 text-purple-700 text-lg font-bold">1</span>
                      User Interviews
                    </h4>
                    <ul className="space-y-2 pl-0 list-none">
                      <li className="flex items-baseline">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Shadowed 8 instructional designers</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Conducted interviews with 12 curriculum specialists</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Ran collaborative workshops with translation teams</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center">
                      <span className="inline-flex justify-center items-center w-8 h-8 mr-3 rounded-full bg-indigo-100 text-indigo-700 text-lg font-bold">2</span>
                      Content Analysis
                    </h4>
                    <ul className="space-y-2 pl-0 list-none">
                      <li className="flex items-baseline">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Analyzed 150+ teacher guides</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Mapped recurring patterns</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Created information architecture diagrams</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-4 text-pink-700 flex items-center">
                      <span className="inline-flex justify-center items-center w-8 h-8 mr-3 rounded-full bg-pink-100 text-pink-700 text-lg font-bold">3</span>
                      Pain Point Analysis
                    </h4>
                    <ul className="space-y-2 pl-0 list-none">
                      <li className="flex items-baseline">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Created journey maps</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Quantified time spent on tasks</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Developed empathy maps</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <CaseStudyHeader level="h3" showGradientLine={false}>
                Key Insights
              </CaseStudyHeader>
              
              <div className="bg-gradient-to-r from-white to-indigo-50/70 p-4 md:p-6 rounded-lg shadow-sm">
                <p className="text-base md:text-lg text-gray-700 mb-4">
                    Our research revealed critical insights that shaped our design approach:
                  </p>
                  
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg border border-purple-100 overflow-hidden shadow-sm">
                    <div className="bg-purple-50 px-3 py-2 border-b border-purple-100 flex items-center">
                      <span className="flex justify-center items-center w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-bold text-sm">1</span>
                      <h4 className="ml-2 text-sm font-semibold text-purple-700">Pedagogical Focus</h4>
                        </div>
                    <div className="p-3">
                      <p className="text-sm text-gray-600 mb-2">Creators valued pedagogical decisions, not formatting</p>
                      <p className="text-xs text-gray-500 italic border-l-2 border-purple-200 pl-2">"I spend 70% of my time making things look right rather than thinking about how students will learn."</p>
                        </div>
                        </div>
                  
                  <div className="bg-white rounded-lg border border-indigo-100 overflow-hidden shadow-sm">
                    <div className="bg-indigo-50 px-3 py-2 border-b border-indigo-100 flex items-center">
                      <span className="flex justify-center items-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">2</span>
                      <h4 className="ml-2 text-sm font-semibold text-indigo-700">Mental Templates</h4>
                        </div>
                    <div className="p-3">
                      <p className="text-sm text-gray-600 mb-2">Templates were mental models, not just documents</p>
                      <p className="text-xs text-gray-500 italic border-l-2 border-indigo-200 pl-2">"We already have mental templates we follow, but they're not captured anywhere."</p>
                        </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-pink-100 overflow-hidden shadow-sm">
                    <div className="bg-pink-50 px-3 py-2 border-b border-pink-100 flex items-center">
                      <span className="flex justify-center items-center w-6 h-6 rounded-full bg-pink-100 text-pink-700 font-bold text-sm">3</span>
                      <h4 className="ml-2 text-sm font-semibold text-pink-700">Subject Variations</h4>
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-gray-600 mb-2">Content needs varied by subject</p>
                      <p className="text-xs text-gray-500 italic border-l-2 border-pink-200 pl-2">"Math lessons follow predictable patterns, while reading comprehension needs more flexibility."</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-purple-100 overflow-hidden shadow-sm">
                    <div className="bg-purple-50 px-3 py-2 border-b border-purple-100 flex items-center">
                      <span className="flex justify-center items-center w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-bold text-sm">4</span>
                      <h4 className="ml-2 text-sm font-semibold text-purple-700">Visual Clarity</h4>
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-gray-600 mb-2">Visual clarity was essential</p>
                      <p className="text-xs text-gray-500 italic border-l-2 border-purple-200 pl-2">"I need to see exactly how the final lesson will appear to teachers."</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-indigo-100 overflow-hidden shadow-sm">
                    <div className="bg-indigo-50 px-3 py-2 border-b border-indigo-100 flex items-center">
                      <span className="flex justify-center items-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">5</span>
                      <h4 className="ml-2 text-sm font-semibold text-indigo-700">Trust in Automation</h4>
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-gray-600 mb-2">Trust in automation was fragile</p>
                      <p className="text-xs text-gray-500 italic border-l-2 border-indigo-200 pl-2">"I'd use automation if I could verify and adjust the output easily."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <CaseStudyHeader level="h3" showGradientLine={false}>
                Design Exploration
              </CaseStudyHeader>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  During the design process, I explored several conceptual approaches. Each approach represented a different philosophy about how to structure the generation system, balancing control, flexibility, and ease of use for curriculum specialists.
                </p>
                
                <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 mb-8">
                  <h4 className="text-lg font-medium text-indigo-800 mb-2">Design Exploration Methodology</h4>
                  <p className="text-gray-700 mb-3">
                    My exploration was guided by several key considerations identified during the research phase:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-flex justify-center items-center w-5 h-5 mr-2 mt-0.5 rounded-full bg-indigo-100 text-indigo-700 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span><strong className="text-indigo-700">Balance of control and automation</strong>: Finding the right mix of automated generation while preserving educator control over pedagogical content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex justify-center items-center w-5 h-5 mr-2 mt-0.5 rounded-full bg-indigo-100 text-indigo-700 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span><strong className="text-indigo-700">Scalability</strong>: Ensuring the system could accommodate growing content needs across multiple subjects and regions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex justify-center items-center w-5 h-5 mr-2 mt-0.5 rounded-full bg-indigo-100 text-indigo-700 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span><strong className="text-indigo-700">Familiar mental models</strong>: Using interfaces and workflows that matched how curriculum specialists already thought about content creation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex justify-center items-center w-5 h-5 mr-2 mt-0.5 rounded-full bg-indigo-100 text-indigo-700 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span><strong className="text-indigo-700">Transparency</strong>: Creating a system where users always understood the relationship between inputs and outputs</span>
                    </li>
                  </ul>
                </div>
                
                {/* Concept 1: Template-Driven Generation */}
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-gray-800">Concept 1: Template-Driven Generation</h4>
                  <p className="mb-4">
                    In this approach, I explored prioritizing template structure as the foundation of the system. The core idea was to create highly structured templates with specialized syntax that would serve as the "blueprint" for all generated content.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h5 className="font-medium text-indigo-700 mb-2">Key Characteristics</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Templates designed by instructional designers with embedded automation tags</li>
                        <li>Content parameters provided separately and mapped to template placeholders</li>
                        <li>Strong emphasis on consistent output format across all generated materials</li>
                        <li>Validation of inputs against template requirements</li>
                      </ul>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h5 className="font-medium text-indigo-700 mb-2">Strategic Rationale</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Ensures pedagogical best practices are encoded in templates</li>
                        <li>Provides predictable output structure for review and quality control</li>
                        <li>Allows content specialists to focus on subject matter rather than formatting</li>
                        <li>Creates organization-wide consistency in teaching materials</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="text-sm text-yellow-800 font-medium">Design Consideration</p>
                        <p className="text-sm text-yellow-700">User testing revealed template creation was challenging for many curriculum specialists. This approach would require specialized training or dedicated template designers.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="my-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm opacity-90">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1">
                      <div className="flex items-center flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-red-400 mr-1"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
                      </div>
                      <span className="text-sm text-gray-500 ml-1">Concept 1: Template-Driven Generation</span>
                    </div>
                    <div className="text-xs text-gray-500 px-2 flex-shrink-0">
                      Explored Concept
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-medium mb-3">Template-First Approach</h5>
                        <p className="text-sm text-gray-600 mb-4">
                          Design focused on creating flexible templates with specialized syntax that could be populated with various content.
                        </p>
                        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                          <li>Reusable formats across subjects</li>
                          <li>Predictable output structure</li>
                          <li>Higher initial setup time</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg bg-gray-50 p-4">
                        <div className="border-b border-gray-300 pb-2 mb-3">
                          <div className="font-medium">Lesson Template</div>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-white p-2 border border-gray-300 rounded">
                            <div className="text-sm font-medium">{"{title}"}</div>
                            <div className="text-xs text-gray-500">Grade {"{grade}"} • {"{subject}"}</div>
                          </div>
                          <div className="bg-white p-2 border border-gray-300 rounded">
                            <div className="text-xs font-medium">Learning Objective</div>
                            <div className="text-xs text-gray-600">{"{learning_objective}"}</div>
                          </div>
                          <div className="bg-white p-2 border border-gray-300 rounded">
                            <div className="text-xs font-medium">Materials</div>
                            <div className="text-xs text-gray-600">{"{materials_list}"}</div>
                          </div>
                          <div className="bg-white p-2 border border-gray-300 rounded">
                            <div className="text-xs font-medium">Instructions</div>
                            <div className="text-xs text-gray-600">{"{activity_instructions}"}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Concept 2: Content-First Approach */}
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-gray-800">Concept 2: Content-First Approach</h4>
                  <p className="mb-4">
                    For my second exploration, I inverted the paradigm to prioritize content organization over template structure. This approach treated content as the primary asset, with formatting applied later in the process.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h5 className="font-medium text-indigo-700 mb-2">Key Characteristics</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Content parameters organized in spreadsheets with standard columns</li>
                        <li>Format selection happens after content planning</li>
                        <li>Content can be filtered, sorted, and batch processed</li>
                        <li>Uses familiar spreadsheet interface for planning</li>
                      </ul>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h5 className="font-medium text-indigo-700 mb-2">Strategic Rationale</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Aligns with how curriculum specialists naturally organize content</li>
                        <li>Emphasizes pedagogical content over presentation format</li>
                        <li>Easier for teams to collaborate on content creation</li>
                        <li>Simplifies the process of creating multiple variations of similar lessons</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm text-blue-800 font-medium">User Insight</p>
                        <p className="text-sm text-blue-700">During testing, curriculum specialists responded positively to the spreadsheet approach, noting that it mirrored their existing content planning workflows. However, some expressed concern about the lack of preview capabilities during the planning phase.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="my-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm opacity-90">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1">
                      <div className="flex items-center flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-red-400 mr-1"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
                      </div>
                      <span className="text-sm text-gray-500 ml-1">Concept 2: Content-First Approach</span>
                    </div>
                    <div className="text-xs text-gray-500 px-2 flex-shrink-0">
                      Explored Concept
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-medium mb-3">Content-Driven Design</h5>
                        <p className="text-sm text-gray-600 mb-4">
                          Design focused on organizing content parameters in spreadsheets first, with formats applied later.
                        </p>
                        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                          <li>Content planning separated from formatting</li>
                          <li>More flexible content organization</li>
                          <li>Easier for curriculum specialists</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg bg-gray-50 p-4">
                        <div className="flex space-x-2 mb-4">
                          <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">Subject</div>
                          <div className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs font-medium">Grade</div>
                          <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-md text-xs font-medium">Topic</div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3">
                          <div className="text-sm mb-2">Content Parameters</div>
                          <div className="flex flex-wrap gap-2">
                            <div className="px-2 py-1 bg-gray-100 rounded text-xs">Duration: 45min</div>
                            <div className="px-2 py-1 bg-gray-100 rounded text-xs">Group size: 4</div>
                            <div className="px-2 py-1 bg-gray-100 rounded text-xs">Difficulty: Medium</div>
                            <div className="px-2 py-1 bg-gray-100 rounded text-xs">Standards: 3.NBT.2</div>
                          </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-3">
                          <div className="text-sm mb-2">Format Options</div>
                          <div className="flex space-x-2">
                            <div className="w-4 h-4 border border-gray-300 rounded-sm flex items-center justify-center bg-blue-500 text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-xs">Worksheet</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Concept 3: Hybrid Approach */}
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-gray-800">Concept 3: Hybrid Approach</h4>
                  <p className="mb-4">
                    After testing the previous concepts with users, I developed a hybrid approach that combined the strengths of both paradigms. This synthesis emerged from direct user feedback and represented a more balanced solution.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h5 className="font-medium text-indigo-700 mb-2">Key Characteristics</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Separate but interconnected content and template systems</li>
                        <li>Intelligent matching between content parameters and suitable templates</li>
                        <li>Live preview capability during content planning</li>
                        <li>Multi-stage workflow with validation at each step</li>
                      </ul>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h5 className="font-medium text-indigo-700 mb-2">Strategic Rationale</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Splits responsibilities between template designers and content creators</li>
                        <li>Balances standardization needs with content flexibility</li>
                        <li>Provides visibility into the generation process</li>
                        <li>Creates clear separation of concerns while maintaining integration</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm text-green-800 font-medium">Key Decision Point</p>
                        <p className="text-sm text-green-700">The hybrid approach was unanimously preferred in user testing. Curriculum specialists appreciated maintaining their content-focused workflow while instructional designers valued the template system's ability to enforce pedagogical best practices.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="my-8 border-2 border-purple-500 rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-white to-purple-50">
                  <div className="bg-purple-100 px-4 py-3 border-b border-purple-200 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1">
                      <div className="flex items-center flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-red-400 mr-1"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
                      </div>
                      <span className="text-sm text-gray-700 ml-1 font-medium">Concept 3: Hybrid Approach (Final Design)</span>
                    </div>
                    <div className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium flex-shrink-0">
                      Selected Approach ✓
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-medium mb-3">Template + Content Integration</h5>
                        <p className="text-sm text-gray-600 mb-4">
                          The final design combined template flexibility with content-driven planning.
                        </p>
                        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                          <li>Centralized content control</li>
                          <li>Modular template system</li>
                          <li>Simplified generation workflow</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg bg-gray-50 p-4">
                        <div className="flex justify-between items-center mb-4">
                          <div className="bg-white px-3 py-1 border border-gray-300 rounded text-xs">Content Spreadsheet</div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <div className="bg-white px-3 py-1 border border-gray-300 rounded text-xs">Template Library</div>
                        </div>
                        <div className="bg-white border border-gray-300 rounded-lg p-3 mb-3">
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-xs font-medium">Matching System</div>
                            <div className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">Active</div>
                          </div>
                          <div className="border-t border-dashed border-gray-300 pt-2">
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                                <span className="text-xs">Content ID: L001</span>
                              </div>
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                                <span className="text-xs">Template: Math-Basic</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border border-gray-300 rounded-lg p-3">
                          <div className="text-xs mb-2">Preview Output</div>
                          <div className="border border-dashed border-gray-300 p-2 rounded bg-gray-50">
                            <div className="text-xs text-center text-gray-500">Generated Lesson</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Design Solution */}
        <section className="mb-28">
          <CaseStudyHeader>
            Design Solution
          </CaseStudyHeader>
          
          <div className="space-y-12 max-w-none">
            <div className="bg-gradient-to-r from-white to-purple-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-5 text-gray-800">Information Architecture</h3>
              
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  I designed a system with three main components:
                </p>
                
                <ul className="space-y-2 pl-0 list-none">
                  <li className="mb-3">
                    <strong className="text-purple-700 font-semibold">Content Spreadsheet</strong>: Centralized data structure where users define lesson parameters
                  </li>
                  <li className="mb-3">
                    <strong className="text-purple-700 font-semibold">Template Library</strong>: Repository of lesson formats with specialized syntax for automation
                  </li>
                  <li className="mb-3">
                    <strong className="text-purple-700 font-semibold">Generation Interface</strong>: Process management and review interface
                  </li>
                </ul>
                
                <p className="mt-4 mb-6">
                  This architecture separated content planning from content generation, allowing specialists to focus on curriculum decisions while automation handled implementation.
                </p>

                {/* Information Architecture Flow Diagram */}
                <div className="my-8 border border-gray-200 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                    <span className="text-sm text-gray-500 ml-2">System Workflow Architecture</span>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="flex flex-col items-center">
                      {/* Flow diagram - responsive and simple */}
                      <div className="w-full max-w-4xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 mb-12 relative">
                          {/* Content Spreadsheet */}
                          <div className="flex flex-col items-center text-center z-10">
                            <div className="w-20 h-20 rounded-lg bg-purple-100 border-2 border-purple-300 flex items-center justify-center mb-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <h4 className="font-medium text-purple-700">Content Spreadsheet</h4>
                            <p className="text-sm text-gray-600 mt-1 px-2">Curriculum specialists define lesson parameters</p>
                          </div>
                          
                          {/* Template Library */}
                          <div className="flex flex-col items-center text-center z-10">
                            <div className="w-20 h-20 rounded-lg bg-indigo-100 border-2 border-indigo-300 flex items-center justify-center mb-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                              </svg>
                            </div>
                            <h4 className="font-medium text-indigo-700">Template Library</h4>
                            <p className="text-sm text-gray-600 mt-1 px-2">Instructional designers create templates with syntax</p>
                          </div>
                          
                          {/* Generation Interface */}
                          <div className="flex flex-col items-center text-center z-10">
                            <div className="w-20 h-20 rounded-lg bg-pink-100 border-2 border-pink-300 flex items-center justify-center mb-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <h4 className="font-medium text-pink-700">Generation Interface</h4>
                            <p className="text-sm text-gray-600 mt-1 px-2">Users manage process and review generated lessons</p>
                          </div>
                          
                          {/* Connection arrows - only visible on larger screens */}
                          <div className="absolute top-10 left-0 right-0 h-0.5 bg-gray-200 hidden md:block"></div>
                          <div className="absolute top-10 left-1/3 w-0.5 h-4 bg-gray-200 hidden md:block"></div>
                          <div className="absolute top-10 right-1/3 w-0.5 h-4 bg-gray-200 hidden md:block"></div>
                        </div>
                        
                        {/* Flow diagram - Second row with process arrow */}
                        <div className="flex flex-col items-center mb-8">
                          <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                        
                        {/* Flow diagram - Final output */}
                        <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50 max-w-md mx-auto">
                          <div className="flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                            </svg>
                            <div>
                              <h4 className="font-medium text-green-700 text-lg">Generated Lesson</h4>
                              <p className="text-sm text-gray-600">Complete, formatted teaching materials</p>
                            </div>
                          </div>
                          
                          <div className="text-xs text-gray-500 border-t border-green-200 pt-2 mt-2">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex items-center">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-1"></span>
                                <span>Content data merged</span>
                              </div>
                              <div className="flex items-center">
                                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-1"></span>
                                <span>Format applied</span>
                              </div>
                              <div className="flex items-center">
                                <span className="w-2 h-2 bg-pink-500 rounded-full mr-1"></span>
                                <span>User reviewed</span>
                              </div>
                              <div className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                                <span>Ready for use</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Flow description */}
                      <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-600 max-w-2xl text-center">
                        <p>This workflow combines curriculum content from the spreadsheet with formatting from templates. The generation interface orchestrates the process, allowing users to review and finalize lessons before they're delivered to teachers.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Spreadsheet Wireframe */}
                <div className="my-8 border border-gray-200 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                    <span className="text-sm text-gray-500 ml-2">Content Spreadsheet</span>
                  </div>
                  <div className="p-0 bg-white overflow-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lesson ID</th>
                          <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                          <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                          <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                          <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                          <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Materials</th>
                          <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border text-sm">L001</td>
                          <td className="px-4 py-2 border text-sm">Grade 3</td>
                          <td className="px-4 py-2 border text-sm">Math</td>
                          <td className="px-4 py-2 border text-sm">Fractions</td>
                          <td className="px-4 py-2 border text-sm">45 min</td>
                          <td className="px-4 py-2 border text-sm">Paper strips, scissors</td>
                          <td className="px-4 py-2 border text-sm">Group work</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-4 py-2 border text-sm">L002</td>
                          <td className="px-4 py-2 border text-sm">Grade 3</td>
                          <td className="px-4 py-2 border text-sm">Math</td>
                          <td className="px-4 py-2 border text-sm">Addition</td>
                          <td className="px-4 py-2 border text-sm">30 min</td>
                          <td className="px-4 py-2 border text-sm">Counters, worksheets</td>
                          <td className="px-4 py-2 border text-sm">Individual practice</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border text-sm">L003</td>
                          <td className="px-4 py-2 border text-sm">Grade 3</td>
                          <td className="px-4 py-2 border text-sm">Science</td>
                          <td className="px-4 py-2 border text-sm">Plants</td>
                          <td className="px-4 py-2 border text-sm">60 min</td>
                          <td className="px-4 py-2 border text-sm">Seeds, cups, soil</td>
                          <td className="px-4 py-2 border text-sm">Experiment</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Template Library Wireframe */}
                <div className="my-8 border border-gray-200 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                    <span className="text-sm text-gray-500 ml-2">Template Library</span>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-purple-50 cursor-pointer transition">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium">Math Lesson - Basic</span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">Last edited: 2 days ago</div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-purple-50 cursor-pointer transition">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium">Reading - Comprehension</span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">Last edited: 5 days ago</div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-purple-50 cursor-pointer transition">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-pink-100 text-pink-700 rounded-lg flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium">Science - Experiment</span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">Last edited: 1 week ago</div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-purple-50 cursor-pointer transition">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-green-100 text-green-700 rounded-lg flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium">English - Creative Writing</span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">Last edited: 2 weeks ago</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Generation Interface Wireframe */}
                <div className="my-8 border border-gray-200 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                    <span className="text-sm text-gray-500 ml-2">Generation Interface</span>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-2 border border-gray-200 rounded-lg p-4">
                        <div className="text-sm font-medium mb-3">Generation Queue</div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between bg-green-50 p-2 rounded">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                              <span>L001 - Grade 3 Math: Fractions</span>
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
                          </div>
                          <div className="flex items-center justify-between bg-blue-50 p-2 rounded">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                              <span>L002 - Grade 3 Math: Addition</span>
                            </div>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">In Progress</span>
                          </div>
                          <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                              <span>L003 - Grade 3 Science: Plants</span>
                            </div>
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Queued</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="text-sm font-medium mb-3">Statistics</div>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs">Progress</span>
                              <span className="text-xs font-medium">33%</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-full">
                              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '33%' }}></div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-purple-50 p-2 rounded text-center">
                              <div className="text-lg font-bold text-purple-700">1/3</div>
                              <div className="text-xs text-gray-500">Completed</div>
                            </div>
                            <div className="bg-indigo-50 p-2 rounded text-center">
                              <div className="text-lg font-bold text-indigo-700">~15m</div>
                              <div className="text-xs text-gray-500">Est. Time</div>
                            </div>
                          </div>
                          
                          <button className="mt-2 w-full py-2 bg-purple-600 text-white rounded text-sm">
                            Download Complete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-white to-indigo-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-5 text-gray-800">Visual System & Interface Design</h3>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-700">1. Template Syntax System</h4>
                  
                  <p className="mb-4">
                    One of my key design challenges was creating a visual language that would clearly communicate different types of automation. Working with content specialists, I developed a syntax system using familiar word processing concepts:
                  </p>
                  
                  <div className="my-8 border border-gray-200 rounded-lg overflow-hidden shadow-md">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                      <span className="text-sm text-gray-500 ml-2">Template Editor</span>
                    </div>
                    <div className="p-6 bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left side: Template with placeholders */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm font-medium text-gray-700">Template with Placeholders</div>
                            <div className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded text-xs">Edit Mode</div>
                          </div>
                      <div className="font-mono text-sm">
                            <p className="mb-2"><span className="text-blue-600">{"# "}</span>{"Introduction to "}<span className="text-red-600">{"{{TOPIC}}"}</span></p>
                            <p className="mb-2"><span className="text-blue-600">{"## "}</span>{"Subject: "}<span className="text-red-600">{"{{SUBJECT}}"}</span></p>
                            <p className="mb-2"><span className="text-blue-600">{"## "}</span>{"Grade Level: "}<span className="text-red-600">{"{{GRADE}}"}</span></p>
                            <p className="mb-2"><span className="text-blue-600">{"## "}</span>{"Duration: "}<span className="text-red-600">{"{{DURATION}}"}</span>{" minutes"}</p>
                            <p className="mb-4 text-gray-400">{"---"}</p>
                            
                            <p className="mb-2"><span className="text-blue-600">{"### "}</span>{"Learning Objectives"}</p>
                        <p className="mb-2">{"By the end of this lesson, students will be able to:"}</p>
                            <p className="mb-2">{" - "}<span className="bg-yellow-200 px-1">{"Generate 3 specific learning objectives for {{SUBJECT}} {{TOPIC}} appropriate for {{GRADE}}"}</span></p>
                            <p className="mb-4 text-gray-400">{"---"}</p>
                            
                            <p className="mb-2"><span className="text-blue-600">{"### "}</span>{"Introduction"}</p>
                            <p className="mb-2"><span className="bg-yellow-200 px-1">{"Generate an engaging introduction about {{TOPIC}} that includes a real-world example relevant for {{GRADE}} students"}</span></p>
                            <p className="mb-4 text-gray-400">{"---"}</p>
                            
                            <p className="mb-2"><span className="text-blue-600">{"### "}</span>{"Main Activity"}</p>
                            <p className="mb-2">{"Materials needed:"}</p>
                            <p className="mb-2"><span className="text-red-600">{"{{MATERIALS}}"}</span></p>
                            <p className="mb-2">{"Instructions:"}</p>
                            <p className="mb-1"><span className="bg-yellow-200 px-1">{"Generate step-by-step instructions for a hands-on activity about {{TOPIC}}"}</span></p>
                      </div>
                    </div>
                        
                        {/* Right side: Filled template with real content */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm font-medium text-gray-700">Filled Template Preview</div>
                            <div className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">Preview Mode</div>
                          </div>
                          <div className="font-mono text-sm">
                            <p className="mb-2"><span className="text-blue-600">{"# "}</span>{"Introduction to Fractions"}</p>
                            <p className="mb-2"><span className="text-blue-600">{"## "}</span>{"Subject: Mathematics"}</p>
                            <p className="mb-2"><span className="text-blue-600">{"## "}</span>{"Grade Level: 3rd Grade"}</p>
                            <p className="mb-2"><span className="text-blue-600">{"## "}</span>{"Duration: 45 minutes"}</p>
                            <p className="mb-4 text-gray-400">{"---"}</p>
                            
                            <p className="mb-2"><span className="text-blue-600">{"### "}</span>{"Learning Objectives"}</p>
                            <p className="mb-2">{"By the end of this lesson, students will be able to:"}</p>
                            <p className="mb-2">{" - Identify fractions as parts of a whole"}</p>
                            <p className="mb-2">{" - Represent fractions using visual models"}</p>
                            <p className="mb-2">{" - Compare simple fractions (1/2, 1/4, 1/3)"}</p>
                            <p className="mb-4 text-gray-400">{"---"}</p>
                            
                            <p className="mb-2"><span className="text-blue-600">{"### "}</span>{"Introduction"}</p>
                            <p className="mb-2">{"Imagine sharing a pizza with friends! When we cut a pizza into equal pieces, each piece represents a fraction of the whole pizza. Today we'll explore how fractions help us share things fairly and measure parts of a whole in our everyday lives."}</p>
                            <p className="mb-4 text-gray-400">{"---"}</p>
                            
                            <p className="mb-2"><span className="text-blue-600">{"### "}</span>{"Main Activity"}</p>
                            <p className="mb-2">{"Materials needed:"}</p>
                            <p className="mb-2">{"- Circle fraction manipulatives"}</p>
                            <p className="mb-2">{"- Colored pencils"}</p>
                            <p className="mb-2">{"- Fraction worksheets"}</p>
                            <p className="mb-2">{"Instructions:"}</p>
                            <p className="mb-1">{"1. Distribute fraction circles to each student"}</p>
                            <p className="mb-1">{"2. Demonstrate how to create a whole using different pieces"}</p>
                            <p className="mb-1">{"3. Have students explore combining different fractions"}</p>
                            <p className="mb-1">{"4. Guide students in coloring the worksheet sections"}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="text-sm font-medium mb-2 text-gray-700">Template System Benefits</div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Consistent lesson structure across subjects</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Clear visual differentiation of content types</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Flexible generation instructions</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Predictable output format</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 pl-0 list-none mt-6">
                    <li className="flex items-baseline">
                      <span className="font-semibold mr-2 text-red-600">Red text:</span>
                      <span>Content from spreadsheets (mail-merge)</span>
                    </li>
                    <li className="flex items-baseline">
                      <span className="font-semibold mr-2 text-blue-600">Blue text:</span>
                      <span>Markdown formatting elements</span>
                    </li>
                    <li className="flex items-baseline">
                      <span className="font-semibold mr-2 bg-yellow-200 px-1">Yellow highlighting:</span>
                      <span>AI-generated content instructions</span>
                    </li>
                    <li className="flex items-baseline">
                      <span className="font-semibold mr-2 text-gray-400">Gray text:</span>
                      <span>Section dividers and structural elements</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-700">2. Generation Workflow</h4>
                  
                  <p className="mb-4">
                    I designed a step-by-step workflow that provided transparency and control:
                  </p>
                  
                  <div className="mb-4 bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500 flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                    <div>
                      <p className="text-indigo-800 font-medium">Try it yourself!</p>
                      <p className="text-sm text-indigo-700">This wireframe is fully interactive. Click on the step numbers or use the navigation buttons to walk through the entire generation workflow.</p>
                      </div>
                    </div>
                  
                  <GenerationWorkflow />
                  
                  <ul className="space-y-2 pl-0 list-none">
                    <li className="mb-2 flex flex-wrap items-baseline">
                      <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap">Upload Template Library:</span>
                      <span>Visual confirmation of successful template upload</span>
                    </li>
                    <li className="mb-2 flex flex-wrap items-baseline">
                      <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap">Upload Content Spreadsheet:</span>
                      <span>Data validation with clear error messaging</span>
                    </li>
                    <li className="mb-2 flex flex-wrap items-baseline">
                      <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap">Select Content Tab:</span>
                      <span>Choice of which set of lessons to generate</span>
                    </li>
                    <li className="mb-2 flex flex-wrap items-baseline">
                      <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap">Select Lessons:</span>
                      <span>Flexible selection of individual or batched lessons</span>
                    </li>
                    <li className="mb-2 flex flex-wrap items-baseline">
                      <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap">Preview First Lesson:</span>
                      <span>Review point before batch generation</span>
                    </li>
                    <li className="mb-2 flex flex-wrap items-baseline">
                      <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap">Generation Progress:</span>
                      <span>Visual feedback on generation status</span>
                    </li>
                    <li className="mb-2 flex flex-wrap items-baseline">
                      <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap">Download Results:</span>
                      <span>Easy access to completed materials</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-700">3. Review & Iteration Interface</h4>
                  
                  <p className="mb-4">
                    The review interface was crucial for building trust in the system:
                  </p>
                  
                  <div className="my-8 border border-gray-200 rounded-lg overflow-hidden shadow-md">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                      <span className="text-sm text-gray-500 ml-2">Review Interface</span>
                    </div>
                    <div className="p-6 bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-gray-200 rounded p-4">
                          <div className="text-sm text-gray-500 mb-2">Template</div>
                          <div className="font-mono text-xs">
                            <p className="mb-1">{"## Introduction"}</p>
                            <p className="mb-1 bg-yellow-200 px-1">{"Generate an engaging introduction about {{TOPIC}} for {{GRADE}} students"}</p>
                          </div>
                        </div>
                        <div className="border border-gray-200 rounded p-4">
                          <div className="text-sm text-gray-500 mb-2">Generated Output</div>
                          <div className="font-mono text-xs">
                            <p className="mb-1">{"## Introduction"}</p>
                            <p className="mb-1">{"Welcome to our exciting lesson on fractions! Today we'll discover how fractions are used in everyday life and why they're important for 3rd grade math skills."}</p>
                          </div>
                        </div>
                        <div className="border border-gray-200 rounded p-4 md:col-span-2">
                          <div className="text-sm text-gray-500 mb-2">Edit Controls</div>
                          <div className="flex items-center space-x-2">
                            <div className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs">Accept</div>
                            <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Edit</div>
                            <div className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs">Regenerate</div>
                            <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs">View Metadata</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 pl-0 list-none">
                    <li className="mb-2">Side-by-side comparison of template and generated output</li>
                    <li className="mb-2">Inline editing capabilities for quick adjustments</li>
                    <li className="mb-2">Generation metadata to understand the source of each content element</li>
                    <li className="mb-2">Option to regenerate specific sections while preserving others</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Prototype & Testing Section */}
        <section className="mb-28">
          <CaseStudyHeader>
            Prototype & Testing
          </CaseStudyHeader>
          
          <div className="bg-gradient-to-r from-white to-indigo-50 p-8 rounded-lg shadow-md">
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                I created interactive prototypes in Figma to test the user experience with real curriculum specialists:
              </p>
              
              {/* Template Creation Test Wireframe */}
              <div className="my-8 border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1">
                    <div className="flex items-center flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-red-400 mr-1"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
                    </div>
                    <span className="text-sm text-gray-500 ml-1">Prototype 1: Template Creation Test</span>
                  </div>
                  <div className="text-xs text-gray-500 px-2 bg-blue-100 rounded-full flex-shrink-0">
                    User Testing
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div>
                      <h4 className="text-lg font-medium mb-2 md:mb-3">Test Objectives</h4>
                      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1 md:space-y-2">
                        <li>Evaluate how easily users could understand the template syntax</li>
                        <li>Test comprehension of different syntax elements (red text, highlighting, etc.)</li>
                        <li>Measure time to create a basic template</li>
                        <li>Identify points of confusion in the template creation process</li>
                      </ul>
                      
                      <div className="mt-3 md:mt-4 bg-purple-50 p-3 rounded-lg">
                        <h5 className="text-sm font-medium mb-1 md:mb-2">Key Findings</h5>
                        <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
                          <li>Users struggled with distinguishing between variable types</li>
                          <li>Syntax highlighting significantly improved comprehension</li>
                          <li>Average time to create first template: 12 minutes</li>
                          <li>Template preview was essential for user confidence</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-3 md:p-4 bg-white">
                      <div className="border-b border-gray-200 pb-2 mb-2 md:mb-3 flex flex-wrap justify-between items-center gap-2">
                        <span className="text-sm font-medium">Template Editor Prototype</span>
                        <div className="flex space-x-2">
                          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs">?</div>
                          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">File</div>
                        <div className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Edit</div>
                        <div className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs font-medium">Format</div>
                        <div className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">View</div>
                        <div className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Help</div>
                      </div>
                      
                      <div className="border border-gray-200 rounded p-2 md:p-3 bg-gray-50">
                        <div className="text-xs font-mono leading-relaxed overflow-x-auto">
                          <p className="mb-1">{"<Lesson Title: "}<span className="text-red-600">{"{{TOPIC}}"}</span>{" for "}<span className="text-red-600">{"{{GRADE}}"}</span>{">"}</p>
                          <p className="mb-1">{"Subject: "}<span className="text-red-600">{"{{SUBJECT}}"}</span></p>
                          <p className="mb-1">{"Duration: "}<span className="text-red-600">{"{{DURATION}}"}</span>{" minutes"}</p>
                          <p className="mb-2">{"---"}</p>
                          <p className="mb-1">{"## Learning Objectives"}</p>
                          <p className="mb-1 bg-yellow-100 px-1">{"Generate 3 age-appropriate learning objectives for this {{SUBJECT}} lesson."}</p>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex flex-wrap justify-between gap-2">
                        <div className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs">Syntax Guide</div>
                        <div className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">Preview Template</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Planning Test Wireframe */}
              <div className="my-8 border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1">
                    <div className="flex items-center flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-red-400 mr-1"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
                    </div>
                    <span className="text-sm text-gray-500 ml-1">Prototype 2: Content Planning Test</span>
                  </div>
                  <div className="text-xs text-gray-500 px-2 bg-blue-100 rounded-full flex-shrink-0">
                    User Testing
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div>
                      <h4 className="text-lg font-medium mb-2 md:mb-3">Test Objectives</h4>
                      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1 md:space-y-2">
                        <li>Assess the spreadsheet structure's intuitiveness</li>
                        <li>Test content organization workflows</li>
                        <li>Evaluate validation feedback for data errors</li>
                        <li>Measure how quickly users could input a full lesson set</li>
                      </ul>
                      
                      <div className="mt-3 md:mt-4 bg-purple-50 p-3 rounded-lg">
                        <h5 className="text-sm font-medium mb-1 md:mb-2">Key Findings</h5>
                        <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
                          <li>Users preferred templates for spreadsheet setup</li>
                          <li>Column validation significantly reduced errors</li>
                          <li>Batch operations were highly requested</li>
                          <li>Immediate validation feedback increased confidence</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-3 md:p-4 bg-white">
                      <div className="border-b border-gray-200 pb-2 mb-2 md:mb-3 flex flex-wrap justify-between items-center gap-2">
                        <span className="text-sm font-medium">Spreadsheet Import Prototype</span>
                        <div className="flex flex-wrap gap-2">
                          <div className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">Sample Template</div>
                          <div className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">Validate</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3">
                        <div className="flex flex-wrap justify-between items-center mb-3 gap-2">
                          <div className="text-xs font-medium">Upload Spreadsheet</div>
                          <div className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs">Browse Files</div>
                        </div>
                        <div className="border border-dashed border-gray-300 rounded-lg p-3 md:p-4 flex flex-col items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <p className="text-xs text-gray-500 text-center">Drag and drop your content spreadsheet<br/>or click to browse</p>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <div className="text-xs font-medium mb-2">Required Columns</div>
                        <div className="flex flex-wrap gap-2">
                          <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Lesson ID ✓</div>
                          <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Subject ✓</div>
                          <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Grade ✓</div>
                          <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Topic ✓</div>
                          <div className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Duration ✗</div>
                          <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Materials ✓</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Generation & Review Test Wireframe */}
              <div className="my-8 border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1">
                    <div className="flex items-center flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-red-400 mr-1"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
                    </div>
                    <span className="text-sm text-gray-500 ml-1">Prototype 3: Generation & Review Test</span>
                  </div>
                  <div className="text-xs text-gray-500 px-2 bg-blue-100 rounded-full flex-shrink-0">
                    User Testing
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div>
                      <h4 className="text-lg font-medium mb-2 md:mb-3">Test Objectives</h4>
                      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1 md:space-y-2">
                        <li>Measured users' comfort with the review process</li>
                        <li>Tested editing workflows for generated content</li>
                        <li>Evaluated trust in AI-generated outputs</li>
                        <li>Identified preferred feedback mechanisms</li>
                      </ul>
                      
                      <div className="mt-3 md:mt-4 bg-purple-50 p-3 rounded-lg">
                        <h5 className="text-sm font-medium mb-1 md:mb-2">Key Findings</h5>
                        <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
                          <li>Side-by-side comparison was critical for trust</li>
                          <li>Users wanted more granular regeneration controls</li>
                          <li>Edit history was highly valued for collaboration</li>
                          <li>Preview before batch generation reduced anxiety</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 bg-white">
                      <div className="border-b border-gray-200 pb-2 mb-3 flex justify-between items-center">
                        <span className="text-sm font-medium">Review Interface Prototype</span>
                        <div className="flex space-x-2">
                          <div className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Previous</div>
                          <div className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Next</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="bg-gray-50 border border-gray-200 rounded p-2">
                          <div className="text-xs text-gray-500 mb-1">Template</div>
                          <div className="text-xs font-mono">
                            <p className="mb-1 text-gray-700">{"## Introduction"}</p>
                            <p className="mb-1 bg-yellow-200 px-1 text-gray-700">{"Generate an engaging introduction to {{TOPIC}} for {{GRADE}} students."}</p>
                          </div>
                        </div>
                        
                        <div className="bg-white border border-gray-200 rounded p-2">
                          <div className="text-xs text-gray-500 mb-1">Generated Content</div>
                          <div className="text-xs font-mono">
                            <p className="mb-1 text-gray-700">{"## Introduction"}</p>
                            <p className="mb-1 text-gray-700">{"Today we're going to explore fractions! Did you know that fractions are like sharing a pizza with friends? Let's discover how we use fractions every day."}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Accept
                        </div>
                        <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                          Edit
                        </div>
                        <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                          </svg>
                          Regenerate
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded p-2 border border-gray-200">
                        <div className="text-xs text-gray-500 mb-1">Metadata & Context</div>
                        <div className="text-xs text-gray-600">
                          <p>Lesson ID: L001 | Grade: 3 | Subject: Math | Topic: Fractions</p>
                          <p>Generated at: 2:45 PM | Model: GPT-4 | Template: Math-Basic</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testing Iterations Visualization */}
              <div className="my-8 border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                  <span className="text-sm text-gray-500 ml-2">Testing Iterations</span>
                </div>
                <div className="p-6 bg-white">
                  <div className="relative">
                    <div className="absolute h-1 bg-gray-200 top-6 left-[10%] right-[10%] z-0"></div>
                    
                    <div className="flex justify-between relative z-10">
                      <div className="text-center w-1/4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto border-2 border-purple-200">
                          <span className="font-medium">1</span>
                        </div>
                        <div className="mt-2">
                          <div className="text-sm font-medium">First Round</div>
                          <div className="text-xs text-gray-500">8 participants</div>
                        </div>
                      </div>
                      
                      <div className="text-center w-1/4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto border-2 border-purple-200">
                          <span className="font-medium">2</span>
                        </div>
                        <div className="mt-2">
                          <div className="text-sm font-medium">Refinements</div>
                          <div className="text-xs text-gray-500">Interface updates</div>
                        </div>
                      </div>
                      
                      <div className="text-center w-1/4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto border-2 border-purple-200">
                          <span className="font-medium">3</span>
                        </div>
                        <div className="mt-2">
                          <div className="text-sm font-medium">Second Round</div>
                          <div className="text-xs text-gray-500">6 participants</div>
                        </div>
                      </div>
                      
                      <div className="text-center w-1/4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto border-2 border-purple-200">
                          <span className="font-medium">4</span>
                        </div>
                        <div className="mt-2">
                          <div className="text-sm font-medium">Final Design</div>
                          <div className="text-xs text-gray-500">Implementation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <h5 className="text-sm font-medium mb-2">Key Improvements</h5>
                      <ul className="text-xs text-gray-600 space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Added syntax highlighting in the template editor for better visibility</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Simplified the spreadsheet structure based on user confusion points</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Enhanced the review interface with more prominent editing controls</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Added example libraries to help users understand effective templates</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <h5 className="text-sm font-medium mb-2">Usability Metrics</h5>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Task Completion Rate</span>
                            <span className="font-medium">92%</span>
                          </div>
                          <div className="w-full bg-gray-200 h-2 rounded-full">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>User Satisfaction</span>
                            <span className="font-medium">4.5/5</span>
                          </div>
                          <div className="w-full bg-gray-200 h-2 rounded-full">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Time on Task Reduction</span>
                            <span className="font-medium">78%</span>
                          </div>
                          <div className="w-full bg-gray-200 h-2 rounded-full">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="mt-6 mb-4 text-gray-700">
                User feedback from testing directly informed our design decisions and led to significant improvements in the final product. The iterative testing approach ensured that we addressed real user needs at every stage of development.
              </p>
            </div>
          </div>
        </section>
        
        {/* Implementation & Collaboration Section */}
        <section className="mb-28">
          <CaseStudyHeader>
            Implementation & Collaboration
          </CaseStudyHeader>
          
          <div className="bg-gradient-to-r from-white to-indigo-50 p-8 rounded-lg shadow-md">
            <div className="prose prose-lg max-w-none">
              <p className="mb-5">
                Working closely with developers, I translated design concepts into implementation specifications:
              </p>
              
              <ul className="space-y-3 pl-0 list-none">
                <li className="mb-3 flex flex-wrap items-baseline">
                  <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap mb-1">Design System Components:</span>
                  <span>Created a component library for the LessonLoom interface</span>
                </li>
                <li className="mb-3 flex flex-wrap items-baseline">
                  <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap mb-1">Visual Specification Documentation:</span>
                  <span>Detailed specs for custom elements</span>
                </li>
                <li className="mb-3 flex flex-wrap items-baseline">
                  <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap mb-1">Interactive Prototypes:</span>
                  <span>Prototypes showing state transitions and interactions</span>
                </li>
                <li className="mb-3 flex flex-wrap items-baseline">
                  <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap mb-1">Regular Design Reviews:</span>
                  <span>Collaborative sessions with developers to review implementation</span>
                </li>
              </ul>
              
              <p className="mt-5 mb-4">
                I participated in technical discussions to ensure the user experience remained central to implementation decisions:
              </p>
              
              <ul className="space-y-2 pl-0 list-none">
                <li className="mb-2 flex flex-wrap items-baseline">
                  <span className="w-full">Collaborated on API design to support the workflow requirements</span>
                </li>
                <li className="mb-2 flex flex-wrap items-baseline">
                  <span className="w-full">Provided input on error handling and recovery experiences</span>
                </li>
                <li className="mb-2 flex flex-wrap items-baseline">
                  <span className="w-full">Helped prioritize technical features based on user impact</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Results & Impact - Enhance with visually appealing metrics */}
        <section className="mb-28">
          <CaseStudyHeader>
            Results & Impact
          </CaseStudyHeader>
          
          <div className="prose prose-lg max-w-none bg-gradient-to-r from-white to-pink-50 p-8 rounded-lg shadow-md">
            <p>
              The LessonLoom platform transformed content creation at NewGlobe:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-purple-700 mb-2">80%</div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">Time Savings</h4>
                <p className="text-gray-600 text-sm">Reduction in time to create a full course</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-pink-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-indigo-700 mb-2">92%</div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">User Adoption</h4>
                <p className="text-gray-600 text-sm">Content team members actively using the system</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-pink-700 mb-2">3x</div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">Efficiency</h4>
                <p className="text-gray-600 text-sm">More course development managed simultaneously</p>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold mt-12 mb-4 border-b border-gray-200 pb-2">Qualitative Impact</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-500">
                <p className="italic text-gray-700 mb-3">"LessonLoom lets me focus on what's important - the teaching approaches and quality of explanations"</p>
                <p className="text-sm text-gray-500 font-medium">— Curriculum Designer</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-indigo-500">
                <p className="italic text-gray-700 mb-3">"Our lessons are more consistent and follow best practices automatically"</p>
                <p className="text-sm text-gray-500 font-medium">— Content Team Lead</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-pink-500 md:col-span-2">
                <p className="italic text-gray-700 mb-3">"I'm spending more time on creative examples and local relevance instead of formatting"</p>
                <p className="text-sm text-gray-500 font-medium">— Instructional Designer</p>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold mt-12 mb-4 border-b border-gray-200 pb-2">Design Success Metrics</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-xl font-bold mr-4">
                  87%
                </div>
                <div>
                  <p className="text-gray-800 font-medium mb-1">Task Completion</p>
                  <p className="text-gray-600 text-sm">First-time users</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xl font-bold mr-4">
                  73%
                </div>
                <div>
                  <p className="text-gray-800 font-medium mb-1">Reduced Support</p>
                  <p className="text-gray-600 text-sm">Fewer help desk tickets</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 text-xl font-bold mr-4">
                  4.5
                </div>
                <div>
                  <p className="text-gray-800 font-medium mb-1">User Satisfaction</p>
                  <p className="text-gray-600 text-sm">Average rating (out of 5)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technical Implementation */}
        <section className="mb-28">
          <CaseStudyHeader>
            Technical Implementation Highlights
          </CaseStudyHeader>
          
          <div className="bg-gradient-to-r from-white to-indigo-50 p-8 rounded-lg shadow-md">
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                While my primary focus was on the user experience, I worked closely with our engineering team to ensure the design vision was properly implemented:
              </p>
              
              <h3 className="text-2xl font-semibold mb-5 text-gray-800">System Architecture</h3>
              
              <p className="mb-4">
                LessonLoom was built with a multi-tier architecture:
              </p>
              
              <ul className="space-y-2 pl-0 list-none mb-8">
                <li className="mb-3 flex flex-wrap items-baseline">
                  <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap mb-1">Frontend:</span>
                  <span>Vue.js web application within the NewGlobe Portal</span>
                </li>
                <li className="mb-3 flex flex-wrap items-baseline">
                  <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap mb-1">Backend API:</span>
                  <span>.NET Core API managing templates, spreadsheets, and generation jobs</span>
                </li>
                <li className="mb-3 flex flex-wrap items-baseline">
                  <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap mb-1">Generation Service:</span>
                  <span>Python API interfacing with Azure OpenAI</span>
                </li>
                <li className="mb-3 flex flex-wrap items-baseline">
                  <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap mb-1">Storage:</span>
                  <span>AWS S3 for templates, spreadsheets, and generated lessons</span>
                </li>
                <li className="mb-3 flex flex-wrap items-baseline">
                  <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap mb-1">Integration:</span>
                  <span>Azure AI Translation Service for multi-language support</span>
                </li>
              </ul>
              
              <h3 className="text-2xl font-semibold mb-5 text-gray-800">Generation Pipeline</h3>
              
              <p className="mb-4">
                The system processes each lesson through three phases that directly align with our design specifications:
              </p>
              
              <ul className="space-y-2 pl-0 list-none mb-6">
                <li className="mb-3 flex flex-wrap items-baseline">
                  <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap mb-1">Mail Merge Phase:</span>
                  <span>Integrates content from spreadsheets into templates</span>
                </li>
                <li className="mb-3 flex flex-wrap items-baseline">
                  <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap mb-1">Variable Generation Phase:</span>
                  <span>Creates and tags reusable content elements</span>
                </li>
                <li className="mb-3 flex flex-wrap items-baseline">
                  <span className="font-semibold mr-2 text-purple-700 whitespace-nowrap mb-1">One-off Generation Phase:</span>
                  <span>Generates context-specific content based on highlighted prompts</span>
                </li>
              </ul>
              
              <p>
                This technical implementation was directly shaped by our design research that identified how users mentally approached content creation.
              </p>
            </div>
          </div>
        </section>
        
        {/* Reflections & Learnings */}
        <section className="mb-28">
          <CaseStudyHeader>
            Reflections & Learnings
          </CaseStudyHeader>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-white to-purple-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-5 text-gray-800">Design Challenges</h3>
              
              <div className="prose prose-lg max-w-none">
                <ul className="space-y-4 pl-0 list-none">
                  <li className="mb-3">
                    <strong className="text-purple-700 font-semibold">Balancing Flexibility & Structure:</strong> Finding the right balance between automated guidance and creative freedom required multiple iterations.
                  </li>
                  <li className="mb-3">
                    <strong className="text-purple-700 font-semibold">Visual Language Complexity:</strong> Creating an intuitive visual syntax that non-technical users could easily master was challenging.
                  </li>
                  <li className="mb-3">
                    <strong className="text-purple-700 font-semibold">Building Trust in AI:</strong> Designing transparency features that helped users understand and trust automated generation required careful attention.
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-white to-indigo-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-5 text-gray-800">Key Takeaways</h3>
              
              <div className="prose prose-lg max-w-none">
                <ul className="space-y-4 pl-0 list-none">
                  <li className="mb-3">
                    <strong className="text-purple-700 font-semibold">Start with user workflows, not features:</strong> Understanding how content creators thought about their work was more valuable than focusing on technical capabilities.
                  </li>
                  <li className="mb-3">
                    <strong className="text-purple-700 font-semibold">Make the invisible visible:</strong> Creating visual representations of mental models that existed in users' heads but weren't documented was transformative.
                  </li>
                  <li className="mb-3">
                    <strong className="text-purple-700 font-semibold">Progressive disclosure is essential for complex systems:</strong> Layering complexity allowed users to grow with the system rather than being overwhelmed.
                  </li>
                  <li className="mb-3">
                    <strong className="text-purple-700 font-semibold">Hybrid automation requires clear boundaries:</strong> Users needed to clearly understand what aspects were automated versus manually controlled.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Conclusion - Enhanced styling */}
        <section className="mb-28">
          <CaseStudyHeader>
            Conclusion
          </CaseStudyHeader>
          
          <div className="bg-gradient-to-r from-white to-pink-50 p-8 rounded-lg shadow-md">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                LessonLoom represents the power of thoughtful design to transform complex workflows. By deeply understanding users' needs and creating intuitive interfaces for AI interaction, we were able to dramatically improve efficiency while enhancing quality.
              </p>
              
              <p className="mb-6">
                As a product designer, this project reinforced that successful AI integration isn't about removing humans from the process – it's about amplifying their expertise and creativity by handling the repetitive elements that don't require human judgment.
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-500 mt-8">
                <p className="m-0 text-gray-800">
                  The design approach we developed has applications beyond education, offering a framework for any domain where experts need to create structured content at scale.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bottom Navigation */}
        <CaseStudyFooter />
    </div>
    </main>
  );
}