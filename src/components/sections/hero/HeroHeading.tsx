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
      className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-4 sm:px-6 md:px-8"
      style={{ willChange: "opacity" }}
      ref={elementRef}
    >
      <div 
        className={`transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-[1.2] tracking-tight max-w-4xl mx-auto">
          <div className="flex flex-col gap-3">
            <div className="text-foreground/90">Creating</div>
            <div>
              <span 
                ref={gradientTextRef}
                className="gradient-text animate-gradient text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl"
                style={{ 
                  backgroundSize: '300% 300%',
                  transition: 'all 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
                  opacity: textOpacity,
                  position: 'relative'
                }}
              >
                {currentText}
                {typing && (
                  <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 h-[60%] w-[2px] bg-accent animate-blink inline-block opacity-60"></span>
                )}
              </span>
            </div>
            <div className="text-foreground/90">experiences with</div>
            <div className="text-foreground/90">purpose and precision.</div>
          </div>
        </h1>
      </div>
      
      <p 
        className={`text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-8 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        I'm a Product Designer specialized in AI experience design, creating thoughtful interfaces for intelligent systems that balance automation with human-centered control.
      </p>
    </motion.div>
  );
};

export default HeroHeading; 