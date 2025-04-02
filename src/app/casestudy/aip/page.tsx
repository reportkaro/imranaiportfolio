'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyHeader from '@/components/case-studies/CaseStudyHeader';
import CaseStudyNav from '@/components/case-studies/CaseStudyNav';
import CaseStudyFooter from '@/components/case-studies/CaseStudyFooter';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50/30 to-gray-100">
      {/* Top Navigation */}
      <div className="bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <CaseStudyNav />
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero Section */}
        <section className="mb-20 relative mt-8">
          {/* Decorative element */}
          <div className="absolute -top-10 -left-20 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20 z-0"></div>
          
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <CaseStudyHeader level="h1" className="pb-2">
              Automated Instructional Planning: Transforming Educational Scheduling
            </CaseStudyHeader>
            
            <div className="prose prose-lg max-w-none mb-10 bg-gradient-to-r from-white to-blue-50 p-8 rounded-lg shadow-md border-l-4 border-blue-500">
              <p className="m-0">
                The Automated Instructional Planning (AIP) project was developed to solve a critical challenge facing NewGlobe Education: efficiently generating optimized teaching schedules for hundreds of schools across multiple global education programs.
              </p>
            </div>
          </motion.div>
        </section>
        
        {/* Project Overview */}
        <section className="mb-20">
          <CaseStudyHeader>
            Project Overview
          </CaseStudyHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-blue-50 p-6 rounded-lg shadow-md border-t-4 border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Role</h3>
              <p>Lead Product Designer</p>
            </motion.div>
            
            <motion.div 
              className="bg-indigo-50 p-6 rounded-lg shadow-md border-t-4 border-indigo-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">Organization</h3>
              <p>NewGlobe Education</p>
            </motion.div>
            
            <motion.div 
              className="bg-purple-50 p-6 rounded-lg shadow-md border-t-4 border-purple-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Technologies</h3>
              <p>React, Node.js, PostgreSQL, Optimization Algorithms</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-lg mb-6">
              Prior to this solution, creating timetables was a manual, error-prone process that couldn't effectively support complex teaching models, resulting in inefficient resource allocation and limited flexibility in instructional delivery.
            </p>
            
            <p className="text-lg">
              As the product designer on this project, I collaborated closely with our product manager, stakeholders from Academics, Schools, and Technology teams to design an intuitive solution that automated the generation of conflict-free teaching schedules while accommodating program-specific requirements.
            </p>
          </motion.div>
        </section>
        
        {/* The Challenge */}
        <section className="mb-20">
          <CaseStudyHeader>
            The Challenge
          </CaseStudyHeader>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg mb-6">
              NewGlobe's education programs were growing rapidly, with increasingly complex teaching models:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Scale Challenges</h3>
                <p className="text-gray-700">Supporting variable numbers of streams per grade while maintaining educational quality.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Flexibility Requirements</h3>
                <p className="text-gray-700">Accommodating specialist teaching models, multigrade classrooms, and cross-grade ability grouping.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Optimization Needs</h3>
                <p className="text-gray-700">Maximizing teacher utilization across multiple streams and grades.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Resource Constraints</h3>
                <p className="text-gray-700">Managing limited textbook resources with book-sharing requirements.</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-300">
              <h3 className="text-xl font-bold mb-3 text-gray-700">Manual Process Limitations</h3>
              <p className="mb-4">
                The existing manual process required countless hours of work from multiple teams, with different timetables needed for various teaching models. It couldn't account for teacher specializations or optimize resource allocation effectively.
              </p>
              <p className="font-medium text-blue-700">
                An automated solution was critical to unlock the next phase of educational growth.
              </p>
            </div>
          </div>
        </section>
        
        {/* User Research & Problem Definition */}
        <section className="mb-20">
          <CaseStudyHeader>
            User Research & Problem Definition
          </CaseStudyHeader>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6 pb-4 border-b border-gray-100">
              <p className="text-lg text-gray-700 mb-4">
                I conducted extensive user research to understand the pain points and workflows of different stakeholders.
              </p>
              <p className="text-gray-600">
                The research approach combined interviews with key stakeholders across academic, production, and school teams, on-site observations, collaborative workshops, and thorough analysis of the existing scheduling systems. This multi-method approach allowed me to identify critical bottlenecks in the process and develop precise requirements for a solution that would address all user needs.
              </p>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold text-blue-700 mb-5">Research Methods</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    <h4 className="text-lg font-bold text-blue-800">Stakeholder Interviews</h4>
                  </div>
                  <ul className="space-y-2 pl-6 list-disc text-gray-700">
                    <li>12 interviews across 3 key stakeholder groups</li>
                    <li>Identified goals, frustrations, and workflow challenges</li>
                    <li>Documented specific scheduling requirements and constraints</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <h4 className="text-lg font-bold text-indigo-800">Process Shadowing</h4>
                  </div>
                  <ul className="space-y-2 pl-6 list-disc text-gray-700">
                    <li>5 full days observing the timetable creation process</li>
                    <li>Mapped the end-to-end workflow from planning to publication</li>
                    <li>Identified bottlenecks and inefficiencies in the current process</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h4 className="text-lg font-bold text-purple-800">Collaborative Workshops</h4>
                  </div>
                  <ul className="space-y-2 pl-6 list-disc text-gray-700">
                    <li>Facilitated cross-functional rule identification sessions</li>
                    <li>Created journey maps with stakeholders to visualize the process</li>
                    <li>Prioritized requirements through group exercises</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-700 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <h4 className="text-lg font-bold text-teal-800">Existing System Analysis</h4>
                  </div>
                  <ul className="space-y-2 pl-6 list-disc text-gray-700">
                    <li>Audited the legacy scheduling system</li>
                    <li>Reviewed documentation and data flows</li>
                    <li>Identified technical limitations and opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold text-purple-700 mb-5">User Personas</h3>
              
              <p className="mb-5 text-gray-700">Through this research, I developed three key personas:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                    <div className="w-16 h-16 bg-white rounded-full mb-3 flex items-center justify-center mx-auto">
                      <span className="text-blue-800 font-bold text-xl">AD</span>
                    </div>
                    <h4 className="text-lg font-bold text-white text-center">Academic Director</h4>
                    <p className="text-sm font-medium text-blue-100 text-center">Anne, 38</p>
                  </div>
                  <div className="p-5">
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold mb-2 text-gray-800">Goals:</h5>
                      <p className="text-sm text-gray-600">Ensure curriculum quality, optimize instructional time, adapt schedules to program needs</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold mb-2 text-gray-800">Pain Points:</h5>
                      <p className="text-sm italic text-gray-600 bg-blue-50 p-3 rounded-lg border-l-2 border-blue-300">"We spend more time creating timetables than we do reviewing their quality."</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4">
                    <div className="w-16 h-16 bg-white rounded-full mb-3 flex items-center justify-center mx-auto">
                      <span className="text-indigo-800 font-bold text-xl">DP</span>
                    </div>
                    <h4 className="text-lg font-bold text-white text-center">Digital Production</h4>
                    <p className="text-sm font-medium text-indigo-100 text-center">Jake, 32</p>
                  </div>
                  <div className="p-5">
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold mb-2 text-gray-800">Goals:</h5>
                      <p className="text-sm text-gray-600">Generate error-free timetables efficiently, minimize manual work</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold mb-2 text-gray-800">Pain Points:</h5>
                      <p className="text-sm italic text-gray-600 bg-indigo-50 p-3 rounded-lg border-l-2 border-indigo-300">"When teacher distribution changes, we have to recreate timetables from scratch."</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
                    <div className="w-16 h-16 bg-white rounded-full mb-3 flex items-center justify-center mx-auto">
                      <span className="text-purple-800 font-bold text-xl">ST</span>
                    </div>
                    <h4 className="text-lg font-bold text-white text-center">Schools Team</h4>
                    <p className="text-sm font-medium text-purple-100 text-center">Laura, 42</p>
                  </div>
                  <div className="p-5">
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold mb-2 text-gray-800">Goals:</h5>
                      <p className="text-sm text-gray-600">Optimize teacher assignments, ensure appropriate specialist rotations</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold mb-2 text-gray-800">Pain Points:</h5>
                      <p className="text-sm italic text-gray-600 bg-purple-50 p-3 rounded-lg border-l-2 border-purple-300">"We need teachers teaching what they're qualified for."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold text-teal-700 mb-5">Key Pain Points Identified</h3>
              
              <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 border-b border-gray-200 bg-blue-50 text-left text-sm font-medium text-blue-800 uppercase tracking-wider">Process Issues</th>
                      <th className="px-6 py-4 border-b border-gray-200 bg-indigo-50 text-left text-sm font-medium text-indigo-800 uppercase tracking-wider">Technical Limitations</th>
                      <th className="px-6 py-4 border-b border-gray-200 bg-purple-50 text-left text-sm font-medium text-purple-800 uppercase tracking-wider">Resource Constraints</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50 bg-opacity-30">Manual timetable creation takes 2-3 weeks</td>
                      <td className="px-6 py-4 text-sm text-gray-700 bg-indigo-50 bg-opacity-30">Current system cannot handle >12 teaching tracks</td>
                      <td className="px-6 py-4 text-sm text-gray-700 bg-purple-50 bg-opacity-30">Textbook sharing not optimized (12% higher costs)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Each specialist rotation requires separate configuration</td>
                      <td className="px-6 py-4 text-sm text-gray-700">No way to verify rule compliance</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Teacher utilization at only 68% of optimal capacity</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50 bg-opacity-30">Changes require restarting entire process</td>
                      <td className="px-6 py-4 text-sm text-gray-700 bg-indigo-50 bg-opacity-30">23% of schedules contain errors</td>
                      <td className="px-6 py-4 text-sm text-gray-700 bg-purple-50 bg-opacity-30">Specialist teachers often double-booked</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">86% of staff time spent on data entry</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Teacher specializations not considered</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Physical classroom constraints ignored</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-orange-700 mb-5">Design Requirements</h3>
              
              <p className="mb-4 text-gray-700">Based on this research, I established clear design requirements to guide the solution:</p>
              
              <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 text-left text-sm font-medium text-blue-800 uppercase tracking-wider">Requirement Category</th>
                      <th className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 text-left text-sm font-medium text-blue-800 uppercase tracking-wider">Requirement</th>
                      <th className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 text-left text-sm font-medium text-blue-800 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 text-left text-sm font-medium text-blue-800 uppercase tracking-wider">User Need Addressed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-blue-50 bg-opacity-20">Plan Generation & Management</td>
                      <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50 bg-opacity-20">Automated Timetable Generation</td>
                      <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50 bg-opacity-20">System must generate conflict-free timetables based on defined rules and constraints</td>
                      <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50 bg-opacity-20">Digital Production spends 2-3 weeks manually creating timetables</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Rule Violation Management</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Violation Categorization</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Clearly categorize by severity (Hard/Medium/Soft)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">23% of schedules contain errors when created manually</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-blue-50 bg-opacity-20">View Flexibility</td>
                      <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50 bg-opacity-20">Multiple Perspectives</td>
                      <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50 bg-opacity-20">Support both grade/stream view and teacher view</td>
                      <td className="px-6 py-4 text-sm text-gray-700 bg-blue-50 bg-opacity-20">Different stakeholders need different perspectives</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Resource Optimization</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Book-Sharing Scheduling</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Support constraints for textbook sharing between grades</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Textbook sharing not optimized, 12% higher procurement costs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
        {/* Design Process */}
        <section className="mb-20">
          <CaseStudyHeader>
            Design Process
          </CaseStudyHeader>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-700">1. Information Architecture & Workflow Design</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-lg mb-3">Based on my research, I developed:</p>
                <ul className="space-y-4 pl-6 list-disc">
                  <li className="text-gray-700">
                    <span className="font-medium text-blue-800">A comprehensive information architecture</span> that organized complex scheduling data into logical hierarchies. This included categorizing elements into primary domains (programs, schools, grades, teachers, subjects) and establishing clear relationships between them. The architecture defined how constraints would propagate across different levels and how resource allocations would be tracked and visualized.
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium text-blue-800">Detailed workflow diagrams</span> mapping the complete journey for each key user role. These illustrated how academic directors would define program requirements, how school managers would apply local adaptations, and how production staff would review and distribute schedules. Each diagram included decision points, validation checks, and handoff mechanisms to ensure smooth collaboration between teams.
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium text-blue-800">Interactive state diagrams</span> showing the complete lifecycle of schedule generation—from initial configuration through optimization, conflict resolution, review, approval, and distribution. These diagrams defined each possible schedule state (draft, optimizing, conflicts detected, ready for review, approved, published) and the valid transitions between them, ensuring that all stakeholders understood where schedules were in the process.
                  </li>
                </ul>
                <p className="mt-4 text-gray-700 italic">This foundational work created a shared mental model that guided both development and user training, ensuring the complex system would be intuitive and aligned with actual workflows.</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-700">2. User Journey Mapping</h3>
              <p className="text-lg mb-4">
                I created detailed journey maps to visualize how users would interact with the system, highlighting 
                key emotional states, pain points, and design opportunities at each stage of the process.
              </p>
              
              {/* Visual Journey Map */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6 overflow-x-auto">
                <h4 className="text-center font-bold mb-4">Program Manager Journey Map</h4>
                
                {/* Journey Stages */}
                <div className="flex mb-4 min-w-[800px]">
                  {["School Selection", "Plan Generation", "Review Violations", "Make Adjustments", "Final Approval", "Publish Plan"].map((stage, i) => (
                    <div key={i} className="flex-1 mx-1">
                      <div className={`bg-blue-${i % 2 ? '600' : '700'} text-white p-2 rounded-t-lg text-center font-medium`}>
                        {stage}
                      </div>
                      <div className="text-center text-sm mt-1">Step {i+1}</div>
                    </div>
                  ))}
                </div>
                
                {/* Journey Path */}
                <div className="relative h-12 mb-4 min-w-[800px]">
                  <div className="absolute top-5 left-0 right-0 h-2 bg-blue-300"></div>
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="absolute top-1 flex flex-col items-center" style={{left: `${i * 20 + 8}%`}}>
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {i+1}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Emotional States */}
                <div className="flex mb-6 min-w-[800px]">
                  <div className="w-20 pt-10 pr-4 text-right font-medium">Emotional<br/>State</div>
                  <div className="flex-1 relative">
                    <div className="absolute left-0 right-0 h-px bg-gray-300" style={{top: '50%'}}></div>
                    <div className="flex justify-between">
                      {[
                        {emoji: "😐", color: "bg-yellow-100", label: "Neutral"},
                        {emoji: "😟", color: "bg-red-100", label: "Anxious"},
                        {emoji: "😖", color: "bg-red-200", label: "Frustrated"},
                        {emoji: "🤔", color: "bg-yellow-100", label: "Thoughtful"},
                        {emoji: "😌", color: "bg-green-100", label: "Relieved"},
                        {emoji: "😀", color: "bg-green-200", label: "Satisfied"}
                      ].map((state, i) => (
                        <div key={i} className="flex flex-col items-center mx-2" style={{width: '16%'}}>
                          <div className={`${state.color} p-3 rounded-lg text-center w-full shadow-sm`}>
                            <div className="text-2xl mb-1">{state.emoji}</div>
                            <div className="text-xs font-medium">{state.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Pain Points & Opportunities */}
                <div className="grid grid-cols-2 gap-6 min-w-[800px]">
                  <div>
                    <h5 className="font-bold mb-3 text-red-600">Pain Points</h5>
                    <ul className="space-y-3">
                      <li className="bg-white p-3 rounded shadow-sm border-l-4 border-red-500">
                        <span className="font-medium">Limited visibility</span> into which schools have unique constraints
                      </li>
                      <li className="bg-white p-3 rounded shadow-sm border-l-4 border-red-500">
                        <span className="font-medium">Long waiting times</span> for plan generation with no progress indicator
                      </li>
                      <li className="bg-white p-3 rounded shadow-sm border-l-4 border-red-500">
                        <span className="font-medium">Overwhelming error messages</span> with no clear resolution path
                      </li>
                      <li className="bg-white p-3 rounded shadow-sm border-l-4 border-red-500">
                        <span className="font-medium">Tedious manual adjustments</span> requiring repetitive actions
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold mb-3 text-green-600">Design Opportunities</h5>
                    <ul className="space-y-3">
                      <li className="bg-white p-3 rounded shadow-sm border-l-4 border-green-500">
                        Create <span className="font-medium">visual constraint indicators</span> for quick school assessment
                      </li>
                      <li className="bg-white p-3 rounded shadow-sm border-l-4 border-green-500">
                        Implement <span className="font-medium">real-time progress updates</span> with estimated completion times
                      </li>
                      <li className="bg-white p-3 rounded shadow-sm border-l-4 border-green-500">
                        Design <span className="font-medium">guided resolution workflows</span> for each violation type
                      </li>
                      <li className="bg-white p-3 rounded shadow-sm border-l-4 border-green-500">
                        Create <span className="font-medium">bulk editing capabilities</span> for common adjustment patterns
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <p className="text-base mb-6">
                This journey mapping exercise helped identify key emotional pain points and informed the development of targeted 
                solutions to significantly improve the user experience throughout the scheduling process.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-700">3. UI Design and Visualization</h3>
              <p className="text-lg mb-4">
                I designed intuitive interfaces focused on making complex scheduling data accessible and actionable:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-blue-600 px-4 py-3">
                    <h4 className="text-lg font-semibold text-white">School Selection Interface</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-50 p-3 rounded-lg mb-4 aspect-video flex flex-col">
                      {/* Visual representation of school selection interface */}
                      <div className="h-8 flex items-center mb-2">
                        <div className="bg-blue-100 w-32 h-5 rounded mr-auto"></div>
                        <div className="bg-gray-200 w-24 h-5 rounded"></div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <div className="grid grid-cols-1 gap-2">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="flex items-center bg-white p-2 rounded border border-gray-200">
                              <div className={`w-3 h-3 rounded-full ${i % 3 === 0 ? 'bg-green-500' : i % 3 === 1 ? 'bg-amber-500' : 'bg-blue-500'} mr-3`}></div>
                              <div className="bg-gray-200 w-32 h-3 rounded mr-auto"></div>
                              <div className={`text-xs px-2 py-1 rounded ${i % 3 === 0 ? 'bg-green-100 text-green-800' : i % 3 === 1 ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}`}>
                                {i % 3 === 0 ? 'Published' : i % 3 === 1 ? 'In Review' : 'Draft'}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 pl-6 list-disc text-gray-700">
                      <li>Clean, filterable list view of schools</li>
                      <li>Status indicators showing plan generation state</li>
                      <li>Batch selection capabilities for managing multiple schools</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-indigo-600 px-4 py-3">
                    <h4 className="text-lg font-semibold text-white">Plan Generation Flow</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-50 p-3 rounded-lg mb-4 aspect-video flex flex-col">
                      {/* Visual representation of plan generation flow */}
                      <div className="text-center mb-2 text-sm font-medium">Generation Progress</div>
                      <div className="mb-4">
                        <div className="h-2 bg-gray-200 rounded-full mb-1 overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Processing constraints</span>
                          <span>70%</span>
                        </div>
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-3">
                        <div className="bg-white p-2 rounded border border-gray-200">
                          <div className="text-xs font-medium mb-1 text-red-600">Hard Violations (2)</div>
                          <div className="h-2 bg-red-100 rounded mb-1"></div>
                          <div className="h-2 bg-red-100 rounded"></div>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200">
                          <div className="text-xs font-medium mb-1 text-amber-600">Soft Violations (3)</div>
                          <div className="h-2 bg-amber-100 rounded mb-1"></div>
                          <div className="h-2 bg-amber-100 rounded mb-1"></div>
                          <div className="h-2 bg-amber-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 pl-6 list-disc text-gray-700">
                      <li>Simple, focused generation interface with clear status communication</li>
                      <li>Intelligent prioritization of rule violations needing attention</li>
                      <li>Comparison view for evaluating multiple generated plans</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-purple-600 px-4 py-3">
                    <h4 className="text-lg font-semibold text-white">Timetable Visualization</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-50 p-3 rounded-lg mb-4 aspect-video flex flex-col">
                      {/* Visual representation of timetable visualization */}
                      <div className="flex items-center mb-2">
                        <div className="text-xs font-medium mr-auto">Grade 6 - Stream B</div>
                        <div className="flex space-x-1">
                          <div className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">Grade View</div>
                          <div className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">Teacher View</div>
                        </div>
                      </div>
                      <div className="flex-1 grid grid-cols-5 grid-rows-4 gap-1">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`p-1 rounded text-xs flex flex-col justify-center ${
                              i % 7 === 0 ? 'bg-blue-100 border border-blue-300' : 
                              i % 5 === 0 ? 'bg-purple-100 border border-purple-300' :
                              i % 4 === 0 ? 'bg-green-100 border border-green-300' :
                              i % 3 === 0 ? 'bg-amber-100 border border-amber-300' : 'bg-red-100 border border-red-300'
                            } ${i === 3 ? 'ring-2 ring-red-500' : ''}`}
                          >
                            <div className="font-medium truncate">{
                              i % 7 === 0 ? 'Math' : 
                              i % 5 === 0 ? 'English' :
                              i % 4 === 0 ? 'Science' :
                              i % 3 === 0 ? 'History' : 'Arts'
                            }</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-2 pl-6 list-disc text-gray-700">
                      <li>Color-coded calendar view for intuitive schedule reading</li>
                      <li>Toggle between grade/stream and teacher views</li>
                      <li>Visual highlighting of rule violations by severity</li>
                      <li>Detailed sidebar for activity information</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-teal-600 px-4 py-3">
                    <h4 className="text-lg font-semibold text-white">Rule Violation Management</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-50 p-3 rounded-lg mb-4 aspect-video flex flex-col">
                      {/* Visual representation of rule violation management */}
                      <div className="text-center mb-2 text-sm font-medium">Violation Summary</div>
                      <div className="flex space-x-2 mb-3">
                        <div className="flex-1 text-center rounded py-1 bg-red-100 text-red-800 text-xs font-medium">Hard (2)</div>
                        <div className="flex-1 text-center rounded py-1 bg-amber-100 text-amber-800 text-xs font-medium">Medium (4)</div>
                        <div className="flex-1 text-center rounded py-1 bg-blue-100 text-blue-800 text-xs font-medium">Soft (7)</div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <div className="bg-white p-2 rounded border border-red-300 mb-2">
                          <div className="text-xs font-bold text-red-800 mb-1">Teacher Double Booking</div>
                          <div className="text-xs text-gray-600 mb-1">Ms. Adesina is scheduled for two classes at the same time</div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-blue-600 font-medium">Grade 6, Monday, 9:00</div>
                            <div className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">Fix Now</div>
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded border border-amber-300">
                          <div className="text-xs font-bold text-amber-800 mb-1">Suboptimal Subject Sequence</div>
                          <div className="text-xs text-gray-600 mb-1">Math followed by P.E. is not recommended</div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-blue-600 font-medium">Grade 5, Tuesday</div>
                            <div className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">Review</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 pl-6 list-disc text-gray-700">
                      <li>Comprehensive summary of all rule violations</li>
                      <li>Categorization by severity and type</li>
                      <li>Direct navigation to problematic schedule areas</li>
                      <li>Clear explanation of violation impact and resolution options</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden md:col-span-2">
                  <div className="bg-emerald-600 px-4 py-3">
                    <h4 className="text-lg font-semibold text-white">Plan Publication Process</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-50 p-3 rounded-lg mb-4 flex flex-col md:flex-row gap-4">
                      {/* Visual representation of plan publication process */}
                      <div className="flex-1 flex flex-col min-h-[150px]">
                        <div className="text-center mb-2 text-sm font-medium">Publication Confirmation</div>
                        <div className="bg-white p-3 rounded border border-gray-200 flex-1 flex flex-col">
                          <div className="text-sm font-medium mb-2">Publish Term 2 Schedule for Western Region?</div>
                          <div className="text-xs text-gray-600 mb-4">This will distribute the schedule to 24 schools and 156 teachers</div>
                          <div className="mt-auto flex space-x-2 justify-end">
                            <div className="text-xs px-3 py-1.5 bg-gray-200 text-gray-800 rounded">Cancel</div>
                            <div className="text-xs px-3 py-1.5 bg-green-600 text-white rounded">Confirm Publication</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col min-h-[150px]">
                        <div className="text-center mb-2 text-sm font-medium">Version Tracking</div>
                        <div className="bg-white p-3 rounded border border-gray-200 flex-1">
                          <div className="flex items-center mb-2">
                            <div className="text-xs font-medium mr-auto">Current Version: 2.3</div>
                            <div className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">Compare</div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center text-xs">
                              <div className="w-16 font-medium">v2.3</div>
                              <div className="flex-1">Final release with teacher adjustments</div>
                              <div className="text-gray-500">Today</div>
                            </div>
                            <div className="flex items-center text-xs">
                              <div className="w-16 font-medium">v2.2</div>
                              <div className="flex-1">Fixed resource conflicts</div>
                              <div className="text-gray-500">Yesterday</div>
                            </div>
                            <div className="flex items-center text-xs">
                              <div className="w-16 font-medium">v2.1</div>
                              <div className="flex-1">Initial optimization</div>
                              <div className="text-gray-500">3 days ago</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 pl-6 list-disc text-gray-700">
                      <li>Clear confirmation flow for plan publication</li>
                      <li>Summary of state changes and impacts</li>
                      <li>Version tracking and comparison capabilities</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <p className="text-lg bg-blue-50 p-4 rounded-lg mb-8">
                These interface designs were informed by extensive user testing and iterated based on feedback. The focus was on creating visual clarity for complex data, providing intuitive navigation between related elements, and ensuring that users always had clear paths to resolve issues.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-700">4. User Testing & Iteration</h3>
              <p className="text-lg mb-4">
                I conducted user testing sessions to gather feedback and identify areas for improvement. The testing involved:
              </p>
              <ul className="space-y-2 mb-4 pl-6 list-disc">
                <li>Usability testing with real users to assess the system's ease of use</li>
                <li>A/B testing to compare different design iterations</li>
                <li>Focus groups to gather qualitative feedback on the system's design and functionality</li>
              </ul>
              <p className="text-lg">
                Based on user feedback, I made several design adjustments to improve the system's usability and functionality.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-700">5. Wireframing & Prototyping</h3>
              <p className="text-lg mb-4">
                I created detailed wireframes to translate user needs into concrete layouts:
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-600">Iterative Wireframing Process</h4>
                <div className="p-4 bg-gray-50 rounded-lg mb-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-full aspect-video bg-white border border-gray-300 rounded mb-2 p-2">
                        <div className="h-3 w-16 bg-gray-300 rounded mb-2"></div>
                        <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                        <div className="h-2 w-3/4 bg-gray-200 rounded mb-1"></div>
                        <div className="h-8 w-full bg-gray-100 rounded mb-2 mt-3"></div>
                      </div>
                      <span className="text-xs text-gray-500">Initial Sketch</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full aspect-video bg-white border border-gray-300 rounded mb-2 p-2">
                        <div className="h-3 w-16 bg-gray-400 rounded mb-2"></div>
                        <div className="h-2 w-full bg-gray-300 rounded mb-1"></div>
                        <div className="h-2 w-3/4 bg-gray-300 rounded mb-1"></div>
                        <div className="grid grid-cols-2 gap-1 mb-2 mt-3">
                          <div className="h-6 bg-gray-200 rounded"></div>
                          <div className="h-6 bg-blue-200 rounded"></div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">Low Fidelity</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full aspect-video bg-white border border-gray-300 rounded mb-2 p-2">
                        <div className="h-3 w-16 bg-blue-500 rounded mb-2"></div>
                        <div className="h-2 w-full bg-gray-300 rounded mb-1"></div>
                        <div className="h-2 w-3/4 bg-gray-300 rounded mb-1"></div>
                        <div className="grid grid-cols-2 gap-1 mb-2 mt-3">
                          <div className="h-6 bg-gray-200 rounded flex items-center justify-center">
                            <div className="h-2 w-8 bg-gray-400 rounded"></div>
                          </div>
                          <div className="h-6 bg-blue-500 rounded flex items-center justify-center">
                            <div className="h-2 w-8 bg-white rounded"></div>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">High Fidelity</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Each design iteration focused on simplifying complex workflows, particularly for scheduling and rule management. 
                  We evolved from basic paper sketches to detailed digital wireframes that could be tested with users.
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3 text-blue-600">Interactive Prototypes</h4>
                <div className="p-4 bg-gray-50 rounded-lg mb-4 flex flex-col md:flex-row gap-6">
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full aspect-video bg-white border border-gray-300 rounded mb-2 p-2 shadow-sm">
                      <div className="flex justify-between items-center mb-3">
                        <div className="h-4 w-16 bg-blue-500 rounded"></div>
                        <div className="flex gap-1">
                          <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                          <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                          <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-gray-200 rounded"></div>
                        <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                        <div className="h-10 w-full bg-gray-100 rounded mt-3 flex items-center justify-center">
                          <div className="h-2 w-16 bg-gray-400 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Plan Generation Flow</span>
                    <span className="text-xs text-gray-500">Click-through prototype in Figma</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full aspect-video bg-white border border-gray-300 rounded mb-2 p-2 shadow-sm">
                      <div className="flex items-center mb-2">
                        <div className="h-3 w-12 bg-gray-300 rounded mr-auto"></div>
                        <div className="flex space-x-1">
                          <div className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-center">Tab 1</div>
                          <div className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-center">Tab 2</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 grid-rows-4 gap-1 mb-2">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`p-1 rounded ${
                              i % 7 === 0 ? 'bg-blue-100' : 
                              i % 5 === 0 ? 'bg-purple-100' :
                              i % 4 === 0 ? 'bg-green-100' :
                              i % 3 === 0 ? 'bg-amber-100' : 'bg-gray-100'
                            }`}
                          ></div>
                        ))}
                      </div>
                      <div className="h-16 bg-gray-50 rounded p-1">
                        <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                        <div className="h-2 w-4/5 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Timetable Viewer</span>
                    <span className="text-xs text-gray-500">Interactive prototype with animations</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  High-fidelity interactive prototypes were developed in Figma and tested with educators to validate usability. 
                  The prototypes helped us refine complex interactions like:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>Drag-and-drop timetable adjustments</li>
                  <li>Rule violation resolution workflows</li>
                  <li>Multi-step scheduling wizards</li>
                  <li>Comparative plan evaluation tools</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-600">User Testing & Validation</h4>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded shadow-sm">
                      <div className="text-sm font-bold text-blue-700 mb-2">Usability Testing Results</div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="text-xs w-24">Task Success:</span>
                          <div className="h-2 flex-grow bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: '87%' }}></div>
                          </div>
                          <span className="text-xs ml-2">87%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs w-24">Time on Task:</span>
                          <div className="h-2 flex-grow bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                          <span className="text-xs ml-2">-35%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs w-24">Error Rate:</span>
                          <div className="h-2 flex-grow bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 rounded-full" style={{ width: '12%' }}></div>
                          </div>
                          <span className="text-xs ml-2">12%</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <div className="text-sm font-bold text-blue-700 mb-2">Key Findings</div>
                      <ul className="text-xs space-y-1 text-gray-600">
                        <li>• Administrators preferred calendar view over list view</li>
                        <li>• Color-coding was essential for quick status recognition</li>
                        <li>• Users struggled with multi-level rule creation</li>
                        <li>• Mobile usage was higher than anticipated (36%)</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <div className="text-sm font-bold text-blue-700 mb-2">Design Iterations</div>
                      <div className="text-xs space-y-1 text-gray-600">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <span>Simplified rule creation wizard</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <span>Enhanced mobile calendar view</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <span>Added bulk action capabilities</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <span>Improved error visualization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  User testing with 12 school administrators and 8 ministry officials provided critical insights that drove design refinements.
                  We conducted moderated usability sessions followed by qualitative interviews to understand pain points and opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Solution section */}
        <section className="my-12">
          {/* ... existing code ... */}
        </section>
        
        {/* Lessons Learned */}
        <section className="mb-20">
          <CaseStudyHeader>
            Lessons Learned
          </CaseStudyHeader>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg mb-6">
              The AIP project provided valuable insights that have informed my approach to complex system design:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Key Challenges</h3>
                
                <div className="mb-4 border-l-4 border-amber-500 pl-4 py-2">
                  <h4 className="font-bold mb-1">Complex Constraint Management</h4>
                  <p className="text-sm">Balancing the need for standardization across programs with flexibility for local contexts proved more complex than initially anticipated.</p>
                </div>
                
                <div className="mb-4 border-l-4 border-amber-500 pl-4 py-2">
                  <h4 className="font-bold mb-1">Stakeholder Alignment</h4>
                  <p className="text-sm">Coordinating between program administrators, school principals, and teachers required careful communication plans and change management.</p>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-4 py-2">
                  <h4 className="font-bold mb-1">Performance Optimization</h4>
                  <p className="text-sm">The complexity of scheduling algorithms required significant optimization to deliver results in a timely manner for larger schools.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">What I Would Do Differently</h3>
                
                <div className="mb-4 border-l-4 border-green-500 pl-4 py-2">
                  <h4 className="font-bold mb-1">Earlier User Testing</h4>
                  <p className="text-sm">Involving end users earlier in the process would have identified usability challenges sooner and improved adoption rates.</p>
                </div>
                
                <div className="mb-4 border-l-4 border-green-500 pl-4 py-2">
                  <h4 className="font-bold mb-1">Incremental Rollout</h4>
                  <p className="text-sm">A more phased approach to deployment would have allowed for iterative improvements based on real-world usage.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h4 className="font-bold mb-1">Enhanced Data Visualization</h4>
                  <p className="text-sm">More sophisticated data visualization tools would have made it easier for administrators to identify optimization opportunities.</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Design Principles Reinforced</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Progressive Disclosure</h4>
                <p className="text-sm">Revealing complexity gradually allowed users to navigate the system confidently despite its sophistication.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Contextual Assistance</h4>
                <p className="text-sm">Providing help and guidance at the point of need significantly reduced training requirements.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Adaptive Interfaces</h4>
                <p className="text-sm">Different user roles required tailored interfaces to focus on their specific needs and responsibilities.</p>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-2">The Biggest Takeaway</h3>
              <p>
                The most significant lesson from this project was that even the most complex systems can be made approachable through thoughtful information architecture and workflow design. By creating clear mental models and providing appropriate feedback mechanisms, users can successfully navigate and control highly sophisticated processes.
              </p>
            </div>
          </div>
        </section>
        
        {/* Conclusion */}
        <section className="mb-20">
          <CaseStudyHeader>
            Conclusion
          </CaseStudyHeader>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg mb-6">
              The Academic Implementation Planner represents a successful transformation of a complex, manual process into an intuitive, efficient system that empowers educational administrators to create optimal schedules while respecting diverse requirements and constraints.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold mb-4">Project Achievements</h3>
                <p className="mb-4">
                  Beyond the measurable metrics of success, this project demonstrated how thoughtful UX design could tackle challenging optimization problems while keeping humans at the center of the process. The system balanced automation with manual control, providing powerful tools without removing human judgment and expertise.
                </p>
                <p>
                  By focusing on clear information architecture, intuitive workflows, and meaningful visualizations, we created a system that not only solved the technical challenge of schedule optimization but did so in a way that was accessible and empowering for all stakeholders.
                </p>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">My Role</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Led user research and requirements gathering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Designed information architecture and user workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Created wireframes and interactive prototypes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Collaborated with developers on implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Conducted user testing and iterative refinement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Developed training materials and documentation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold mb-4">Future Directions</h3>
              <p className="mb-4">
                The success of the AIP system has opened possibilities for expanded functionality in future iterations:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Machine Learning Integration</h4>
                  <p className="text-sm">Incorporating predictive analytics to suggest optimizations based on historical scheduling patterns and outcomes.</p>
                </div>
                
                <div className="border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Mobile Experience</h4>
                  <p className="text-sm">Expanding the platform with dedicated mobile apps for teachers and administrators to view and manage schedules on the go.</p>
                </div>
                
                <div className="border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Student Portal</h4>
                  <p className="text-sm">Creating interfaces for students to access personalized schedules and receive notifications about changes or special events.</p>
                </div>
                
                <div className="border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Resource Analytics</h4>
                  <p className="text-sm">Enhanced reporting tools to analyze resource utilization and identify opportunities for efficiency improvements.</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg text-center">
                <p className="italic font-medium">
                  "The AIP system has revolutionized how we approach academic scheduling, saving countless hours while producing better results. It's become an essential tool in our educational planning process."
                </p>
                <p className="mt-2 font-semibold">— Director of Academic Programs</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 