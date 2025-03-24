import { useState, useEffect, useCallback } from 'react';

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
}

/**
 * Return type for the useTextCycling hook
 */
export interface TextCyclingResult {
  /** Current text being displayed */
  currentText: string;
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
  autoStart = true
}: TextCyclingOptions): TextCyclingResult => {
  const [index, setIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>(texts[0]);
  const [textOpacity, setTextOpacity] = useState<number>(1);
  const [status, setStatus] = useState<TextCyclingStatus>(autoStart ? 'typing' : 'pausing');

  const next = useCallback((): void => {
    const nextIndex = (index + 1) % texts.length;
    setIndex(nextIndex);
    setCurrentText(texts[nextIndex]);
  }, [index, texts]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (status === 'typing') {
      setTextOpacity(1);
      timer = setTimeout(() => {
        setStatus('pausing');
      }, typingSpeed);
    } 
    else if (status === 'pausing') {
      timer = setTimeout(() => {
        setStatus('deleting');
      }, pauseDuration);
    }
    else if (status === 'deleting') {
      timer = setTimeout(() => {
        next();
        setStatus('typing');
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [status, pauseDuration, typingSpeed, next]);

  return { 
    currentText, 
    textOpacity, 
    typing: status === 'typing',
    deleting: status === 'deleting',
    status,
    next
  };
}; 