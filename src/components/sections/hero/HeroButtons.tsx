'use client';

import React from 'react';

import Button from '../../ui/Button';

interface HeroButtonsProps {
  isVisible: boolean;
  isChatOpen: boolean;
  onChatToggle: (e?: React.MouseEvent) => void;
}

const HeroButtons = ({ isVisible, isChatOpen, onChatToggle }: HeroButtonsProps) => {
  // Handler for the chat button click
  const handleChatToggle = (e: React.MouseEvent) => {
    // Most direct approach: prevent the event entirely
    e.preventDefault();
    e.stopPropagation();

    // Call the toggle function (which handles the chat state)
    onChatToggle(e);
  };

  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 w-full mt-8 mb-12 relative z-30 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Primary button - now with distinctive styling */}
      <Button href="#work" variant="primary" className="block w-full sm:w-auto">
        View My Work
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Button>

      {/* AI Chat Button */}
      <button
        type="button"
        className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium cursor-pointer bg-transparent border-2 border-gray-300 text-foreground hover:bg-gray-100 relative flex-grow-0 ai-border bg-background hover:shadow-lg transition-all duration-300 text-foreground"
        onClick={e => {
          // Completely prevent default behavior
          e.preventDefault();
          e.stopPropagation();

          // Call the toggle function directly
          onChatToggle(e);

          // Return false to prevent any further propagation
          return false;
        }}
      >
        {isChatOpen ? 'Close Chat' : 'Chat with my AI'}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-all duration-300 ${isChatOpen ? '' : 'group-hover:scale-110 group-hover:rotate-45'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isChatOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default HeroButtons;
