import { Message } from '../types/chat';

// Initial welcome messages
export const initialMessages: Message[] = [
  {
    id: '1',
    text: "Hello! I'm Imran's portfolio AI assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

// Simple response generator for the demo
export const generateResponse = (query: string): string => {
  const lowercaseQuery = query.toLowerCase();

  if (lowercaseQuery.includes('portfolio') || lowercaseQuery.includes('work')) {
    return "I've helped design AI-powered platforms like Lesson Loom that create educational content at scale. You can see my featured projects on this page!";
  }

  if (lowercaseQuery.includes('background') || lowercaseQuery.includes('experience')) {
    return "I'm an AI Experience Designer with a focus on creating thoughtful interfaces for intelligent systems. I've worked on projects across education and enterprise software.";
  }

  if (lowercaseQuery.includes('contact') || lowercaseQuery.includes('hire')) {
    return "You can contact Imran through the email shown at the bottom of this page. He's currently available for AI design consulting and full-time opportunities.";
  }

  if (lowercaseQuery.includes('skills') || lowercaseQuery.includes('tools')) {
    return 'My design toolkit includes Figma, Framer, and various prototyping tools. I also have experience with front-end development using React, Next.js, and Tailwind CSS.';
  }

  // Default response
  return "Thanks for your message! Is there something specific about Imran's portfolio or experience you'd like to know more about?";
};
