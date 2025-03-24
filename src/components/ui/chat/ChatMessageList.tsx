"use client";

import React, { useRef, useEffect } from 'react';
import { Message } from '../../../types/chat';
import ChatMessage from './ChatMessage';
import ChatTypingIndicator from './ChatTypingIndicator';

interface ChatMessageListProps {
  messages: Message[];
  isTyping: boolean;
}

const ChatMessageList = ({ messages, isTyping }: ChatMessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<HTMLDivElement>(null);
  
  // Enhanced scroll behavior - always scroll to typing indicator or latest message
  useEffect(() => {
    // Ensure DOM is fully updated before scrolling
    requestAnimationFrame(() => {
      // First, prioritize scrolling to typing indicator when it appears
      if (isTyping && typingRef.current) {
        typingRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        });
        return;
      }
      
      // Otherwise, scroll to the latest message or end of container
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        });
      }
    });
  }, [messages.length, isTyping]);
  
  return (
    <div 
      ref={containerRef}
      className="flex-1 overflow-y-auto px-5 py-5 hide-scrollbar"
      style={{ height: '100%' }}
    >
      {/* Message container with spacing */}
      <div className="space-y-4 pb-2 min-h-[100%]">
        {messages.map((message, index) => (
          <ChatMessage 
            key={message.id} 
            message={message}
            className={index === 0 ? 'mt-1' : ''}
          />
        ))}
        
        {/* Typing indicator with reference for scrolling */}
        {isTyping && (
          <div ref={typingRef}>
            <ChatTypingIndicator />
          </div>
        )}
        
        {/* This element is always at the bottom of the message list */}
        <div ref={messagesEndRef} className="h-2" />
      </div>
      
      {/* Hidden scrollbar styles that preserve scrolling functionality */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
};

export default ChatMessageList; 