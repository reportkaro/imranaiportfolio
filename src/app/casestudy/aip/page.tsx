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
            <CaseStudyHeader level="h1">
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
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Role</h3>
                <p>Lead Product Designer</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Organization</h3>
                <p>NewGlobe Education</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Technologies</h3>
                <p>React, Node.js, PostgreSQL, Optimization Algorithms</p>
              </div>
            </div>
            
            <p className="text-lg mb-6">
              Prior to this solution, creating timetables was a manual, error-prone process that couldn't effectively support complex teaching models, resulting in inefficient resource allocation and limited flexibility in instructional delivery.
            </p>
            
            <p className="text-lg">
              As the product designer on this project, I collaborated closely with our product manager, stakeholders from Academics, Schools, and Technology teams to design an intuitive solution that automated the generation of conflict-free teaching schedules while accommodating program-specific requirements.
            </p>
          </div>
          
          <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg overflow-hidden shadow-md relative mb-6">
            <div className="relative w-full h-full">
              {/* Timetable visualization */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-5 gap-1 p-4">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`rounded ${
                      i % 7 === 0 ? 'bg-blue-200' : 
                      i % 5 === 0 ? 'bg-indigo-200' : 
                      i % 3 === 0 ? 'bg-purple-200' :
                      'bg-gray-100'
                    } shadow-sm flex items-center justify-center text-xs font-medium`}
                  >
                    {i % 7 === 0 ? 'Math' : 
                     i % 5 === 0 ? 'Sci' : 
                     i % 3 === 0 ? 'Eng' : ''}
                  </div>
                ))}
              </div>
              
              {/* Dashboard elements */}
              <div className="absolute top-0 left-0 w-full h-12 bg-white border-b flex items-center px-4">
                <div className="w-48 h-6 bg-blue-500 rounded-md mr-4"></div>
                <div className="w-20 h-6 bg-gray-200 rounded-md mr-2"></div>
                <div className="w-20 h-6 bg-gray-200 rounded-md mr-2"></div>
                <div className="ml-auto w-8 h-8 rounded-full bg-gray-300"></div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                <p className="text-sm font-medium">AIP Dashboard</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Challenge */}
        <section className="mb-20">
          <CaseStudyHeader>
            The Challenge
          </CaseStudyHeader>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-6">
              NewGlobe's education programs were growing rapidly, with increasingly complex teaching models:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex">
                <span className="font-bold mr-2">Scale:</span>
                <span>Supporting variable numbers of streams per grade</span>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">Flexibility:</span>
                <span>Accommodating specialist teaching models, multigrade classrooms, and cross-grade ability grouping</span>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">Optimization:</span>
                <span>Maximizing teacher utilization across multiple streams and grades</span>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">Constraints:</span>
                <span>Managing limited textbook resources with book-sharing requirements</span>
              </li>
            </ul>
            
            <p className="text-lg">
              The existing manual process required countless hours of work from multiple teams, with different timetables needed for various teaching models. It couldn't account for teacher specializations or optimize resource allocation effectively.
            </p>
          </div>
        </section>
        
        {/* User Research & Problem Definition */}
        <section className="mb-20">
          <CaseStudyHeader>
            User Research & Problem Definition
          </CaseStudyHeader>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-6">
              I conducted extensive user research to understand the pain points and workflows of different stakeholders:
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Key Research Methods</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-700">Stakeholder Interviews</h4>
                  <ul className="space-y-2">
                    <li>12 interviews conducted across 3 key stakeholder groups</li>
                    <li>Identified goals, frustrations, and workflow challenges</li>
                    <li>Documented specific scheduling requirements and constraints</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-700">Process Shadowing</h4>
                  <ul className="space-y-2">
                    <li>5 full days observing the timetable creation process</li>
                    <li>Mapped the end-to-end workflow from academic planning to publication</li>
                    <li>Identified bottlenecks and inefficiencies in the current process</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-700">Collaborative Workshops</h4>
                  <ul className="space-y-2">
                    <li>Facilitated cross-functional rule identification sessions</li>
                    <li>Created journey maps with stakeholders to visualize the ideal process</li>
                    <li>Prioritized requirements through group exercises</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-700">Existing System Analysis</h4>
                  <ul className="space-y-2">
                    <li>Audited the legacy scheduling system</li>
                    <li>Reviewed documentation and data flows</li>
                    <li>Identified technical limitations and opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-700">User Personas</h3>
              <p className="mb-4">Through this research, I developed three key personas:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                  <div className="w-16 h-16 bg-blue-200 rounded-full mb-3 flex items-center justify-center">
                    <span className="text-blue-800 font-bold">AD</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Academic Director</h4>
                  <p className="text-sm font-medium text-blue-700 mb-2">Anne, 38</p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold mb-1">Goals:</h5>
                    <p className="text-sm">Ensure curriculum quality, optimize instructional time, adapt schedules to program needs</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold mb-1">Pain Points:</h5>
                    <p className="text-sm italic">"We spend more time creating timetables than we do reviewing their quality."</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                  <div className="w-16 h-16 bg-indigo-200 rounded-full mb-3 flex items-center justify-center">
                    <span className="text-indigo-800 font-bold">DP</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Digital Production</h4>
                  <p className="text-sm font-medium text-blue-700 mb-2">Jake, 32</p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold mb-1">Goals:</h5>
                    <p className="text-sm">Generate error-free timetables efficiently, minimize manual work</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold mb-1">Pain Points:</h5>
                    <p className="text-sm italic">"When teacher distribution changes, we have to recreate timetables from scratch."</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                  <div className="w-16 h-16 bg-purple-200 rounded-full mb-3 flex items-center justify-center">
                    <span className="text-purple-800 font-bold">ST</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Schools Team</h4>
                  <p className="text-sm font-medium text-blue-700 mb-2">Laura, 42</p>
                  <div className="mb-3">
                    <h5 className="text-sm font-semibold mb-1">Goals:</h5>
                    <p className="text-sm">Optimize teacher assignments, ensure appropriate specialist rotations</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold mb-1">Pain Points:</h5>
                    <p className="text-sm italic">"We need teachers teaching what they're qualified for."</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Key Pain Points Identified</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 border-b text-left text-sm font-medium text-gray-700">Process Issues</th>
                      <th className="px-4 py-3 border-b text-left text-sm font-medium text-gray-700">Technical Limitations</th>
                      <th className="px-4 py-3 border-b text-left text-sm font-medium text-gray-700">Resource Constraints</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 border-b text-sm">Manual timetable creation takes 2-3 weeks</td>
                      <td className="px-4 py-3 border-b text-sm">Current system cannot handle >12 teaching tracks</td>
                      <td className="px-4 py-3 border-b text-sm">Textbook sharing not optimized (12% higher costs)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 border-b text-sm">Each specialist rotation requires separate configuration</td>
                      <td className="px-4 py-3 border-b text-sm">No way to verify rule compliance</td>
                      <td className="px-4 py-3 border-b text-sm">Teacher utilization at only 68% of optimal capacity</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b text-sm">Changes require restarting entire process</td>
                      <td className="px-4 py-3 border-b text-sm">23% of schedules contain errors</td>
                      <td className="px-4 py-3 border-b text-sm">Specialist teachers often double-booked</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 border-b text-sm">86% of staff time spent on data entry</td>
                      <td className="px-4 py-3 border-b text-sm">Teacher specializations not considered</td>
                      <td className="px-4 py-3 border-b text-sm">Physical classroom constraints ignored</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-700">Design Requirements</h3>
              <p className="mb-4">Based on this research, I established clear design requirements to guide the solution:</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 border-b text-left text-sm font-medium text-gray-700">Requirement Category</th>
                      <th className="px-4 py-3 border-b text-left text-sm font-medium text-gray-700">Requirement</th>
                      <th className="px-4 py-3 border-b text-left text-sm font-medium text-gray-700">Description</th>
                      <th className="px-4 py-3 border-b text-left text-sm font-medium text-gray-700">User Need Addressed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 border-b text-sm font-medium">Plan Generation & Management</td>
                      <td className="px-4 py-3 border-b text-sm">Automated Timetable Generation</td>
                      <td className="px-4 py-3 border-b text-sm">System must generate conflict-free timetables based on defined rules and constraints</td>
                      <td className="px-4 py-3 border-b text-sm">Digital Production spends 2-3 weeks manually creating timetables</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 border-b text-sm font-medium">Rule Violation Management</td>
                      <td className="px-4 py-3 border-b text-sm">Violation Categorization</td>
                      <td className="px-4 py-3 border-b text-sm">Clearly categorize by severity (Hard/Medium/Soft)</td>
                      <td className="px-4 py-3 border-b text-sm">23% of schedules contain errors when created manually</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b text-sm font-medium">View Flexibility</td>
                      <td className="px-4 py-3 border-b text-sm">Multiple Perspectives</td>
                      <td className="px-4 py-3 border-b text-sm">Support both grade/stream view and teacher view</td>
                      <td className="px-4 py-3 border-b text-sm">Different stakeholders need different perspectives</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 border-b text-sm font-medium">Resource Optimization</td>
                      <td className="px-4 py-3 border-b text-sm">Book-Sharing Scheduling</td>
                      <td className="px-4 py-3 border-b text-sm">Support constraints for textbook sharing between grades</td>
                      <td className="px-4 py-3 border-b text-sm">Textbook sharing not optimized, 12% higher procurement costs</td>
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
              <h3 className="text-xl font-bold mb-4 text-blue-700">1. Information Architecture</h3>
              <p className="text-lg mb-4">
                The first challenge was organizing the complexity of requirements in a way that made sense to users. I created an information hierarchy that allowed users to:
              </p>
              <ul className="space-y-2 mb-4 pl-6 list-disc">
                <li>Define teaching models at program level</li>
                <li>Customize options at school level</li>
                <li>Manage teacher assignments and specializations</li>
                <li>Set constraints for resource management</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-700">User Journey Mapping</h3>
              <p className="text-lg mb-4">
                I created detailed user journey maps to understand the end-to-end experience and identify opportunities for improvement:
              </p>

              {/* User Journey Map Visualization */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6 overflow-hidden">
                <h4 className="text-sm font-semibold text-center mb-6 text-blue-800">Timetable Generation Journey</h4>
                <div className="relative">
                  {/* Journey Steps */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gray-300"></div>
                  <div className="flex justify-between mb-16 relative">
                    {/* Step 1 */}
                    <div className="text-center w-1/6">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center mx-auto mb-2 relative z-10">1</div>
                      <div className="text-sm font-medium">School Selection</div>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="text-center w-1/6">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center mx-auto mb-2 relative z-10">2</div>
                      <div className="text-sm font-medium">Plan Generation</div>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="text-center w-1/6">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center mx-auto mb-2 relative z-10">3</div>
                      <div className="text-sm font-medium">Review Violations</div>
                    </div>
                    
                    {/* Step 4 */}
                    <div className="text-center w-1/6">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center mx-auto mb-2 relative z-10">4</div>
                      <div className="text-sm font-medium">Make Adjustments</div>
                    </div>
                    
                    {/* Step 5 */}
                    <div className="text-center w-1/6">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center mx-auto mb-2 relative z-10">5</div>
                      <div className="text-sm font-medium">Final Approval</div>
                    </div>
                    
                    {/* Step 6 */}
                    <div className="text-center w-1/6">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center mx-auto mb-2 relative z-10">6</div>
                      <div className="text-sm font-medium">Publish Plan</div>
                    </div>
                  </div>
                  
                  {/* Pain Points and Opportunities */}
                  <div className="grid grid-cols-6 gap-2">
                    <div className="border border-red-200 bg-red-50 p-2 rounded">
                      <h5 className="text-xs font-bold text-red-700 mb-1">Pain Point</h5>
                      <p className="text-xs">Difficult to find relevant schools</p>
                    </div>
                    
                    <div className="border border-red-200 bg-red-50 p-2 rounded">
                      <h5 className="text-xs font-bold text-red-700 mb-1">Pain Point</h5>
                      <p className="text-xs">Anxiety during long wait times</p>
                    </div>
                    
                    <div className="border border-red-200 bg-red-50 p-2 rounded">
                      <h5 className="text-xs font-bold text-red-700 mb-1">Pain Point</h5>
                      <p className="text-xs">Overwhelmed by violation quantity</p>
                    </div>
                    
                    <div className="border border-red-200 bg-red-50 p-2 rounded">
                      <h5 className="text-xs font-bold text-red-700 mb-1">Pain Point</h5>
                      <p className="text-xs">Manual adjustments are complex</p>
                    </div>
                    
                    <div className="border border-red-200 bg-red-50 p-2 rounded">
                      <h5 className="text-xs font-bold text-red-700 mb-1">Pain Point</h5>
                      <p className="text-xs">No clear criteria for completion</p>
                    </div>
                    
                    <div className="border border-red-200 bg-red-50 p-2 rounded">
                      <h5 className="text-xs font-bold text-red-700 mb-1">Pain Point</h5>
                      <p className="text-xs">Lack of distribution confirmation</p>
                    </div>
                    
                    <div className="border border-green-200 bg-green-50 p-2 rounded">
                      <h5 className="text-xs font-bold text-green-700 mb-1">Opportunity</h5>
                      <p className="text-xs">Improved filtering system</p>
                    </div>
                    
                    <div className="border border-green-200 bg-green-50 p-2 rounded">
                      <h5 className="text-xs font-bold text-green-700 mb-1">Opportunity</h5>
                      <p className="text-xs">Detailed progress indicators</p>
                    </div>
                    
                    <div className="border border-green-200 bg-green-50 p-2 rounded">
                      <h5 className="text-xs font-bold text-green-700 mb-1">Opportunity</h5>
                      <p className="text-xs">Categorization by severity</p>
                    </div>
                    
                    <div className="border border-green-200 bg-green-50 p-2 rounded">
                      <h5 className="text-xs font-bold text-green-700 mb-1">Opportunity</h5>
                      <p className="text-xs">Guided adjustment workflows</p>
                    </div>
                    
                    <div className="border border-green-200 bg-green-50 p-2 rounded">
                      <h5 className="text-xs font-bold text-green-700 mb-1">Opportunity</h5>
                      <p className="text-xs">Clear approval checklist</p>
                    </div>
                    
                    <div className="border border-green-200 bg-green-50 p-2 rounded">
                      <h5 className="text-xs font-bold text-green-700 mb-1">Opportunity</h5>
                      <p className="text-xs">Enhanced success confirmation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-lg">
                This journey map helped identify key emotional pain points and design opportunities at each stage of the process, guiding the creation of a workflow that minimizes frustration and provides clear guidance throughout.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-700">2. Wireframing & Prototyping</h3>
              <p className="text-lg mb-4">
                I developed progressive wireframes for each user journey:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg aspect-video flex flex-col justify-center shadow-sm">
                  <div className="h-6 bg-gray-300 w-1/2 mx-auto mb-2 rounded"></div>
                  <div className="flex space-x-1 mb-2 px-2">
                    <div className="h-3 bg-gray-200 flex-1 rounded"></div>
                    <div className="h-3 bg-gray-200 flex-1 rounded"></div>
                    <div className="h-3 bg-gray-200 flex-1 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 px-2">
                    <div className="h-16 bg-gray-200 rounded p-1">
                      <div className="h-2 w-3/4 bg-gray-300 rounded mb-1"></div>
                      <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
                    </div>
                    <div className="h-16 bg-gray-200 rounded p-1">
                      <div className="h-2 w-3/4 bg-gray-300 rounded mb-1"></div>
                      <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
                    </div>
                    <div className="h-16 bg-gray-200 rounded p-1">
                      <div className="h-2 w-3/4 bg-gray-300 rounded mb-1"></div>
                      <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
                    </div>
                    <div className="h-16 bg-gray-200 rounded p-1">
                      <div className="h-2 w-3/4 bg-gray-300 rounded mb-1"></div>
                      <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <p className="text-xs text-center mt-2">Program Setup Wireframe</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg aspect-video flex flex-col justify-center shadow-sm">
                  <div className="h-6 bg-gray-300 w-1/2 mx-auto mb-2 rounded"></div>
                  <div className="h-24 bg-gray-200 m-2 rounded flex flex-col p-2">
                    <div className="grid grid-cols-4 gap-1 mb-2">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="h-3 bg-gray-300 rounded"></div>
                      ))}
                    </div>
                    <div className="flex space-x-1 mt-auto">
                      <div className="h-4 w-6 bg-gray-300 rounded"></div>
                      <div className="h-4 w-6 bg-gray-300 rounded"></div>
                      <div className="h-4 w-6 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-blue-200 w-1/3 mx-auto mt-2 rounded"></div>
                  <p className="text-xs text-center mt-2">Resource Constraints Wireframe</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg aspect-video flex flex-col justify-center shadow-sm">
                  <div className="h-6 bg-gray-300 w-1/2 mx-auto mb-2 rounded"></div>
                  <div className="grid grid-cols-5 grid-rows-6 gap-1 p-2">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-4 ${i % 8 === 0 ? 'bg-blue-200' : i % 5 === 0 ? 'bg-indigo-200' : i % 3 === 0 ? 'bg-purple-200' : 'bg-gray-200'} rounded-sm`}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-2 px-2">
                    <div className="h-4 w-16 bg-blue-300 rounded mr-1"></div>
                    <div className="h-4 w-16 bg-gray-300 rounded"></div>
                  </div>
                  <p className="text-xs text-center mt-1">Schedule Generator Wireframe</p>
                </div>
              </div>
              <p className="text-lg">
                These wireframes went through several iterations based on user feedback, with a focus on simplifying complex workflows and making the system approachable for non-technical users.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-700">3. Visual Design System</h3>
              <p className="text-lg mb-4">
                I developed a visual design system that:
              </p>
              <ul className="space-y-2 mb-4 pl-6 list-disc">
                <li>Used color-coding to differentiate subjects and teaching models</li>
                <li>Created clear visual hierarchy for different levels of information</li>
                <li>Ensured consistency with NewGlobe's existing design language</li>
                <li>Incorporated accessible design patterns for diverse user groups</li>
              </ul>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg text-center">
                  <div className="w-full h-6 bg-blue-500 rounded mb-2"></div>
                  <p className="text-xs">Primary Actions</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg text-center">
                  <div className="w-full h-6 bg-indigo-500 rounded mb-2"></div>
                  <p className="text-xs">System Messages</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg text-center">
                  <div className="w-full h-6 bg-green-500 rounded mb-2"></div>
                  <p className="text-xs">Success States</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg text-center">
                  <div className="w-full h-6 bg-amber-500 rounded mb-2"></div>
                  <p className="text-xs">Warnings</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-700">4. User Testing & Iteration</h3>
              <p className="text-lg mb-4">
                The solution underwent extensive testing with real users:
              </p>
              <ul className="space-y-2 mb-4 pl-6 list-disc">
                <li>Usability testing with school administrators in multiple countries</li>
                <li>Validation sessions with academic teams using real program requirements</li>
                <li>Performance testing to ensure the system could handle all constraints</li>
                <li>Iterative refinement based on observed pain points</li>
              </ul>
              <p className="text-lg">
                Each round of testing produced valuable insights that informed design changes, particularly around making complex constraint configuration more intuitive and providing clearer feedback on optimization results.
              </p>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4 text-blue-700">End-to-End Publication Process</h3>
              <p className="text-lg mb-6">
                I designed a comprehensive flow from data preparation through to plan distribution:
              </p>
              
              {/* Process Flow Visualization */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                {/* Phase 1: Preparation */}
                <div className="mb-8">
                  <div className="bg-blue-100 text-blue-800 py-2 px-4 rounded-t-lg font-medium">Preparation Phase</div>
                  <div className="border border-blue-200 rounded-b-lg bg-white p-4">
                    <div className="flex flex-col items-center md:flex-row md:justify-between">
                      <div className="flex flex-col items-center mb-4 md:mb-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full border-2 border-blue-300 flex items-center justify-center text-blue-700 font-bold mb-2">A1</div>
                        <div className="text-xs text-center">Gather Course Data</div>
                      </div>
                      <div className="hidden md:block w-8 h-0.5 bg-blue-200"></div>
                      <div className="flex flex-col items-center mb-4 md:mb-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full border-2 border-blue-300 flex items-center justify-center text-blue-700 font-bold mb-2">A2</div>
                        <div className="text-xs text-center">Define Program Rules</div>
                      </div>
                      <div className="hidden md:block w-8 h-0.5 bg-blue-200"></div>
                      <div className="flex flex-col items-center mb-4 md:mb-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full border-2 border-blue-300 flex items-center justify-center text-blue-700 font-bold mb-2">A3</div>
                        <div className="text-xs text-center">Configure Teacher Specializations</div>
                      </div>
                      <div className="hidden md:block w-8 h-0.5 bg-blue-200"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full border-2 border-blue-300 flex items-center justify-center text-blue-700 font-bold mb-2">A4</div>
                        <div className="text-xs text-center">Set School Parameters</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center my-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Phase 2: Generation */}
                <div className="mb-8">
                  <div className="bg-indigo-100 text-indigo-800 py-2 px-4 rounded-t-lg font-medium">Generation Phase</div>
                  <div className="border border-indigo-200 rounded-b-lg bg-white p-4">
                    <div className="flex flex-col items-center md:flex-row md:justify-between">
                      <div className="flex flex-col items-center mb-4 md:mb-0">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full border-2 border-indigo-300 flex items-center justify-center text-indigo-700 font-bold mb-2">B1</div>
                        <div className="text-xs text-center">Access School List</div>
                      </div>
                      <div className="hidden md:block w-8 h-0.5 bg-indigo-200"></div>
                      <div className="flex flex-col items-center mb-4 md:mb-0">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full border-2 border-indigo-300 flex items-center justify-center text-indigo-700 font-bold mb-2">B2</div>
                        <div className="text-xs text-center">Apply Filters</div>
                      </div>
                      <div className="hidden md:block w-8 h-0.5 bg-indigo-200"></div>
                      <div className="flex flex-col items-center mb-4 md:mb-0">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full border-2 border-indigo-300 flex items-center justify-center text-indigo-700 font-bold mb-2">B3</div>
                        <div className="text-xs text-center">Select School(s)</div>
                      </div>
                      <div className="hidden md:block w-8 h-0.5 bg-indigo-200"></div>
                      <div className="flex flex-col items-center mb-4 md:mb-0">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full border-2 border-indigo-300 flex items-center justify-center text-indigo-700 font-bold mb-2">B4</div>
                        <div className="text-xs text-center">Generate Plan</div>
                      </div>
                      <div className="hidden md:block w-8 h-0.5 bg-indigo-200"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full border-2 border-indigo-300 flex items-center justify-center text-indigo-700 font-bold mb-2">B5</div>
                        <div className="text-xs text-center">Processing Algorithm</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center my-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Phase 3: Review */}
                <div className="mb-8">
                  <div className="bg-purple-100 text-purple-800 py-2 px-4 rounded-t-lg font-medium">Review Phase</div>
                  <div className="border border-purple-200 rounded-b-lg bg-white p-4">
                    <div className="flex flex-col items-center">
                      <div className="flex flex-col items-center mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full border-2 border-purple-300 flex items-center justify-center text-purple-700 font-bold mb-2">C1</div>
                        <div className="text-xs text-center">View Generated Plan</div>
                      </div>
                      
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-2">
                        <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      
                      <div className="flex flex-col items-center mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full border-2 border-purple-300 flex items-center justify-center text-purple-700 font-bold mb-2">C2</div>
                        <div className="text-xs text-center">Analyze Rule Violations</div>
                      </div>
                      
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-2">
                        <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      
                      <div className="flex flex-col items-center mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full border-2 border-purple-300 flex items-center justify-center text-purple-700 font-bold mb-2">C3</div>
                        <div className="text-xs text-center">Hard Rule Violations?</div>
                      </div>
                      
                      <div className="flex justify-center space-x-16 w-full mb-4">
                        <div className="flex flex-col items-center">
                          <div className="text-xs text-center mb-2">Yes</div>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 18L8 12L14 6" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          
                          <div className="flex flex-col items-center mt-4">
                            <div className="w-10 h-10 bg-purple-100 rounded-full border-2 border-purple-300 flex items-center justify-center text-purple-700 font-bold mb-1 text-xs">C4</div>
                            <div className="text-xs text-center">Modify Inputs</div>
                          </div>
                          
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-2 transform -rotate-90">
                            <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          
                          <div className="text-xs text-center">Back to B4</div>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <div className="text-xs text-center mb-1">No</div>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 6L16 12L10 18" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          
                          <div className="flex flex-col items-center">
                            <div className="text-xs text-center mb-1">No</div>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 6L16 12L10 18" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div className="text-xs text-center mt-1">To C4</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="flex justify-center my-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Final Phases in a row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phase 4: Publication */}
                  <div>
                    <div className="bg-green-100 text-green-800 py-2 px-4 rounded-t-lg font-medium">Publication Phase</div>
                    <div className="border border-green-200 rounded-b-lg bg-white p-4">
                      <div className="flex flex-col items-center">
                        {Array.from({length: 5}).map((_, i) => (
                          <React.Fragment key={i}>
                            <div className="flex flex-col items-center mb-2">
                              <div className="w-12 h-12 bg-green-100 rounded-full border-2 border-green-300 flex items-center justify-center text-green-700 font-bold mb-1">D{i+1}</div>
                              <div className="text-xs text-center">
                                {i === 0 && "Final Review"}
                                {i === 1 && "Click Publish"}
                                {i === 2 && "Confirm Publication"}
                                {i === 3 && "System Processes"}
                                {i === 4 && "Status Changes"}
                              </div>
                            </div>
                            {i < 4 && (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-1">
                                <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Phase 5: Distribution */}
                  <div>
                    <div className="bg-amber-100 text-amber-800 py-2 px-4 rounded-t-lg font-medium">Distribution Phase</div>
                    <div className="border border-amber-200 rounded-b-lg bg-white p-4">
                      <div className="flex flex-col items-center">
                        {Array.from({length: 5}).map((_, i) => (
                          <React.Fragment key={i}>
                            <div className="flex flex-col items-center mb-2">
                              <div className="w-12 h-12 bg-amber-100 rounded-full border-2 border-amber-300 flex items-center justify-center text-amber-700 font-bold mb-1">E{i+1}</div>
                              <div className="text-xs text-center">
                                {i === 0 && "Move to Production"}
                                {i === 1 && "School Leader App Sync"}
                                {i === 2 && "Teacher Devices Sync"}
                                {i === 3 && "Teachers Receive Schedules"}
                                {i === 4 && "Lesson Delivery Begins"}
                              </div>
                            </div>
                            {i < 4 && (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-1">
                                <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-lg">
                This comprehensive process flow helped all stakeholders understand their role in the timetable creation process, from initial setup through to final distribution to schools and teachers.
              </p>
            </div>
          </div>
        </section>
        
        {/* The Solution */}
        <section className="mb-20">
          <CaseStudyHeader>
            The Solution
          </CaseStudyHeader>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg mb-6">
              The final AIP solution consisted of several integrated modules:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-blue-200 p-5 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Program Configuration</h4>
                <p>
                  A flexible interface allowing academic teams to define teaching models, subject requirements, and program-specific constraints. This served as a template for schools within each program.
                </p>
              </div>
              
              <div className="border border-blue-200 p-5 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Resource Manager</h4>
                <p>
                  A system for defining and managing available resources, including teacher specializations, textbook availability, and shared teaching spaces.
                </p>
              </div>
              
              <div className="border border-blue-200 p-5 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Schedule Generator</h4>
                <p>
                  The core optimization engine that processed all constraints and generated optimized timetables, providing clear feedback on conflict resolution and optimization quality.
                </p>
              </div>
              
              <div className="border border-blue-200 p-5 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Distribution System</h4>
                <p>
                  Tools for exporting, printing, and distributing timetables to schools, teachers, and monitoring systems with appropriate formatting for each audience.
                </p>
              </div>
            </div>
            
            <p className="text-lg mb-6">
              Key design features included:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="bg-blue-50 p-3 rounded-md">
                <span className="font-bold">Visual Timetable Builder:</span> Intuitive drag-and-drop interface for manual adjustments after automatic generation
              </li>
              <li className="bg-blue-50 p-3 rounded-md">
                <span className="font-bold">Constraint Visualization:</span> Clear identification of scheduling conflicts with suggested resolutions
              </li>
              <li className="bg-blue-50 p-3 rounded-md">
                <span className="font-bold">Resource Optimization Dashboard:</span> Visual metrics showing resource utilization and efficiency
              </li>
              <li className="bg-blue-50 p-3 rounded-md">
                <span className="font-bold">Bulk Operations:</span> Tools for handling changes across multiple schools and teaching models
              </li>
              <li className="bg-blue-50 p-3 rounded-md">
                <span className="font-bold">Template System:</span> Reusable configurations to streamline setup for similar schools
              </li>
            </ul>
          </div>
          
          <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg overflow-hidden shadow-md relative mb-8">
            <div className="relative w-full h-full">
              {/* Schedule Interface Header */}
              <div className="absolute top-0 left-0 w-full h-12 bg-white shadow-sm flex items-center px-4">
                <div className="w-24 h-8 bg-blue-600 rounded-md text-white text-xs flex items-center justify-center font-medium mr-4">Dashboard</div>
                <div className="w-24 h-8 bg-blue-100 text-blue-800 rounded-md text-xs flex items-center justify-center font-medium mr-2">Schedules</div>
                <div className="w-24 h-8 bg-gray-100 text-gray-800 rounded-md text-xs flex items-center justify-center font-medium mr-2">Resources</div>
                <div className="w-24 h-8 bg-gray-100 text-gray-800 rounded-md text-xs flex items-center justify-center font-medium">Reports</div>
                <div className="ml-auto flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-800">SA</div>
                </div>
              </div>
              
              {/* Left Sidebar */}
              <div className="absolute top-12 left-0 bottom-0 w-48 bg-gray-50 border-r p-3">
                <div className="w-full h-8 bg-blue-500 rounded mb-3 text-white text-xs flex items-center justify-center font-medium">Generate Schedule</div>
                <div className="mb-3">
                  <div className="h-4 bg-gray-300 w-3/4 rounded-sm mb-2"></div>
                  <div className="h-6 bg-white border rounded-md mb-1 px-2 text-xs flex items-center">Grade 3</div>
                  <div className="h-6 bg-white border rounded-md mb-1 px-2 text-xs flex items-center">Grade 4</div>
                  <div className="h-6 bg-white border rounded-md mb-1 px-2 text-xs flex items-center">Grade 5</div>
                  <div className="h-6 bg-blue-100 border border-blue-300 rounded-md px-2 text-xs flex items-center font-medium text-blue-800">Grade 6</div>
                </div>
                <div>
                  <div className="h-4 bg-gray-300 w-1/2 rounded-sm mb-2"></div>
                  <div className="h-6 bg-white border rounded-md mb-1 px-2 text-xs flex items-center">Stream A</div>
                  <div className="h-6 bg-blue-100 border border-blue-300 rounded-md px-2 text-xs flex items-center font-medium text-blue-800">Stream B</div>
                </div>
              </div>
              
              {/* Main Content - Schedule Timetable */}
              <div className="absolute top-12 left-48 right-0 bottom-0 p-4 overflow-hidden">
                <div className="w-full h-full">
                  <div className="text-xs font-semibold mb-2 flex items-center">
                    <span>Grade 6 - Stream B Schedule</span>
                    <span className="ml-auto bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Optimized</span>
                  </div>
                  
                  {/* Days of Week Header */}
                  <div className="grid grid-cols-6 gap-1 mb-1">
                    <div className="text-center bg-gray-100 rounded-sm p-1 text-xs font-medium">Time</div>
                    <div className="text-center bg-gray-100 rounded-sm p-1 text-xs font-medium">Monday</div>
                    <div className="text-center bg-gray-100 rounded-sm p-1 text-xs font-medium">Tuesday</div>
                    <div className="text-center bg-gray-100 rounded-sm p-1 text-xs font-medium">Wednesday</div>
                    <div className="text-center bg-gray-100 rounded-sm p-1 text-xs font-medium">Thursday</div>
                    <div className="text-center bg-gray-100 rounded-sm p-1 text-xs font-medium">Friday</div>
                  </div>
                  
                  {/* Timetable Grid */}
                  <div className="grid grid-cols-6 grid-rows-5 gap-1">
                    {/* Time slots */}
                    <div className="text-center bg-gray-100 rounded-sm p-1 text-xs">8:00 - 9:00</div>
                    <div className="text-center bg-gray-100 rounded-sm p-1 text-xs">9:00 - 10:00</div>
                    <div className="text-center bg-gray-100 rounded-sm p-1 text-xs">10:00 - 11:00</div>
                    <div className="text-center bg-gray-100 rounded-sm p-1 text-xs">11:00 - 12:00</div>
                    <div className="text-center bg-gray-100 rounded-sm p-1 text-xs">2:00 - 3:00</div>
                    
                    {/* Schedule content */}
                    {Array.from({ length: 25 }).map((_, i) => {
                      let bgColor = "bg-white border";
                      let subject = "";
                      let teacher = "";
                      
                      // Generate pattern of subjects based on index
                      if (i % 10 === 0 || i % 10 === 5) {
                        bgColor = "bg-blue-100 border border-blue-300";
                        subject = "Mathematics";
                        teacher = "Mr. Okoye";
                      } else if (i % 10 === 1 || i % 10 === 6) {
                        bgColor = "bg-purple-100 border border-purple-300";
                        subject = "English";
                        teacher = "Ms. Adesina";
                      } else if (i % 10 === 2 || i % 10 === 7) {
                        bgColor = "bg-green-100 border border-green-300";
                        subject = "Science";
                        teacher = "Dr. Mensah";
                      } else if (i % 10 === 3 || i % 10 === 8) {
                        bgColor = "bg-amber-100 border border-amber-300";
                        subject = "History";
                        teacher = "Mr. Nkosi";
                      } else {
                        bgColor = "bg-red-100 border border-red-300";
                        subject = "Arts";
                        teacher = "Ms. Osei";
                      }
                      
                      return (
                        <div key={i} className={`p-1 rounded-sm text-xs ${bgColor}`}>
                          <div className="font-medium">{subject}</div>
                          <div className="text-[10px] opacity-75">{teacher}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm text-sm font-medium">
                Schedule Generation Interface
              </div>
            </div>
          </div>
        </section>
        
        {/* Technical Implementation */}
        <section className="mb-20">
          <CaseStudyHeader>
            Technical Implementation
          </CaseStudyHeader>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-6">
              While my role focused on user experience design, I worked closely with engineering to ensure the technical implementation matched design requirements:
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Architecture</h3>
              
              {/* System Architecture Diagram */}
              <div className="relative bg-gray-50 p-6 rounded-lg mb-6 h-64 overflow-hidden">
                {/* Frontend Layer */}
                <div className="absolute top-4 left-4 right-4 h-14 bg-blue-100 border border-blue-300 rounded-lg flex items-center px-4 z-30">
                  <div className="font-medium text-blue-800">Frontend - React Application</div>
                  <div className="ml-auto flex space-x-2">
                    <div className="px-2 py-1 bg-blue-200 rounded text-xs">User Interface</div>
                    <div className="px-2 py-1 bg-blue-200 rounded text-xs">State Management</div>
                    <div className="px-2 py-1 bg-blue-200 rounded text-xs">Data Visualization</div>
                  </div>
                </div>
                
                {/* API Layer */}
                <div className="absolute top-24 left-4 right-4 h-14 bg-green-100 border border-green-300 rounded-lg flex items-center px-4 z-20">
                  <div className="font-medium text-green-800">Backend - Node.js API</div>
                  <div className="ml-auto flex space-x-2">
                    <div className="px-2 py-1 bg-green-200 rounded text-xs">RESTful Endpoints</div>
                    <div className="px-2 py-1 bg-green-200 rounded text-xs">Auth Services</div>
                    <div className="px-2 py-1 bg-green-200 rounded text-xs">Validation Logic</div>
                  </div>
                </div>
                
                {/* Optimization Layer */}
                <div className="absolute top-44 left-4 w-[45%] h-14 bg-purple-100 border border-purple-300 rounded-lg flex items-center px-4 z-10">
                  <div className="font-medium text-purple-800">Optimization Engine</div>
                  <div className="ml-auto flex space-x-2">
                    <div className="px-2 py-1 bg-purple-200 rounded text-xs">Constraints</div>
                    <div className="px-2 py-1 bg-purple-200 rounded text-xs">Solver</div>
                  </div>
                </div>
                
                {/* Database Layer */}
                <div className="absolute top-44 right-4 w-[45%] h-14 bg-amber-100 border border-amber-300 rounded-lg flex items-center px-4 z-10">
                  <div className="font-medium text-amber-800">PostgreSQL Database</div>
                  <div className="ml-auto flex space-x-2">
                    <div className="px-2 py-1 bg-amber-200 rounded text-xs">Data Models</div>
                    <div className="px-2 py-1 bg-amber-200 rounded text-xs">Indexes</div>
                  </div>
                </div>
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" width="100%" height="100%" fill="none">
                  <path d="M 300 18 L 300 24" stroke="#3B82F6" strokeWidth="2" />
                  <path d="M 300 38 L 300 44" stroke="#3B82F6" strokeWidth="2" />
                  <path d="M 150 58 L 150 64" stroke="#10B981" strokeWidth="2" /> 
                  <path d="M 450 58 L 450 64" stroke="#10B981" strokeWidth="2" />
                  <path d="M 150 78 L 150 84" stroke="#10B981" strokeWidth="2" />
                  <path d="M 450 78 L 450 84" stroke="#10B981" strokeWidth="2" />
                </svg>
              </div>
              
              <ul className="space-y-3 mb-4">
                <li className="flex items-baseline">
                  <span className="font-bold min-w-[120px] mr-2">Frontend:</span>
                  <span>React application with context-specific interfaces for different user roles</span>
                </li>
                <li className="flex items-baseline">
                  <span className="font-bold min-w-[120px] mr-2">Backend:</span>
                  <span>Node.js API with specialized optimization service using constraint satisfaction algorithms</span>
                </li>
                <li className="flex items-baseline">
                  <span className="font-bold min-w-[120px] mr-2">Database:</span>
                  <span>PostgreSQL with specialized schemas for different teaching models and regional variations</span>
                </li>
                <li className="flex items-baseline">
                  <span className="font-bold min-w-[120px] mr-2">Integration:</span>
                  <span>APIs connecting to school management system, teacher databases, and monitoring platforms</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-700">Key Technical Challenges</h3>
              <p className="text-lg mb-4">
                The engineering team faced several interesting challenges:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="bg-blue-50 p-3 rounded-md">
                  <span className="font-bold">Optimization Algorithm:</span> Developing a constraint solver that could handle the complexity of educational scheduling while remaining performant
                </li>
                <li className="bg-blue-50 p-3 rounded-md">
                  <span className="font-bold">Template System:</span> Creating a flexible template system that accommodated regional variations while maintaining core structure
                </li>
                <li className="bg-blue-50 p-3 rounded-md">
                  <span className="font-bold">Visualization Engine:</span> Building an interactive schedule visualization that worked across devices with varying screen sizes
                </li>
                <li className="bg-blue-50 p-3 rounded-md">
                  <span className="font-bold">Offline Support:</span> Ensuring schedules could be accessed in regions with limited connectivity
                </li>
              </ul>
              <p className="text-lg">
                My design process involved close collaboration with engineers to ensure that interface design decisions were technically feasible while meeting user needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Impact and Results */}
        <section className="mb-20">
          <CaseStudyHeader>
            Impact & Results
          </CaseStudyHeader>
          
          {/* Results Dashboard */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md mb-8">
            <div className="mb-6 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-blue-800">AIP Impact Dashboard</h3>
              <div className="flex space-x-2">
                <div className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md">Monthly</div>
                <div className="px-3 py-1 bg-white text-blue-800 text-sm rounded-md border">Quarterly</div>
                <div className="px-3 py-1 bg-white text-blue-800 text-sm rounded-md border">Yearly</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Time Saved Metric */}
              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-gray-500 font-medium">Time Saved Per Week</div>
                  <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">+15% vs last period</div>
                </div>
                <div className="text-3xl font-bold text-blue-800 mb-1">458 Hours</div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" style={{width: "82%"}}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Target: 400 hrs</span>
                  <span>82% of target</span>
                </div>
              </div>
              
              {/* Error Reduction Metric */}
              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-gray-500 font-medium">Error Reduction</div>
                  <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">+5% vs last period</div>
                </div>
                <div className="text-3xl font-bold text-blue-800 mb-1">97%</div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" style={{width: "97%"}}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Target: 85%</span>
                  <span>Exceeding target</span>
                </div>
              </div>
              
              {/* Resource Utilization Metric */}
              <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-gray-500 font-medium">Resource Utilization</div>
                  <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">+2% vs last period</div>
                </div>
                <div className="text-3xl font-bold text-blue-800 mb-1">23% Better</div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" style={{width: "85%"}}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Target: 20%</span>
                  <span>Exceeded target</span>
                </div>
              </div>
            </div>
            
            {/* Bar Chart Visualization */}
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div className="text-sm font-medium">AIP Adoption Rate by Region</div>
                <div className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Last 12 months</div>
              </div>
              
              <div className="flex h-48 items-end space-x-6 pb-2 px-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-gradient-to-t from-blue-500 to-indigo-600 rounded-t-md" style={{height: "92%"}}></div>
                  <div className="text-xs mt-2 font-medium">Nigeria</div>
                  <div className="text-xs text-gray-500">92%</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-gradient-to-t from-blue-400 to-indigo-500 rounded-t-md" style={{height: "88%"}}></div>
                  <div className="text-xs mt-2 font-medium">Kenya</div>
                  <div className="text-xs text-gray-500">88%</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-gradient-to-t from-blue-400 to-indigo-500 rounded-t-md" style={{height: "86%"}}></div>
                  <div className="text-xs mt-2 font-medium">Uganda</div>
                  <div className="text-xs text-gray-500">86%</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-gradient-to-t from-blue-400 to-indigo-500 rounded-t-md" style={{height: "79%"}}></div>
                  <div className="text-xs mt-2 font-medium">Ghana</div>
                  <div className="text-xs text-gray-500">79%</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-gradient-to-t from-blue-400 to-indigo-500 rounded-t-md" style={{height: "75%"}}></div>
                  <div className="text-xs mt-2 font-medium">Rwanda</div>
                  <div className="text-xs text-gray-500">75%</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-gradient-to-t from-blue-400 to-indigo-500 rounded-t-md" style={{height: "68%"}}></div>
                  <div className="text-xs mt-2 font-medium">Liberia</div>
                  <div className="text-xs text-gray-500">68%</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-gradient-to-t from-blue-400 to-indigo-500 rounded-t-md" style={{height: "63%"}}></div>
                  <div className="text-xs mt-2 font-medium">India</div>
                  <div className="text-xs text-gray-500">63%</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-gradient-to-t from-blue-400 to-indigo-500 rounded-t-md" style={{height: "42%"}}></div>
                  <div className="text-xs mt-2 font-medium">Indonesia</div>
                  <div className="text-xs text-gray-500">42%</div>
                </div>
              </div>
              
              <div className="border-t pt-4 mt-2 text-center text-xs text-gray-500">
                Total Global Adoption: 78% (392 out of 504 schools)
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold mb-6 text-blue-700">Detailed Impact Metrics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-bold mb-4 text-blue-700">Operational Efficiency</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-3 text-lg">85%</span>
                    <span>Reduction in timetable creation time. What previously took weeks of back-and-forth between multiple teams now happens in hours.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-3 text-lg">97%</span>
                    <span>Reduction in scheduling errors. Nearly eliminated common issues like teacher double-booking and missed courses.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-3 text-lg">23%</span>
                    <span>Improvement in teacher utilization. Better matching of teachers to subjects they're qualified to teach.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-3 text-lg">12%</span>
                    <span>Reduction in textbook procurement costs through optimized book-sharing between grades.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4 text-blue-700">User Experience Improvements</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">✓</span>
                    <span>Reduced cognitive load: Clear visual design reduced the mental effort required to understand complex schedules.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">✓</span>
                    <span>Faster identification of issues: Color-coding and visual indicators helped users quickly spot and address problems.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">✓</span>
                    <span>Improved collaboration: Shared visualization created a common understanding between different stakeholders.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">✓</span>
                    <span>Reduced training time: Intuitive design meant new users could quickly learn to generate and manage plans.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-blue-700">Program-Specific Impacts</h4>
              <p className="mb-4">Working with our product manager, we ensured the design accommodated specific program needs:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-100">
                  <h5 className="font-bold mb-3">KwaraLEARN (Nigeria)</h5>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Interface supported specialist rotations for religious studies teachers</li>
                    <li>Designed for hybrid-progressive classroom configurations in small schools</li>
                    <li>Created visualizations for local language instruction assignments</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-100">
                  <h5 className="font-bold mb-3">EdoBEST (Nigeria)</h5>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Optimized views for JSS specialist teacher rotations across multiple subjects</li>
                    <li>Designed clear interfaces for complex grade-level specializations</li>
                    <li>Created dashboards highlighting teacher coverage metrics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-lg shadow-md border-l-4 border-blue-500 mb-8">
            <p className="text-xl font-medium mb-6">
              The Automated Instructional Planning system transformed scheduling processes across NewGlobe's educational programs:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-lg font-bold mb-2 text-blue-700">Efficiency Gains</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Reduced scheduling time from weeks to hours</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>90% reduction in scheduling errors</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>15% improvement in resource utilization</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-2 text-blue-700">Educational Impact</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Enabled implementation of more advanced teaching models</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Supported ability-based grouping across 400+ schools</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Improved subject specialist allocation by 35%</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-2 text-blue-700">Organizational Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Streamlined communication between academic and operational teams</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Created standardized processes across different regions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Enabled rapid scaling to new schools and programs</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-2 text-blue-700">User Feedback</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>92% user satisfaction among school administrators</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Reduced support requests related to scheduling by 75%</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>System adopted across all NewGlobe programs globally</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-700">User Testimonials</h3>
            
            <div className="space-y-6">
              <blockquote className="italic border-l-4 border-blue-300 pl-4 py-2">
                "The AIP system has revolutionized how we manage our teaching schedules. What used to take our team weeks can now be done in hours, with better results and fewer conflicts."
                <footer className="mt-2 font-medium text-gray-600">— School Operations Director, Nigeria</footer>
              </blockquote>
              
              <blockquote className="italic border-l-4 border-blue-300 pl-4 py-2">
                "As we've expanded to more complex teaching models, the flexibility of the scheduling system has been essential. We can now implement ability grouping and specialist teaching in ways that were impossible with our manual process."
                <footer className="mt-2 font-medium text-gray-600">— Academic Director, Kenya</footer>
              </blockquote>
            </div>
          </div>
        </section>
        
        {/* Design Lessons Learned */}
        <section className="mb-20">
          <CaseStudyHeader>
            Design Lessons Learned
          </CaseStudyHeader>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-6">
              This project reinforced several important design principles and provided valuable insights:
            </p>
            
            {/* Visual Process Diagram */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8 overflow-hidden">
              <div className="relative h-24 mb-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-1 bg-gray-300 w-full"></div>
                </div>
                
                {/* Step 1: Balance */}
                <div className="absolute left-0 top-0 bottom-0 w-1/4 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center text-blue-800 font-bold mb-2 z-10">1</div>
                  <div className="text-center">
                    <div className="text-sm font-semibold mb-1">Balance</div>
                    <div className="text-xs text-gray-500">Automation + Control</div>
                  </div>
                </div>
                
                {/* Step 2: Complexity */}
                <div className="absolute left-1/4 top-0 bottom-0 w-1/4 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 border-2 border-indigo-500 flex items-center justify-center text-indigo-800 font-bold mb-2 z-10">2</div>
                  <div className="text-center">
                    <div className="text-sm font-semibold mb-1">Complexity</div>
                    <div className="text-xs text-gray-500">Manage without Simplifying</div>
                  </div>
                </div>
                
                {/* Step 3: Culture */}
                <div className="absolute left-2/4 top-0 bottom-0 w-1/4 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 border-2 border-purple-500 flex items-center justify-center text-purple-800 font-bold mb-2 z-10">3</div>
                  <div className="text-center">
                    <div className="text-sm font-semibold mb-1">Culture</div>
                    <div className="text-xs text-gray-500">Cross-Cultural Usability</div>
                  </div>
                </div>
                
                {/* Step 4: Progressive */}
                <div className="absolute left-3/4 top-0 bottom-0 w-1/4 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center text-green-800 font-bold mb-2 z-10">4</div>
                  <div className="text-center">
                    <div className="text-sm font-semibold mb-1">Progressive</div>
                    <div className="text-xs text-gray-500">Gradual Feature Rollout</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center text-sm text-blue-800 font-medium mt-4 bg-blue-50 py-2 rounded border border-blue-100">
                Design Principles Applied to Future Projects
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Simplifying Complexity is Key</h4>
                <p>
                  The biggest challenge was making an incredibly complex system feel simple and intuitive. I learned to:
                </p>
                <ul className="space-y-2 mt-3 pl-6 list-disc">
                  <li>Use progressive disclosure to reveal information only when needed</li>
                  <li>Create consistent patterns for similar actions across the interface</li>
                  <li>Design clear visual hierarchies to guide users through complex processes</li>
                  <li>Use color purposefully to communicate state and importance</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Design for Edge Cases</h4>
                <p>
                  Educational scheduling involves numerous exceptions and special cases. Successful design required:
                </p>
                <ul className="space-y-2 mt-3 pl-6 list-disc">
                  <li>Accommodating unusual scenarios without complicating the common path</li>
                  <li>Creating flexible interfaces that could adapt to different program requirements</li>
                  <li>Building clear error states and recovery paths</li>
                  <li>Maintaining usability even when data is incomplete or problematic</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Cross-Cultural Usability</h4>
                <p>
                  Designing for users across multiple countries revealed the importance of creating interfaces that accommodate different cultural contexts, technical literacy levels, and operational environments.
                </p>
                <ul className="space-y-2 mt-3 pl-6 list-disc">
                  <li>Terms and concepts vary across educational systems and regions</li>
                  <li>Technical infrastructure differences impact design decisions</li>
                  <li>Training processes need to accommodate different learning approaches</li>
                  <li>Careful consideration of language and cultural symbols is essential</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Collaboration Drives Success</h4>
                <p>
                  The complex nature of this project required deep collaboration:
                </p>
                <ul className="space-y-2 mt-3 pl-6 list-disc">
                  <li>Regular design reviews with the product manager ensured alignment with business goals</li>
                  <li>Close work with engineers helped balance design ideals with technical feasibility</li>
                  <li>Stakeholder workshops validated that designs met domain-specific needs</li>
                  <li>Iterative testing with real users revealed unexpected pain points and opportunities</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Data Visualization Matters</h4>
                <p>
                  The way data is presented dramatically impacts user understanding:
                </p>
                <ul className="space-y-2 mt-3 pl-6 list-disc">
                  <li>Visual encoding (color, shape, size) can communicate complex relationships at a glance</li>
                  <li>Consistent layouts help users build mental models that transfer across screens</li>
                  <li>Interactive filtering and sorting helps users focus on relevant information</li>
                  <li>Multiple views of the same data serve different user needs and contexts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Conclusion */}
        <section className="mb-20">
          <CaseStudyHeader>
            Conclusion
          </CaseStudyHeader>
          
          <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-xl leading-relaxed">
              As the product designer for the Automated Instructional Planning project, I helped transform a complex, error-prone manual process into an intuitive, efficient digital experience. By applying user-centered design principles and working closely with our product manager and development team, we created a solution that not only saved time and resources but also improved educational quality through better resource allocation.
            </p>
            <p className="text-xl leading-relaxed mt-4">
              The project demonstrates how thoughtful design can simplify complex operations, reduce errors, and empower users to focus on what matters most: providing quality education to students. I'm proud of the impact this work has had on NewGlobe's operations and the foundation it provides for future educational innovation.
            </p>
          </div>
        </section>
        
        {/* Footer */}
        <CaseStudyFooter />
      </div>
    </main>
  );
} 