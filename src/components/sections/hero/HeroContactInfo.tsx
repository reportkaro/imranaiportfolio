"use client";

import React from 'react';

interface HeroContactInfoProps {
  isVisible: boolean;
}

const HeroContactInfo = ({ isVisible }: HeroContactInfoProps) => {
  return (
    <div 
      className={`pt-8 border-t border-border flex flex-col sm:flex-row gap-6 md:gap-8 text-sm text-muted transition-all duration-700 ease-out delay-600 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="hover-scale">
        <p className="font-medium mb-1.5">Email</p>
        <a href="mailto:your.email@example.com" className="hover:text-accent transition-colors">your.email@example.com</a>
      </div>
      <div className="hover-scale">
        <p className="font-medium mb-1.5">Location</p>
        <span>[Your City], [Country]</span>
      </div>
      <div className="hover-scale">
        <p className="font-medium mb-1.5">Available For</p>
        <span>AI Design Consulting & Full-time Opportunities</span>
      </div>
    </div>
  );
};

export default HeroContactInfo; 