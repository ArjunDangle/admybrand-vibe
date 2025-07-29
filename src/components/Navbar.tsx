import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between py-6">
        {/* Logo - CodeArt style */}
        <div className="text-xl font-light text-foreground">
          ADmy<span className="text-primary">BRAND</span>
        </div>
        
        {/* Navigation Links - CodeArt minimal */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 font-light text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
        
        {/* Action Button - CodeArt style */}
        <div className="flex items-center">
          <button className="btn-outline text-sm px-6 py-2">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};