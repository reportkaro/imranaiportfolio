"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatToggle } from '../../hooks/useChatToggle';
import HeroHeading from './hero/HeroHeading';
import HeroChatSection from './hero/HeroChatSection';
import HeroButtons from './hero/HeroButtons';
import HeroContactInfo from './hero/HeroContactInfo';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isChatOpen, toggleChat } = useChatToggle();
  
  // Animation enter effect
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Text options for the animated heading
  const aiTextOptions = [
    "future-fluent",
    "brilliantly-biased",
    "emotionally-aware",
    "beautifully-balanced"
  ];

  return (
    <section 
      className="pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden relative bg-background"
      style={{ position: 'relative', overflowX: 'hidden' }}
    >
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Always show the hero content */}
          <div>
            <span 
              className={`inline-block text-accent mb-6 text-lg font-medium transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              AI Experience Designer
            </span>
            
            {/* Animation container with fixed height to prevent layout shifts */}
            <div className="relative h-[320px] w-full overflow-hidden">
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