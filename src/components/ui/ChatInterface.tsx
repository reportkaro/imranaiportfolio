'use client';

import { useState, useEffect } from 'react';

import ChatInput from './chat/ChatInput';
import ChatMessageList from './chat/ChatMessageList';
import { Message } from '../../types/chat';
import { initialMessages, generateResponse } from '../../utils/chatService';

// Simplified props to just focus on in-page chat
type ChatInterfaceProps = {
  closeChat?: () => void;
};

const ChatInterface = ({ closeChat }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Initialize with welcome messages
  useEffect(() => {
    // Add initial messages with a short delay for smooth appearance
    const timer = setTimeout(() => {
      setMessages(initialMessages);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Handle sending a new message
  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response with stable timing
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(text),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div
      className="flex flex-col h-full relative"
      style={{
        background: 'linear-gradient(145deg, rgba(244, 244, 255, 0.3) 0%, rgba(250, 250, 255, 0.2) 100%)',
        backdropFilter: 'blur(8px)',
        willChange: 'transform', // Optimize for GPU rendering
        borderRadius: '6px',
      }}
    >
      {/* Messages container with stable dimensions */}
      <div className="flex-1 overflow-hidden" style={{ minHeight: 0 }}>
        {' '}
        {/* minHeight prevents flex container issues */}
        <ChatMessageList messages={messages} isTyping={isTyping} />
      </div>

      {/* Message input with stable height and subtle gradient */}
      <div
        className="mt-auto px-4 py-4 border-t border-white/20 backdrop-blur-sm"
        style={{
          flexShrink: 0,
          background: 'linear-gradient(to top, rgba(244, 244, 255, 0.5) 0%, rgba(250, 250, 255, 0.3) 100%)',
        }}
      >
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatInterface;
