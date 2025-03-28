"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTextCycling } from '../../../hooks/useTextCycling';
import { useMouseTracking, applyGradientShift } from '../../../hooks/useMouseTracking';

interface HeroHeadingProps {
  isVisible: boolean;
  aiTextOptions: string[];
}

const HeroHeading = ({ isVisible, aiTextOptions }: HeroHeadingProps) => {
  const gradientTextRef = useRef<HTMLSpanElement>(null);
  
  // Set up text cycling for the dynamic text options
  const { currentText, typing, deleting } = useTextCycling({
    texts: aiTextOptions,
    typingSpeed: 2000,
    pauseDuration: 3000,
    charSpeed: 40
  });
  
  // Set up mouse tracking for the gradient effect
  const { elementRef } = useMouseTracking<HTMLDivElement>({
    onMouseMove: (element, position) => {
      if (gradientTextRef.current) {
        applyGradientShift(gradientTextRef.current, position);
      }
    }
  });
  
  return (
    <motion.div
      key="heading-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-full h-full flex flex-col justify-center"
      style={{ willChange: "opacity" }}
      ref={elementRef}
    >
      <h1 
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight tracking-tight transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <span className="inline">Creating{" "}</span>
        <span className="relative inline-block" style={{ minWidth: "260px" }}>
          <span 
            ref={gradientTextRef}
            className="bg-gradient-to-r from-accent via-tertiary to-accent animate-gradient bg-[length:300%_300%] bg-clip-text text-transparent inline-block"
          >
            {currentText}
            {typing && (
              <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 h-[60%] w-[3px] bg-accent animate-blink inline-block opacity-90"></span>
            )}
          </span>
        </span>{" "}
        <span className="inline">experiences with purpose and precision.</span>
      </h1>
      
      <p 
        className={`text-lg md:text-xl text-muted mb-0 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        I'm a Product Designer specialized in AI experience design, creating thoughtful interfaces for intelligent systems that balance automation with human-centered control.
      </p>
    </motion.div>
  );
};

export default HeroHeading; 