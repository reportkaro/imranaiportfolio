"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' }
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-white dark:bg-gray-900 border-b border-border shadow-sm' 
          : 'py-6 bg-white dark:bg-gray-900'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight transition-all duration-300 hover:bg-gradient-to-r hover:from-accent hover:via-tertiary hover:to-accent hover:bg-[length:200%_auto] hover:bg-clip-text hover:text-transparent"
        >
          <span className="gradient-text">Imran Mohammed</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-accent/20 rounded"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span 
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className="link-effect text-foreground transition-all duration-300 hover:bg-gradient-to-r hover:from-accent hover:via-tertiary hover:to-accent hover:bg-[length:200%_auto] hover:bg-clip-text hover:text-transparent relative py-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile navigation */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-border py-4 shadow-md transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <nav className="container mx-auto px-6">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="block py-3 text-foreground transition-all duration-300 hover:bg-gradient-to-r hover:from-accent hover:via-tertiary hover:to-accent hover:bg-[length:200%_auto] hover:bg-clip-text hover:text-transparent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 