/**
 * Utility functions for managing document scroll locking
 * Used when displaying modals, dialogs, or expanding UI elements
 */

// Store the original body styles to restore them later
let originalStyles: {
  overflow?: string;
  position?: string;
  top?: string;
  width?: string;
  paddingRight?: string;
} = {};

/**
 * Get the width of the browser's scrollbar
 * @returns Width of the scrollbar in pixels
 */
const getScrollbarWidth = (): number => {
  // Create a temporary div to measure scrollbar width
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);
  
  // Create inner div to get the difference in width
  const inner = document.createElement('div');
  outer.appendChild(inner);
  
  // Calculate the scrollbar width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  
  // Clean up
  outer.parentNode?.removeChild(outer);
  
  return scrollbarWidth;
};

/**
 * Toggles scroll locking on the body element
 * @param lock Whether to lock (true) or unlock (false) scrolling
 */
export const toggleScrollLock = (lock: boolean): void => {
  // Don't do anything on the server
  if (typeof document === 'undefined') return;
  
  if (lock) {
    // Store current scroll position
    const scrollY = window.scrollY;
    
    // Calculate scrollbar width to prevent layout shift
    const hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
    const scrollbarWidth = hasScrollbar ? getScrollbarWidth() : 0;
    
    // Save original styles before modifying
    originalStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      paddingRight: document.body.style.paddingRight
    };
    
    // Apply scroll lock
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    
    // Add padding to compensate for scrollbar removal
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  } else {
    // Restore original styles and scroll position
    document.body.style.overflow = originalStyles.overflow || '';
    document.body.style.position = originalStyles.position || '';
    document.body.style.paddingRight = originalStyles.paddingRight || '';
    
    // Get scroll position from body top property
    const scrollY = document.body.style.top
      ? parseInt(document.body.style.top || '0') * -1
      : 0;
    
    document.body.style.top = originalStyles.top || '';
    document.body.style.width = originalStyles.width || '';
    
    // Restore scroll position
    window.scrollTo(0, scrollY);
  }
}; 