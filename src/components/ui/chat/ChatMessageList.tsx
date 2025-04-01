"use client";

import React, { useRef, useEffect } from 'react';
import { Message } from '../../../types/chat';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatMessageListProps {
  messages: Message[];
  isTyping: boolean;
}

const ChatMessageList = ({ messages, isTyping }: ChatMessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prevMessagesLengthRef = useRef(0);

  // Auto-scroll to bottom only when new messages are added
  useEffect(() => {
    // Only scroll if new messages were added (not on initial load)
    if (messages.length > prevMessagesLengthRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Update the previous messages length reference
    prevMessagesLengthRef.current = messages.length;
  }, [messages]);

  return (
    <div className="overflow-y-auto h-full p-4">
      <AnimatePresence>
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.sender === 'user'
                  ? 'bg-accent text-white rounded-tr-sm'
                  : 'bg-white/90 text-gray-800 rounded-tl-sm'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </motion.div>
        ))}
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start mb-4"
          >
            <div className="bg-white/90 rounded-lg rounded-tl-sm px-4 py-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </AnimatePresence>
    </div>
  );
};

export default ChatMessageList; 