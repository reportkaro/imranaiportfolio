"use client";

import React, { createContext, useState, useContext, useCallback } from 'react';
import { ChatContextType } from '../types/chat';

// Create the context with a default value
const ChatContext = createContext<ChatContextType>({
  isOpen: false,
  openChat: () => {},
  closeChat: () => {},
});

// Provider component that wraps parts of the app that need the chat context
export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = React.useMemo(() => ({
    isOpen,
    openChat,
    closeChat,
  }), [isOpen, openChat, closeChat]);

  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  );
};

// Custom hook to use the chat context
export const useChat = () => useContext(ChatContext);

export default ChatContext; 