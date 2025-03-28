"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatToggle } from '../../hooks/useChatToggle';
import HeroHeading from './hero/HeroHeading';
import HeroChatSection from './hero/HeroChatSection';
import HeroButtons from './hero/HeroButtons';
import HeroContactInfo from './hero/HeroContactInfo';
import HeroBackground from './hero/HeroBackground';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Animation enter effect
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Apply scroll locking directly to body and html
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isChatOpen) {
        // Store current scroll position
        document.body.style.top = `-${window.scrollY}px`;
        // Apply lock
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
      } else {
        // Get the stored position
        const scrollY = document.body.style.top ? 
          parseInt(document.body.style.top || '0', 10) * -1 : 0;
        
        // Remove lock
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        // Restore scroll
        window.scrollTo(0, scrollY);
      }
    }
  }, [isChatOpen]);
  
  // Direct toggle function
  const toggleChat = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Toggle state directly
    setIsChatOpen(prev => !prev);
  }, []);
  
  // Text options for the animated heading
  const aiTextOptions = [
    "AI-enhanced",
    "brilliantly-biased",
    "beautifully-balanced",
    "future-fluent"
  ];

  return (
    <section 
      className="pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden relative bg-background"
      style={{ position: 'relative', overflowX: 'hidden' }}
    >
      {/* Add the wavy background */}
      <HeroBackground />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Always show the hero content */}
          <div>
            <span 
              className={`inline-block mb-6 text-lg font-medium transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              AI Experience Designer
            </span>
            
            {/* Animation container with fixed height to prevent layout shifts */}
            <div className="relative h-[270px] md:h-[250px] w-full overflow-hidden">
              <AnimatePresence mode="wait">
                {!isChatOpen ? (
                  <HeroHeading isVisible={isVisible} aiTextOptions={aiTextOptions} />
                ) : (
                  <HeroChatSection closeChat={toggleChat} />
                )}
              </AnimatePresence>
            </div>
            
            {/* Action buttons */}
            <HeroButtons 
              isVisible={isVisible} 
              isChatOpen={isChatOpen} 
              onChatToggle={toggleChat} 
            />
          </div>
          
          {/* Contact info */}
          <HeroContactInfo isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Hero; 