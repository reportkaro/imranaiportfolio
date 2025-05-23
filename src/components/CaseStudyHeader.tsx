'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CaseStudyHeaderProps {
  children: ReactNode;
  level?: 'h1' | 'h2' | 'h3';
  className?: string;
  showGradientLine?: boolean;
}

export default function CaseStudyHeader({
  children,
  level = 'h2',
  className = '',
  showGradientLine = level === 'h2',
}: CaseStudyHeaderProps) {
  const baseClasses = {
    h1: 'text-4xl md:text-5xl font-bold mb-6',
    h2: 'text-3xl font-bold mb-6',
    h3: 'text-2xl font-semibold mb-4',
  };

  const HeaderTag = level as keyof JSX.IntrinsicElements;

  const gradientClass =
    level === 'h1'
      ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient'
      : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <HeaderTag className={`${baseClasses[level]} ${gradientClass} ${className}`}>{children}</HeaderTag>

      {showGradientLine && (
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-full mt-2 mb-6"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 96, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      )}
    </motion.div>
  );
}
