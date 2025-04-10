'use client';

import { useState, useEffect } from 'react';

import ChatInput from './chat/ChatInput';
import ChatMessageList from './chat/ChatMessageList';
import ChatSuggestions from './chat/ChatSuggestions';
import { Message } from '../../types/chat';
import { initialMessages, generateResponse } from '../../utils';

// Simplified props to just focus on in-page chat
type ChatInterfaceProps = {
  closeChat?: () => void;
};

const ChatInterface = ({ closeChat }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  
  // Define suggested questions that focus on case studies
  const localSuggestedQuestions = [
    "Can you walk me through Imran's case studies?",
    "What are his most interesting projects?"
  ];

  // Initialize with welcome messages
  useEffect(() => {
    // Add initial messages with a short delay for smooth appearance
    const timer = setTimeout(() => {
      setMessages(initialMessages);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Handle sending a new message
  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    // Hide suggestions after first user message
    setShowSuggestions(false);
    
    // Update messages with user's message
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Get current messages for context
    const currentMessages = [...messages, userMessage];
    
    try {
      // Get response from the AI (now async)
      const responseText = await generateResponse(text, currentMessages);
      
      // Create bot message with response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };

      // Add bot message to chat
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      
      // Add error message if response generation fails
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting right now. Could you try again?",
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionSelect = (question: string) => {
    handleSendMessage(question);
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
        {showSuggestions && messages.length <= 2 && (
          <ChatSuggestions suggestions={localSuggestedQuestions} onSelect={handleSuggestionSelect} />
        )}
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatInterface;
