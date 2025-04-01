'use client';

import React from 'react';
import { ChatProvider } from '../context/ChatContext';
import { ChatToggleProvider } from '../hooks/useChatToggle';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ChatProvider>
      <ChatToggleProvider>
        {children}
      </ChatToggleProvider>
    </ChatProvider>
  );
} 