
import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-cyber-blue/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
  <img 
    src="/csc-logo-white.png" 
    alt="Club Logo" 
    className="h-10 w-auto mr-2" 
  />
  <span className="text-white font-mono font-bold text-lg">
  </span>
</div>

          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {["about", "events", "projects", "team", "resources", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-gray-300 hover:text-cyber-green transition-colors uppercase tracking-wider green-glow"
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden flex items-center text-cyber-green focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 top-16 z-40 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="bg-cyber-dark-blue/95 backdrop-blur-md h-full flex flex-col pt-5">
          {["about", "events", "projects", "team", "resources", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="px-8 py-4 text-left text-lg font-medium border-b border-gray-800 text-gray-300 hover:text-cyber-green hover:bg-cyber-blue/30 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
