"use client";

import React, { useState, FormEvent } from 'react';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [input, setInput] = useState('');
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 w-full relative"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me about Imran..."
        className="flex-1 p-3.5 pl-4 pr-12 text-sm backdrop-blur-sm bg-gradient-to-r from-white/60 to-white/40 rounded-full border border-white/40 focus:border-indigo-300/70 focus:ring-2 focus:ring-indigo-200/50 text-gray-800 shadow-sm transition-all duration-200"
        style={{
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.03)'
        }}
        autoFocus
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-2.5 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 backdrop-blur-sm shadow-md"
        disabled={!input.trim()}
        style={{
          boxShadow: '0 2px 8px rgba(99, 102, 241, 0.25)'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </button>
    </form>
  );
};

export default ChatInput; 