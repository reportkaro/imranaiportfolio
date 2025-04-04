'use client';

import { motion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

import { useMouseTracking, applyGradientShift } from '../../../hooks/useMouseTracking';
import { useTextCycling } from '../../../hooks/useTextCycling';

interface HeroHeadingProps {
  isVisible: boolean;
  aiTextOptions: string[];
}

const CURSOR_BLINK_KEYFRAMES = `
  @keyframes cursorBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const GRADIENT_FLOW_KEYFRAMES = `
  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const HeroHeading = ({ isVisible, aiTextOptions }: HeroHeadingProps) => {
  const gradientTextRef = useRef<HTMLSpanElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Force client-side rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Set up text cycling for the dynamic text options
  const { currentText, typing, deleting } = useTextCycling({
    texts: aiTextOptions,
    typingSpeed: 2000,
    pauseDuration: 3000,
    charSpeed: 40,
  });

  // Set up mouse tracking for the gradient effect
  const { elementRef } = useMouseTracking<HTMLDivElement>({
    onMouseMove: (element, position) => {
      if (gradientTextRef.current) {
        applyGradientShift(gradientTextRef.current, position);
      }
    },
  });

  // If not mounted yet (server-side), render a placeholder
  if (!isMounted) {
    return (
      <motion.div
        key="heading-content-placeholder"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
          <span className="inline">Creating experiences with purpose and precision.</span>
        </h1>
      </motion.div>
    );
  }

  return (
    <>
      <style jsx global>{`
        ${CURSOR_BLINK_KEYFRAMES}
        ${GRADIENT_FLOW_KEYFRAMES}
      `}</style>
      <motion.div
        key="heading-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center"
        style={{ willChange: 'opacity' }}
        ref={elementRef}
      >
        <h1
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-relaxed tracking-tight transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="inline">Creating </span>
          <span
            className="relative inline-block"
            style={{ minWidth: '260px', minHeight: '70px', paddingBottom: '10px' }}
          >
            <span
              ref={gradientTextRef}
              style={{
                background: 'linear-gradient(135deg, var(--accent), var(--tertiary), var(--accent))',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
                position: 'relative',
                animation: 'gradientFlow 6s ease infinite',
                lineHeight: '1.2',
                paddingBottom: '4px',
              }}
            >
              {currentText}
              {typing && (
                <span
                  style={{
                    position: 'absolute',
                    right: '-2px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    height: '60%',
                    width: '3px',
                    backgroundColor: 'var(--accent)',
                    display: 'inline-block',
                    opacity: 0.9,
                    animation: 'cursorBlink 0.7s step-end infinite',
                  }}
                />
              )}
            </span>
          </span>{' '}
          <span className="inline">experiences with purpose and precision.</span>
        </h1>

        <p
          className={`text-lg md:text-xl text-muted mb-0 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          I'm a Product Designer specialized in AI experience design, creating thoughtful interfaces for intelligent
          systems that balance automation with human-centered control.
        </p>
      </motion.div>
    </>
  );
};

export default HeroHeading;
