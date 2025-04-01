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
    title: "Automated Instructional Planning",
    tagline: "Transforming Educational Scheduling",
    description: "An innovative system that automates the generation of optimized teaching schedules for hundreds of schools across multiple global education programs.",
    image: "/projects/aip.jpg",
    slug: "aip"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    tagline: "Creating a seamless shopping experience with modern technology",
    description: "A comprehensive e-commerce solution that focuses on user experience and conversion optimization.",
    image: "/projects/project1.jpg",
    slug: "ecommerce-platform"
  }
];

// Function to determine project color based on project ID
const getProjectColor = (id: number) => {
  switch(id) {
    case 1: return {
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
      accent: "bg-indigo-500 dark:bg-indigo-600"
    };
    case 2: return {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      accent: "bg-blue-500 dark:bg-blue-600"
    };
    case 3: return {
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      accent: "bg-emerald-500 dark:bg-emerald-600"
    };
    default: return {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      accent: "bg-purple-500 dark:bg-purple-600"
    };
  }
};

const Projects = () => {
  return (
    <section id="work" className="section-padding">
      <div className="container mx-auto px-6 md:px-8">
        <SectionTitle title="Featured work" />
        
        <div className="space-y-32 mt-24">
          {featuredProjects.map((project, index) => {
            // Define the project URL
            const projectUrl = project.id === 1 ? "/casestudy" : project.id === 2 ? "/casestudy/aip" : `/projects/${project.slug}`;
            const projectColors = getProjectColor(project.id);
            
            return (
              <Link 
                key={project.id}
                href={projectUrl}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 group cursor-pointer hover:opacity-95 transition-opacity`}
              >
                <div className="md:w-1/2 relative aspect-video rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  {/* Simplified project visualization */}
                  <div className={`absolute inset-0 ${projectColors.bg}`}>
                    {/* Simple project card with brand label */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col overflow-hidden">
                      {/* Header area with brand name */}
                      <div className={`h-[20%] ${projectColors.accent} flex items-center justify-between px-4`}>
                        <div className="w-[50%] h-2 bg-white/70 dark:bg-white/50 rounded"></div>
                        <div className="text-xs text-white font-medium tracking-wide">
                          {project.id === 1 ? "LESSON LOOM" : 
                           project.id === 2 ? "AIP SCHEDULER" : 
                           project.title.split(':')[0].toUpperCase()}
                        </div>
                      </div>
                      
                      {/* Content area with simple lines */}
                      <div className="flex-grow p-4 flex flex-col justify-around">
                        <div className="w-3/4 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="w-2/3 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 flex flex-col justify-center relative">
                  {/* Decorative number */}
                  <span className="absolute -left-8 top-0 text-8xl font-bold text-gray-100 dark:text-gray-800 select-none hidden md:block">
                    0{index + 1}
                  </span>
                  
                  <div className="relative">
                    <span className="inline-block mb-2 text-sm font-medium bg-gradient-to-r from-accent via-tertiary to-accent bg-[length:200%_auto] bg-clip-text transition-all duration-500 ease-in-out text-foreground group-hover:text-transparent">{project.tagline}</span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-accent via-tertiary to-accent bg-[length:200%_auto] bg-clip-text transition-all duration-500 ease-in-out text-foreground group-hover:text-transparent">{project.title}</h3>
                    <p className="text-muted mb-8 leading-relaxed">{project.description}</p>
                    
                    <div className="inline-flex items-center font-medium text-accent group-hover:text-accent/80 transition-colors duration-500 ease-in-out">
                      View case study
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-500 ease-in-out" viewBox="0 0 20 20" fill="currentColor">
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