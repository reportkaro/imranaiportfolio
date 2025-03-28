"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '../ui/SectionTitle';

type Project = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  slug: string;
};

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "LessonLoom: Automated Lesson Generation Platform",
    tagline: "AI-powered educational content creation",
    description: "An innovative platform that automates the creation of educational materials using AI and templating systems.",
    image: "/projects/lessonloom.jpg",
    slug: "lessonloom"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    tagline: "Creating a seamless shopping experience with modern technology",
    description: "A comprehensive e-commerce solution that focuses on user experience and conversion optimization.",
    image: "/projects/project1.jpg",
    slug: "ecommerce-platform"
  },
  {
    id: 3,
    title: "Task Management App",
    tagline: "Designing a user-friendly platform to boost productivity",
    description: "A collaborative task management tool that helps teams organize and track their work efficiently.",
    image: "/projects/project2.jpg",
    slug: "task-management"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    tagline: "Building an intuitive interface for weather data visualization",
    description: "A responsive weather application providing real-time forecasts with an emphasis on visual clarity.",
    image: "/projects/project3.jpg",
    slug: "weather-dashboard"
  }
];

const Projects = () => {
  return (
    <section id="work" className="section-padding">
      <div className="container mx-auto px-6 md:px-8">
        <SectionTitle title="Featured work" />
        
        <div className="space-y-32 mt-24">
          {featuredProjects.map((project, index) => {
            // Define the project URL
            const projectUrl = project.id === 1 ? "/casestudy" : `/projects/${project.slug}`;
            
            return (
              <Link 
                key={project.id}
                href={projectUrl}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 group cursor-pointer hover:opacity-95 transition-opacity`}
              >
                <div className="md:w-1/2 relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg group-hover:shadow-xl transition-shadow">
                  {project.id === 1 ? (
                    // LessonLoom Project with custom styled image
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-indigo-950 dark:via-purple-950 dark:to-blue-950 overflow-hidden">
                      {/* Abstract patterns to represent AI & education with animations */}
                      <div className="absolute top-[20%] left-[30%] w-16 h-16 rounded-full bg-indigo-300/20 dark:bg-indigo-700/20 animate-pulse-slow"></div>
                      <div className="absolute top-[60%] left-[10%] w-24 h-24 rounded-full bg-purple-300/20 dark:bg-purple-700/20 animate-float"></div>
                      <div className="absolute top-[30%] right-[15%] w-28 h-28 rounded-full bg-blue-300/20 dark:bg-blue-700/20 animate-pulse-slower"></div>
                      
                      {/* AI Data Flow Lines - simulating AI connections */}
                      <div className="absolute top-[35%] left-[20%] w-20 h-1 bg-blue-300/10 dark:bg-blue-700/10 rotate-45 animate-fade-in-out"></div>
                      <div className="absolute top-[50%] left-[60%] w-16 h-1 bg-indigo-300/10 dark:bg-indigo-700/10 -rotate-45 animate-fade-in-out-delay"></div>
                      
                      {/* Document or lesson plan visuals */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col overflow-hidden">
                        {/* Header area with brand name */}
                        <div className="h-[15%] bg-indigo-500 dark:bg-indigo-600 flex items-center justify-between px-4">
                          <div className="w-[50%] h-2 bg-white/70 dark:bg-white/50 rounded"></div>
                          <div className="text-xs text-white font-medium tracking-wide">LESSON LOOM</div>
                        </div>
                        
                        {/* Content area with animated typing lines */}
                        <div className="flex-grow p-3 flex flex-col justify-around">
                          <div className="w-0 h-2 bg-gray-200 dark:bg-gray-700 rounded animate-line-grow"></div>
                          <div className="w-0 h-2 bg-gray-200 dark:bg-gray-700 rounded animate-line-grow-delay-1"></div>
                          <div className="w-0 h-2 bg-gray-200 dark:bg-gray-700 rounded animate-line-grow-delay-2"></div>
                          <div className="w-0 h-2 bg-gray-200 dark:bg-gray-700 rounded animate-line-grow-delay-3"></div>
                        </div>
                        
                        {/* AI accent with subtle pulse */}
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-br-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center animate-pulse-subtle">
                          <div className="text-white text-xs font-bold">AI</div>
                        </div>
                      </div>

                      {/* Neural network nodes and connections - representing AI */}
                      <svg className="absolute inset-0 w-full h-full z-0 opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <circle className="animate-pulse-slow" cx="20" cy="20" r="1" fill="currentColor" />
                        <circle className="animate-pulse-slow" cx="80" cy="30" r="1" fill="currentColor" />
                        <circle className="animate-pulse-slow" cx="50" cy="70" r="1" fill="currentColor" />
                        <circle className="animate-pulse-slow" cx="30" cy="80" r="1" fill="currentColor" />
                        <circle className="animate-pulse-slow" cx="70" cy="60" r="1" fill="currentColor" />
                        <line x1="20" y1="20" x2="80" y2="30" stroke="currentColor" strokeWidth="0.2" />
                        <line x1="80" y1="30" x2="50" y2="70" stroke="currentColor" strokeWidth="0.2" />
                        <line x1="50" y1="70" x2="30" y2="80" stroke="currentColor" strokeWidth="0.2" />
                        <line x1="30" y1="80" x2="70" y2="60" stroke="currentColor" strokeWidth="0.2" />
                        <line x1="70" y1="60" x2="20" y2="20" stroke="currentColor" strokeWidth="0.2" />
                      </svg>
                    </div>
                  ) : (
                    // Default project image placeholder
                    <div className="absolute inset-0 flex items-center justify-center text-muted">
                      Project Image
                    </div>
                  )}
                  
                  {/* Uncomment when you have actual images for other projects */}
                  {/* {project.id !== 1 && (
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  )} */}
                  
                  {/* Add a decorative element */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-accent/10 z-0"></div>
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-secondary/10 z-0"></div>
                </div>
                
                <div className="md:w-1/2 flex flex-col justify-center relative">
                  {/* Decorative number */}
                  <span className="absolute -left-8 top-0 text-8xl font-bold text-gray-100 dark:text-gray-800 select-none hidden md:block">
                    0{index + 1}
                  </span>
                  
                  <div className="relative">
                    <span className="inline-block mb-2 text-sm font-medium transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-accent group-hover:via-tertiary group-hover:to-accent group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:text-transparent">{project.tagline}</span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-accent group-hover:via-tertiary group-hover:to-accent group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:text-transparent">{project.title}</h3>
                    <p className="text-muted mb-8 leading-relaxed">{project.description}</p>
                    
                    <div className="inline-flex items-center font-medium text-accent group-hover:text-accent/80 transition-colors">
                      View case study
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects; 