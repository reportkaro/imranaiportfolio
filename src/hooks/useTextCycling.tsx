import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Configuration options for the text cycling animation
 */
export interface TextCyclingOptions {
  /** Array of texts to cycle through */
  texts: string[];
  /** Duration for typing animation in milliseconds */
  typingSpeed?: number;
  /** Duration to pause between animations in milliseconds */
  pauseDuration?: number;
  /** Whether to start automatically */
  autoStart?: boolean;
  /** Character typing speed in ms per character (for typewriter effect) */
  charTypingSpeed?: number;
}

/**
 * Return type for the useTextCycling hook
 */
export interface TextCyclingResult {
  /** Current text being displayed */
  currentText: string;
  /** Current display text for typewriter effect */
  displayText: string;
  /** Opacity value for the text (0-1) */
  textOpacity: number;
  /** Whether the text is currently in typing mode */
  typing: boolean;
  /** Whether the text is currently in deleting mode */
  deleting: boolean;
  /** Current animation status */
  status: TextCyclingStatus;
  /** Function to manually advance to the next text */
  next: () => void;
  /** Whether typewriter mode is active */
  typewriterActive: boolean;
}

/**
 * Possible states for the text cycling animation
 */
export type TextCyclingStatus = 'typing' | 'deleting' | 'pausing';

/**
 * A hook that cycles through a list of texts with typing-like animation
 * 
 * @param options Configuration options for the text cycling
 * @returns Object containing the current state and controls
 */
export const useTextCycling = ({ 
  texts, 
  typingSpeed = 2000, 
  pauseDuration = 2000,
  autoStart = true,
  charTypingSpeed = 80
}: TextCyclingOptions): TextCyclingResult => {
  const [index, setIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>(texts[0]);
  const [displayText, setDisplayText] = useState<string>('');
  const [textOpacity, setTextOpacity] = useState<number>(1);
  const [status, setStatus] = useState<TextCyclingStatus>(autoStart ? 'typing' : 'pausing');
  const [typewriterActive, setTypewriterActive] = useState<boolean>(true);
  
  // For typewriter effect
  const charIndexRef = useRef<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback((): void => {
    const nextIndex = (index + 1) % texts.length;
    setIndex(nextIndex);
    setCurrentText(texts[nextIndex]);
  }, [index, texts]);

  // Typewriter effect
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    
    // Handle typewriter animations
    if (status === 'typing') {
      setTypewriterActive(true);
      
      if (charIndexRef.current < currentText.length) {
        // Type the next character
        timerRef.current = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndexRef.current + 1));
          charIndexRef.current += 1;
        }, charTypingSpeed);
      } else {
        // We've finished typing all characters
        setTypewriterActive(false);
        timerRef.current = setTimeout(() => {
          setStatus('pausing');
        }, typingSpeed - (currentText.length * charTypingSpeed));
      }
    } 
    else if (status === 'pausing') {
      timerRef.current = setTimeout(() => {
        setStatus('deleting');
        setTypewriterActive(true);
      }, pauseDuration);
    }
    else if (status === 'deleting') {
      if (charIndexRef.current > 0) {
        // Delete the next character
        timerRef.current = setTimeout(() => {
          charIndexRef.current -= 1;
          setDisplayText(currentText.substring(0, charIndexRef.current));
        }, charTypingSpeed * 0.6); // Delete faster than type
      } else {
        // We've deleted all characters
        setTypewriterActive(false);
        next();
        charIndexRef.current = 0;
        setStatus('typing');
      }
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentText, status, next, pauseDuration, typingSpeed, charTypingSpeed, displayText]);

  return { 
    currentText, 
    displayText,
    textOpacity, 
    typing: status === 'typing',
    deleting: status === 'deleting',
    status,
    next,
    typewriterActive
  };
}; 