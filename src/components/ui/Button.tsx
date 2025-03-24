"use client";

import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'secondary' | 'gradient';
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  preventScroll?: boolean;
}

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  onClick,
  preventScroll = false
}: ButtonProps) => {
  // Define base styles that all buttons share
  const baseStyle = "group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium cursor-pointer";
  
  // Define variant-specific styles
  let variantStyle = "";
  switch(variant) {
    case 'primary':
      // More distinctive color for primary button with strong border and increased contrast
      variantStyle = "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md border-2 border-indigo-500";
      break;
    case 'outline':
      // Simpler, high-contrast implementation with accent color
      variantStyle = "bg-transparent border-2 border-accent text-accent hover:bg-accent/10";
      break;
    case 'secondary':
      variantStyle = "bg-accent/10 hover:bg-accent/20 text-accent";
      break;
    case 'gradient':
      variantStyle = "bg-gradient-to-r from-accent to-tertiary text-white shadow-sm hover:shadow-md";
      break;
    default:
      variantStyle = "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md border-2 border-indigo-500";
  }
  
  // Combine all styles
  const combinedStyles = `${baseStyle} ${variantStyle} ${className}`;
  
  // Wrapper for click handler that can prevent scroll jump
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (preventScroll) {
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Prevent default behavior
      e.preventDefault();
      
      // If it's a link with href, handle navigation manually
      if (href) {
        // Delay navigation slightly to allow scroll position to be maintained
        setTimeout(() => {
          window.location.href = href;
        }, 10);
      }
      
      // For button clicks, call the provided handler
      if (onClick && !href) {
        onClick(e as React.MouseEvent<HTMLButtonElement>);
      }
      
      // Reset scroll position immediately and after a slight delay
      window.scrollTo(0, scrollY);
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
    } else if (onClick && !href) {
      // Default behavior for regular buttons
      onClick(e as React.MouseEvent<HTMLButtonElement>);
    }
  };
  
  // Return a Link or button based on whether href is provided
  if (href) {
    return (
      <Link 
        href={href} 
        className={combinedStyles}
        onClick={preventScroll ? handleClick : undefined}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type="button"
      className={combinedStyles}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button; 