'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyHeader from '@/components/case-studies/CaseStudyHeader';

export default function Page() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#f8f9fe] min-h-screen">
      {/* Header section */}
      <header className="bg-white py-4 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="text-purple-600 font-medium text-xl">
            Imran Mohammed
          </Link>
          <nav className="flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-gray-600">
              Work
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-600">
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CaseStudyHeader level="h1">
          Automated Instructional Planning: Transforming Educational Scheduling
        </CaseStudyHeader>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-xl border-l-4 border-blue-400 shadow-sm mb-16"
        >
          <p className="text-lg text-gray-700">
            The Automated Instructional Planning (AIP) project was developed to solve a critical challenge facing NewGlobe Education: efficiently generating optimized teaching schedules for hundreds of schools across multiple global education programs.
          </p>
        </motion.div>

        {/* Project Overview Section */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <CaseStudyHeader level="h2" showGradientLine>
              Project Overview
            </CaseStudyHeader>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-blue-50 p-8 rounded-2xl border-t-4 border-blue-400 shadow-md">
              <h3 className="text-blue-600 font-bold mb-3">Role</h3>
              <p className="text-gray-900">Lead Product Designer</p>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl border-t-4 border-purple-400 shadow-md">
              <h3 className="text-purple-600 font-bold mb-3">Organization</h3>
              <p className="text-gray-900">NewGlobe Education</p>
            </div>

            <div className="bg-pink-50 p-8 rounded-2xl border-t-4 border-pink-400 shadow-md">
              <h3 className="text-pink-600 font-bold mb-3">Technologies</h3>
              <p className="text-gray-900">React, Node.js, PostgreSQL, Optimization Algorithms</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-md mb-12"
          >
            <p className="text-gray-700 mb-4">
              Prior to this solution, creating timetables was a manual, error-prone process that couldn't effectively support complex teaching models, resulting in inefficient resource allocation and limited flexibility in instructional delivery.
            </p>
            <p className="text-gray-700">
              As the product designer on this project, I collaborated closely with our product manager, stakeholders from Academics, Schools, and Technology teams to design an intuitive solution that automated the generation of conflict-free teaching schedules while accommodating program-specific requirements.
            </p>
          </motion.div>
        </section>

        {/* The Challenge Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <CaseStudyHeader level="h2" showGradientLine>
              The Challenge
            </CaseStudyHeader>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <p className="text-gray-800 mb-8">
              NewGlobe's education programs were growing rapidly, with increasingly complex teaching models:
            </p>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-blue-600 font-bold mb-2">Scale Challenges</h3>
                <p className="text-gray-700">Supporting variable numbers of streams per grade while maintaining educational quality.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-blue-600 font-bold mb-2">Flexibility Requirements</h3>
                <p className="text-gray-700">Accommodating specialist teaching models, multigrade classrooms, and cross-grade ability grouping.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-blue-600 font-bold mb-2">Optimization Needs</h3>
                <p className="text-gray-700">Maximizing teacher utilization across multiple streams and grades.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-blue-600 font-bold mb-2">Resource Constraints</h3>
                <p className="text-gray-700">Managing limited textbook resources with book-sharing requirements.</p>
              </div>
            </div>

            <div className="border-l-4 border-gray-200 pl-6 py-4">
              <h3 className="text-gray-800 font-bold mb-2">Manual Process Limitations</h3>
              <p className="text-gray-700 mb-4">
                The existing manual process required countless hours of work from multiple teams, with different timetables needed for various teaching models. It couldn't account for teacher specializations or optimize resource allocation effectively.
              </p>
              <p className="text-blue-600">
                An automated solution was critical to unlock the next phase of educational growth.
              </p>
            </div>
          </motion.div>
        </section>

        {/* User Research & Problem Definition Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <CaseStudyHeader level="h2" showGradientLine>
              User Research & Problem Definition
            </CaseStudyHeader>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <p className="text-gray-800 mb-6">
              I conducted extensive user research to understand the pain points and workflows of different stakeholders.
            </p>
            
            <p className="text-gray-700 mb-8">
              The research approach combined interviews with key stakeholders across academic, production, and school teams, on-site observations, collaborative workshops, and thorough analysis of the existing scheduling systems. This multi-method approach allowed me to identify critical bottlenecks in the process and develop precise requirements for a solution that would address all user needs.
            </p>

            <h3 className="text-blue-600 font-bold mb-6">Research Methods</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-blue-600">Stakeholder Interviews</h4>
                </div>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>12 interviews across 3 key stakeholder groups</li>
                  <li>Identified goals, frustrations, and workflow challenges</li>
                  <li>Documented specific scheduling requirements and constraints</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="text-purple-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-purple-600">Process Shadowing</h4>
                </div>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>5 full days observing the timetable creation process</li>
                  <li>Mapped the end-to-end workflow from planning to publication</li>
                  <li>Identified bottlenecks and inefficiencies in the current process</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="text-pink-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-pink-600">Collaborative Workshops</h4>
                </div>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Facilitated cross-functional rule identification sessions</li>
                  <li>Created journey maps with stakeholders to visualize the process</li>
                  <li>Prioritized requirements through group exercises</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="text-green-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-green-600">Existing System Analysis</h4>
                </div>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Audited the legacy scheduling system</li>
                  <li>Reviewed documentation and data flows</li>
                  <li>Identified technical limitations and opportunities</li>
                </ul>
              </div>
            </div>

            <h3 className="text-blue-600 font-bold mb-6">User Personas</h3>
            <p className="text-gray-700 mb-8">Through this research, I developed three key personas:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                <div className="bg-blue-500 py-8 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                    <span className="text-blue-500 font-bold text-xl">AD</span>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <h4 className="text-xl font-bold mb-1 text-center">Academic Director</h4>
                  <p className="text-gray-600 mb-6 text-center">Anne, 38</p>
                  
                  <h5 className="font-bold mb-2">Goals:</h5>
                  <p className="text-gray-700 mb-5">Ensure curriculum quality, optimize instructional time, adapt schedules to program needs</p>
                  
                  <h5 className="font-bold mb-2">Pain Points:</h5>
                  <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-200">
                    <p className="text-gray-700 italic">"We spend more time creating timetables than we do reviewing their quality."</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                <div className="bg-purple-500 py-8 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                    <span className="text-purple-500 font-bold text-xl">DP</span>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <h4 className="text-xl font-bold mb-1 text-center">Digital Production</h4>
                  <p className="text-gray-600 mb-6 text-center">Jake, 32</p>
                  
                  <h5 className="font-bold mb-2">Goals:</h5>
                  <p className="text-gray-700 mb-5">Generate error-free timetables efficiently, minimize manual work</p>
                  
                  <h5 className="font-bold mb-2">Pain Points:</h5>
                  <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-200">
                    <p className="text-gray-700 italic">"When teacher distribution changes, we have to recreate timetables from scratch."</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                <div className="bg-pink-500 py-8 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                    <span className="text-pink-500 font-bold text-xl">ST</span>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <h4 className="text-xl font-bold mb-1 text-center">Schools Team</h4>
                  <p className="text-gray-600 mb-6 text-center">Laura, 42</p>
                  
                  <h5 className="font-bold mb-2">Goals:</h5>
                  <p className="text-gray-700 mb-5">Optimize teacher assignments, ensure appropriate specialist rotations</p>
                  
                  <h5 className="font-bold mb-2">Pain Points:</h5>
                  <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-200">
                    <p className="text-gray-700 italic">"We need teachers teaching what they're qualified for."</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-blue-600 font-bold mb-6">Key Pain Points Identified</h3>
            
            <div className="overflow-x-auto bg-gray-50 p-6 rounded-xl mb-12">
              <table className="w-full text-left border-collapse border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-4 px-6 font-bold text-blue-600 border border-gray-200">PROCESS ISSUES</th>
                    <th className="py-4 px-6 font-bold text-purple-600 border border-gray-200">TECHNICAL LIMITATIONS</th>
                    <th className="py-4 px-6 font-bold text-pink-600 border border-gray-200">RESOURCE CONSTRAINTS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-6 text-gray-700 border border-gray-200">Manual timetable creation takes 2-3 weeks</td>
                    <td className="py-3 px-6 text-gray-700 border border-gray-200">Current system cannot handle &gt;12 teaching tracks</td>
                    <td className="py-3 px-6 text-gray-700 border border-gray-200">Textbook sharing not optimized (12% higher costs)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-gray-700 border border-gray-200">Each specialist rotation requires separate configuration</td>
                    <td className="py-3 px-6 text-gray-700 border border-gray-200">No way to verify rule compliance</td>
                    <td className="py-3 px-6 text-gray-700 border border-gray-200">Teacher utilization at only 68% of optimal capacity</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-gray-700 border border-gray-200">Changes require restarting entire process</td>
                    <td className="py-3 px-6 text-gray-700 border border-gray-200">23% of schedules contain errors</td>
                    <td className="py-3 px-6 text-gray-700 border border-gray-200">Specialist teachers often double-booked</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-gray-700 border border-gray-200">86% of staff time spent on data entry</td>
                    <td className="py-3 px-6 text-gray-700 border border-gray-200">Teacher specializations not considered</td>
                    <td className="py-3 px-6 text-gray-700 border border-gray-200">Physical classroom constraints ignored</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-blue-600 font-bold mb-6">Design Requirements</h3>
            <p className="text-gray-700 mb-8">Based on this research, I established clear design requirements to guide the solution:</p>
            
            <div className="overflow-x-auto bg-gray-50 p-6 rounded-xl">
              <table className="w-full text-left border-collapse border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-4 px-4 font-bold text-blue-600 border border-gray-200">REQUIREMENT CATEGORY</th>
                    <th className="py-4 px-4 font-bold text-blue-600 border border-gray-200">REQUIREMENT</th>
                    <th className="py-4 px-4 font-bold text-blue-600 border border-gray-200">DESCRIPTION</th>
                    <th className="py-4 px-4 font-bold text-blue-600 border border-gray-200">USER NEED ADDRESSED</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 text-gray-700 border border-gray-200">Plan Generation & Management</td>
                    <td className="py-3 px-4 font-medium text-gray-700 border border-gray-200">Automated Timetable Generation</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-200">System must generate conflict-free timetables based on defined rules and constraints</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-200">Digital Production spends 2-3 weeks manually creating timetables</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700 border border-gray-200">Rule Violation Management</td>
                    <td className="py-3 px-4 font-medium text-gray-700 border border-gray-200">Violation Categorization</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-200">Clearly categorize by severity (Hard/Medium/Soft)</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-200">23% of schedules contain errors when created manually</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700 border border-gray-200">View Flexibility</td>
                    <td className="py-3 px-4 font-medium text-gray-700 border border-gray-200">Multiple Perspectives</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-200">Support both grade/stream view and teacher view</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-200">Different stakeholders need different perspectives</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700 border border-gray-200">Resource Optimization</td>
                    <td className="py-3 px-4 font-medium text-gray-700 border border-gray-200">Book-Sharing Scheduling</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-200">Support constraints for textbook sharing between grades</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-200">Textbook sharing not optimized, 12% higher procurement costs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* Design Process Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <CaseStudyHeader level="h2" showGradientLine>
              Design Process
            </CaseStudyHeader>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-md mb-12"
          >
            <h3 className="text-blue-600 font-bold text-xl mb-6">1. Information Architecture & Workflow Design</h3>
            
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <p className="text-gray-800 mb-6">
                Based on my research, I developed:
              </p>
              
              <ul className="list-none space-y-6">
                <li>
                  <p><span className="text-blue-600 font-bold">A comprehensive information architecture</span> that organized complex scheduling data into logical hierarchies. This included categorizing elements into primary domains (programs, schools, grades, teachers, subjects) and establishing clear relationships between them. The architecture defined how constraints would propagate across different levels and how resource allocations would be tracked and visualized.</p>
                </li>
                <li>
                  <p><span className="text-blue-600 font-bold">Detailed workflow diagrams</span> mapping the complete journey for each key user role. These illustrated how academic directors would define program requirements, how school managers would apply local adaptations, and how production staff would review and distribute schedules. Each diagram included decision points, validation checks, and handoff mechanisms to ensure smooth collaboration between teams.</p>
                </li>
                <li>
                  <p><span className="text-blue-600 font-bold">Interactive state diagrams</span> showing the complete lifecycle of schedule generation—from initial configuration through optimization, conflict resolution, review, approval, and distribution. These diagrams defined each possible schedule state (draft, optimizing, conflicts detected, ready for review, approved, published) and the valid transitions between them, ensuring that all stakeholders understood where schedules were in the process.</p>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-700 italic">
              This foundational work created a shared mental model that guided both development and user training, ensuring the complex system would be intuitive and aligned with actual workflows.
            </p>

            {/* User Journey Mapping */}
            <h3 className="text-blue-600 font-bold text-xl mb-6">2. User Journey Mapping</h3>
            
            <p className="text-gray-800 mb-6">
              I created detailed journey maps to visualize how users would interact with the system, highlighting key emotional states, pain points, and design opportunities at each stage of the process.
            </p>
            
            <div className="bg-white rounded-xl shadow-md p-8 mb-10">
              <h4 className="font-bold text-center mb-8 text-gray-900 text-lg">Program Manager Journey Map</h4>
              
              {/* Timeline Steps */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mb-2">1</div>
                  <p className="text-sm text-gray-700 font-medium">Step 1</p>
                </div>
                <div className="flex-1 border-t-2 border-blue-200 mx-2"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mb-2">2</div>
                  <p className="text-sm text-gray-700 font-medium">Step 2</p>
                </div>
                <div className="flex-1 border-t-2 border-blue-200 mx-2"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mb-2">3</div>
                  <p className="text-sm text-gray-700 font-medium">Step 3</p>
                </div>
                <div className="flex-1 border-t-2 border-blue-200 mx-2"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mb-2">4</div>
                  <p className="text-sm text-gray-700 font-medium">Step 4</p>
                </div>
                <div className="flex-1 border-t-2 border-blue-200 mx-2"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mb-2">5</div>
                  <p className="text-sm text-gray-700 font-medium">Step 5</p>
                </div>
              </div>
              
              {/* Key Actions */}
              <div className="flex justify-between mb-8">
                <div className="text-center">
                  <div className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium mb-1">Plan Generation</div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium mb-1">Make Adjustments</div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium mb-1">Publish Plan</div>
                </div>
              </div>
              
              {/* Emotional States */}
              <div className="flex justify-between mb-12 bg-gray-50 py-4 px-2 rounded-lg">
                <div className="flex flex-col items-center">
                  <p className="text-2xl mb-1">😐</p>
                  <p className="text-xs text-center text-gray-600 font-medium">Neutral</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl mb-1">😟</p>
                  <p className="text-xs text-center text-gray-600 font-medium">Anxious</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl mb-1">😖</p>
                  <p className="text-xs text-center text-gray-600 font-medium">Frustrated</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl mb-1">🤔</p>
                  <p className="text-xs text-center text-gray-600 font-medium">Thoughtful</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl mb-1">😊</p>
                  <p className="text-xs text-center text-gray-600 font-medium">Relieved</p>
                </div>
              </div>
              
              {/* Pain Points and Design Opportunities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h5 className="font-bold mb-4 text-red-600">Pain Points</h5>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="border-l-4 border-red-500 pl-3">
                        <p className="text-gray-800 font-medium">Limited visibility</p>
                        <p className="text-gray-700">into which schools have unique constraints</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="border-l-4 border-red-500 pl-3">
                        <p className="text-gray-800 font-medium">Long waiting times</p>
                        <p className="text-gray-700">for plan generation with no progress indicator</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="border-l-4 border-red-500 pl-3">
                        <p className="text-gray-800 font-medium">Overwhelming error messages</p>
                        <p className="text-gray-700">with no clear resolution path</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="border-l-4 border-red-500 pl-3">
                        <p className="text-gray-800 font-medium">Tedious manual adjustments</p>
                        <p className="text-gray-700">requiring repetitive actions</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h5 className="font-bold mb-4 text-green-600">Design Opportunities</h5>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="border-l-4 border-green-500 pl-3">
                        <p className="text-gray-800 font-medium">Create visual constraint indicators</p>
                        <p className="text-gray-700">for quick school assessment</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="border-l-4 border-green-500 pl-3">
                        <p className="text-gray-800 font-medium">Implement real-time progress updates</p>
                        <p className="text-gray-700">with estimated completion times</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="border-l-4 border-green-500 pl-3">
                        <p className="text-gray-800 font-medium">Design guided resolution workflows</p>
                        <p className="text-gray-700">for each violation type</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="border-l-4 border-green-500 pl-3">
                        <p className="text-gray-800 font-medium">Create bulk editing capabilities</p>
                        <p className="text-gray-700">for common adjustment patterns</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-700">
                This journey mapping exercise helped identify key emotional pain points and informed the development of targeted solutions to significantly improve the user experience throughout the scheduling process.
              </p>
            </div>
          </motion.div>

          {/* UI Design and Visualization */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 text-gray-900">3. UI Design and Visualization</h3>
            
            <p className="text-gray-700 mb-6">
              I designed intuitive interfaces focused on making complex scheduling data accessible and actionable:
            </p>
            
            <div className="mb-8">
              <h4 className="font-bold mb-3 text-gray-900">School Selection Interface</h4>
              
              <div className="flex space-x-3 mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">In Review</span>
                <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">Draft</span>
                <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">Published</span>
              </div>
              
              <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                <li>Clean, filterable list view of schools</li>
                <li>Status indicators showing plan generation state</li>
                <li>Batch selection capabilities for managing multiple schools</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold mb-3 text-gray-900">Plan Generation Flow</h4>
              
              <p className="text-sm font-medium text-gray-700 mb-2">Generation Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div className="bg-blue-600 h-2 rounded-full w-[70%]"></div>
              </div>
              <p className="text-xs text-gray-600 mb-4">Processing constraints<span className="float-right">70%</span></p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <span className="inline-block h-3 w-3 bg-red-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-700">Hard Violations (2)</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block h-3 w-3 bg-yellow-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-700">Soft Violations (3)</span>
                </div>
              </div>
              
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Simple, focused generation interface with clear status communication</li>
                <li>Intelligent prioritization of rule violations needing attention</li>
                <li>Comparison view for evaluating multiple generated plans</li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="font-bold mb-3 text-gray-900">Timetable Visualization</h4>
              
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-700">Grade 6 - Stream B</span>
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded mr-1">Grade View</span>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Teacher View</span>
                </div>
              </div>
              
              <div className="grid grid-cols-5 gap-1 text-xs mb-4">
                <div className="bg-gray-100 p-1 text-center rounded">Math</div>
                <div className="bg-gray-100 p-1 text-center rounded">Arts</div>
                <div className="bg-gray-100 p-1 text-center rounded">Arts</div>
                <div className="bg-gray-100 p-1 text-center rounded">History</div>
                <div className="bg-gray-100 p-1 text-center rounded">Science</div>
                <div className="bg-gray-100 p-1 text-center rounded">English</div>
                <div className="bg-gray-100 p-1 text-center rounded">History</div>
                <div className="bg-gray-100 p-1 text-center rounded">Math</div>
                <div className="bg-gray-100 p-1 text-center rounded">Science</div>
                <div className="bg-gray-100 p-1 text-center rounded">History</div>
                <div className="bg-gray-100 p-1 text-center rounded">English</div>
                <div className="bg-gray-100 p-1 text-center rounded">Arts</div>
                <div className="bg-gray-100 p-1 text-center rounded">Science</div>
                <div className="bg-gray-100 p-1 text-center rounded">Arts</div>
                <div className="bg-gray-100 p-1 text-center rounded">Math</div>
              </div>
              
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Color-coded calendar view for intuitive schedule reading</li>
                <li>Toggle between grade/stream and teacher views</li>
                <li>Visual highlighting of rule violations by severity</li>
                <li>Detailed sidebar for activity information</li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="font-bold mb-3 text-gray-900">Rule Violation Management</h4>
              
              <p className="text-sm font-medium text-gray-700 mb-2">Violation Summary</p>
              <div className="flex space-x-2 mb-4">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded">Hard (2)</span>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">Medium (4)</span>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Soft (7)</span>
              </div>
              
              <div className="border border-gray-200 rounded p-3 mb-3">
                <h5 className="text-sm font-medium text-gray-900 mb-1">Teacher Double Booking</h5>
                <p className="text-sm text-gray-700 mb-2">Ms. Adesina is scheduled for two classes at the same time</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Grade 6, Monday, 9:00</span>
                  <button className="px-2 py-1 bg-blue-600 text-white text-xs rounded">Fix Now</button>
              </div>
              </div>
              
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Comprehensive summary of all rule violations</li>
                <li>Categorization by severity and type</li>
                <li>Direct navigation to problematic schedule areas</li>
                <li>Clear explanation of violation impact and resolution options</li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              These interface designs were informed by extensive user testing and iterated based on feedback. The focus was on creating visual clarity for complex data, providing intuitive navigation between related elements, and ensuring that users always had clear paths to resolve issues.
            </p>
          </div>

          {/* User Testing & Iteration */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">4. User Testing & Iteration</h3>
            
            <p className="text-gray-700 mb-6">
              I conducted user testing sessions to gather feedback and identify areas for improvement. The testing involved:
            </p>
            
            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
              <li>Usability testing with real users to assess the system's ease of use</li>
              <li>A/B testing to compare different design iterations</li>
              <li>Focus groups to gather qualitative feedback on the system's design and functionality</li>
            </ul>
            
            <p className="text-gray-700">
              Based on user feedback, I made several design adjustments to improve the system's usability and functionality.
            </p>
          </div>

          {/* Wireframing & Prototyping */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">5. Wireframing & Prototyping</h3>
            
            <p className="text-gray-700 mb-6">
              I created detailed wireframes to translate user needs into concrete layouts:
            </p>
            
            <div className="mb-8">
              <h4 className="font-bold mb-3 text-gray-900">Iterative Wireframing Process</h4>
              
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <div className="h-16 bg-gray-100 flex items-center justify-center mb-2 rounded">
                    <span className="text-sm text-gray-500">Initial Sketch</span>
                  </div>
                </div>
                <div>
                  <div className="h-16 bg-gray-200 flex items-center justify-center mb-2 rounded">
                    <span className="text-sm text-gray-500">Low Fidelity</span>
                  </div>
                </div>
                <div>
                  <div className="h-16 bg-gray-300 flex items-center justify-center mb-2 rounded">
                    <span className="text-sm text-gray-500">High Fidelity</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Each design iteration focused on simplifying complex workflows, particularly for scheduling and rule management. We evolved from basic paper sketches to detailed digital wireframes that could be tested with users.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold mb-3 text-gray-900">Interactive Prototypes</h4>
              
              <div className="mb-6">
                <p className="font-medium text-gray-900 mb-1">Plan Generation Flow</p>
                <p className="text-sm text-gray-700 mb-2">Click-through prototype in Figma</p>
                <div className="flex space-x-2 mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Tab 1</span>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Tab 2</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="font-medium text-gray-900 mb-1">Timetable Viewer</p>
                <p className="text-sm text-gray-700 mb-2">Interactive prototype with animations</p>
              </div>
              
              <p className="text-gray-700 mb-4">
                High-fidelity interactive prototypes were developed in Figma and tested with educators to validate usability. The prototypes helped us refine complex interactions like:
              </p>
              
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Drag-and-drop timetable adjustments</li>
                <li>Rule violation resolution workflows</li>
                <li>Multi-step scheduling wizards</li>
                <li>Comparative plan evaluation tools</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="font-bold mb-3 text-gray-900">User Testing & Validation</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="font-medium text-gray-700 mb-1">Task Success:</p>
                  <p className="text-2xl font-bold text-gray-900">87%</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-1">Time on Task:</p>
                  <p className="text-2xl font-bold text-green-600">-35%</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-1">Error Rate:</p>
                  <p className="text-2xl font-bold text-gray-900">12%</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                <div>
                  <h5 className="font-bold mb-2 text-gray-900">Key Findings</h5>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Administrators preferred calendar view over list view</li>
                    <li>Color-coding was essential for quick status recognition</li>
                    <li>Users struggled with multi-level rule creation</li>
                    <li>Mobile usage was higher than anticipated (36%)</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-2 text-gray-900">Design Iterations</h5>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Simplified rule creation wizard</li>
                    <li>Enhanced mobile calendar view</li>
                    <li>Added bulk action capabilities</li>
                    <li>Improved error visualization</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-700">
                User testing with 12 school administrators and 8 ministry officials provided critical insights that drove design refinements. We conducted moderated usability sessions followed by qualitative interviews to understand pain points and opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Lessons Learned Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Lessons Learned
          </h2>

          <p className="text-gray-700 mb-8">
            The AIP project provided valuable insights that have informed my approach to complex system design:
          </p>

          {/* Key Challenges */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Key Challenges</h3>
            
            <div className="mb-8">
              <h4 className="font-bold mb-2 text-gray-900">Complex Constraint Management</h4>
              <p className="text-gray-700">
                Balancing the need for standardization across programs with flexibility for local contexts proved more complex than initially anticipated.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold mb-2 text-gray-900">Stakeholder Alignment</h4>
              <p className="text-gray-700">
                Coordinating between program administrators, school principals, and teachers required careful communication plans and change management.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold mb-2 text-gray-900">Performance Optimization</h4>
              <p className="text-gray-700">
                The complexity of scheduling algorithms required significant optimization to deliver results in a timely manner for larger schools.
              </p>
            </div>
          </div>

          {/* What I Would Do Differently */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 text-gray-900">What I Would Do Differently</h3>
            
            <div className="mb-8">
              <h4 className="font-bold mb-2 text-gray-900">Earlier User Testing</h4>
              <p className="text-gray-700">
                Involving end users earlier in the process would have identified usability challenges sooner and improved adoption rates.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold mb-2 text-gray-900">Incremental Rollout</h4>
              <p className="text-gray-700">
                A more phased approach to deployment would have allowed for iterative improvements based on real-world usage.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="font-bold mb-2 text-gray-900">Enhanced Data Visualization</h4>
              <p className="text-gray-700">
                More sophisticated data visualization tools would have made it easier for administrators to identify optimization opportunities.
              </p>
            </div>
          </div>

          {/* Design Principles Reinforced */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Design Principles Reinforced</h3>
            
            <div className="mb-8">
              <h4 className="font-bold mb-2 text-gray-900">Progressive Disclosure</h4>
              <p className="text-gray-700">
                Revealing complexity gradually allowed users to navigate the system confidently despite its sophistication.
              </p>
              </div>
            
            <div className="mb-8">
              <h4 className="font-bold mb-2 text-gray-900">Contextual Assistance</h4>
              <p className="text-gray-700">
                Providing help and guidance at the point of need significantly reduced training requirements.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="font-bold mb-2 text-gray-900">Adaptive Interfaces</h4>
              <p className="text-gray-700">
                Different user roles required tailored interfaces to focus on their specific needs and responsibilities.
              </p>
            </div>
          </div>

          {/* The Biggest Takeaway */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">The Biggest Takeaway</h3>
            <p className="text-gray-700">
              The most significant lesson from this project was that even the most complex systems can be made approachable through thoughtful information architecture and workflow design. By creating clear mental models and providing appropriate feedback mechanisms, users can successfully navigate and control highly sophisticated processes.
            </p>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Conclusion
          </h2>

          <p className="text-gray-700 mb-8">
            The Academic Implementation Planner represents a successful transformation of a complex, manual process into an intuitive, efficient system that empowers educational administrators to create optimal schedules while respecting diverse requirements and constraints.
          </p>

          {/* Project Achievements */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Project Achievements</h3>
            
            <p className="text-gray-700 mb-6">
              Beyond the measurable metrics of success, this project demonstrated how thoughtful UX design could tackle challenging optimization problems while keeping humans at the center of the process. The system balanced automation with manual control, providing powerful tools without removing human judgment and expertise.
            </p>
            
            <p className="text-gray-700 mb-8">
              By focusing on clear information architecture, intuitive workflows, and meaningful visualizations, we created a system that not only solved the technical challenge of schedule optimization but did so in a way that was accessible and empowering for all stakeholders.
            </p>
            
            <div className="mb-8">
              <h4 className="font-bold mb-3 text-gray-900">My Role</h4>
              
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Led user research and requirements gathering</li>
                <li>Designed information architecture and user workflows</li>
                <li>Created wireframes and interactive prototypes</li>
                <li>Collaborated with developers on implementation</li>
                <li>Conducted user testing and iterative refinement</li>
                <li>Developed training materials and documentation</li>
              </ul>
            </div>
          </div>

          {/* Future Directions */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Future Directions</h3>
            
            <p className="text-gray-700 mb-6">
              The success of the AIP system has opened possibilities for expanded functionality in future iterations:
            </p>
            
            <div className="mb-8">
              <h4 className="font-bold mb-2 text-gray-900">Machine Learning Integration</h4>
              <p className="text-gray-700">
                Incorporating predictive analytics to suggest optimizations based on historical scheduling patterns and outcomes.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold mb-2 text-gray-900">Mobile Experience</h4>
              <p className="text-gray-700">
                Expanding the platform with dedicated mobile apps for teachers and administrators to view and manage schedules on the go.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold mb-2 text-gray-900">Student Portal</h4>
              <p className="text-gray-700">
                Creating interfaces for students to access personalized schedules and receive notifications about changes or special events.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold mb-2 text-gray-900">Resource Analytics</h4>
              <p className="text-gray-700">
                Enhanced reporting tools to analyze resource utilization and identify opportunities for efficiency improvements.
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="border-l-4 border-gray-300 pl-6 py-2 mb-8">
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "The AIP system has revolutionized how we approach academic scheduling, saving countless hours while producing better results. It's become an essential tool in our educational planning process."
            </blockquote>
            <p className="text-gray-600 font-medium">
              — Director of Academic Programs
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
