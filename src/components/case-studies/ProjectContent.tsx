'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowLeft } from '@/components/Icons';
import { Project } from '@/data/projects';

export default function ProjectContent({ project }: { project: Project }) {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <motion.nav
          className="py-4 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to Portfolio</span>
          </Link>
        </motion.nav>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

          <div className="mb-8">
            <p className="text-xl text-gray-700">{project.description}</p>
          </div>

          {project.images && project.images.length > 0 && (
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image src={project.images[0]} alt={project.title} width={1200} height={675} className="w-full h-auto" />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                View Live
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
              >
                View Code
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
