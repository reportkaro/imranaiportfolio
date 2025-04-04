import { Message } from '../types/chat';

/**
 * Initial messages to greet visitors
 */
export const initialMessages: Message[] = [
  {
    id: '1',
    text: "👋 Hi there! I'm Imran's AI assistant. I can answer questions about Imran's experience, skills, and design approach.",
    sender: 'bot',
    timestamp: new Date(),
  },
  {
    id: '2',
    text: "What would you like to know about Imran's work or experience?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

/**
 * Suggested questions to help users get started
 */
export const suggestedQuestions = [
  "What's Imran's experience with AI design?",
  "Tell me about Imran's design process",
  "What are Imran's key skills?",
  'What design tools does Imran use?',
  'Share some project highlights',
];

/**
 * Temporary response generator (will be replaced with actual AI)
 */
export const generateResponse = (text: string): string => {
  // Simple keyword matching for now
  const lowerText = text.toLowerCase();

  if (lowerText.includes('experience') || lowerText.includes('background')) {
    return 'Imran is an AI Experience Designer with several years of experience creating intuitive interfaces for AI-powered products. Imran has worked with cross-functional teams to design experiences that balance automation with human control.';
  }

  if (lowerText.includes('process') || lowerText.includes('approach')) {
    return 'Imran follows a human-centered design process that begins with extensive research to understand user needs. For AI experiences, Imran focuses on creating transparent interfaces that build trust, provide appropriate control, and communicate AI capabilities clearly.';
  }

  if (lowerText.includes('skills') || lowerText.includes('tools')) {
    return 'Imran is proficient in Figma, Adobe Creative Suite, and prototyping tools. Imran brings strong skills in UX research, interaction design, visual design, and AI-specific considerations like designing for uncertainty and machine learning limitations.';
  }

  if (lowerText.includes('project') || lowerText.includes('work')) {
    return 'Imran has designed AI experiences across various domains including a conversational assistant for a financial services company, an AI-powered content recommendation system, and an intelligent data analysis tool that simplified complex insights for non-technical users.';
  }

  // Fallback response
  return "That's a great question! In a fully implemented version, I'd have a detailed answer about Imran's approach to that. Is there something specific about Imran's design experience or AI expertise you'd like to know?";
};
