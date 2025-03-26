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
  const { currentText, textOpacity, typing } = useTextCycling({
    texts: aiTextOptions
  });
  
  // Set up mouse tracking for the gradient effect
  const { elementRef } = useMouseTracking<HTMLElement>({
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
        className={`hero-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <span>Creating</span>{" "}
        <span 
          ref={gradientTextRef}
          className="gradient-text animate-gradient"
          style={{ 
            backgroundSize: '300% 300%',
            transition: 'all 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
            opacity: textOpacity
          }}
        >
          {currentText}
          {typing && (
            <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 h-[60%] w-[2px] bg-accent animate-blink inline-block opacity-60"></span>
          )}
        </span>{" "}
        <span>experiences with purpose</span>{" "}
        <span>and precision.</span>
      </h1>
      
      <p 
        className={`text-lg md:text-xl text-muted mb-0 max-w-2xl leading-relaxed ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        I'm a Product Designer specialized in AI experience design, creating thoughtful interfaces for intelligent systems that balance automation with human-centered control.
      </p>
    </motion.div>
  );
};

export default HeroHeading; 