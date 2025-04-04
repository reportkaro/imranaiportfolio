'use client';

import React from 'react';

interface ChatSuggestionsProps {
  suggestions: string[];
  onSelect: (question: string) => void;
}

const ChatSuggestions = ({ suggestions, onSelect }: ChatSuggestionsProps) => {
  return (
    <div className="mb-3 mt-1">
      <p className="text-xs text-muted mb-2 font-medium">Suggested questions:</p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((question, index) => (
          <button
            key={index}
            onClick={() => onSelect(question)}
            className="text-xs bg-accent/10 hover:bg-accent/20 text-accent px-3 py-1.5 rounded-full transition-colors"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatSuggestions;
