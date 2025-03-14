import React from 'react';
import { Shield, Github, Twitter, Instagram, LinkedinIcon, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cyber-dark-blue pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-7 w-7 text-cyber-green mr-2" />
              <span className="text-white text-xl font-bold">NITC<span className="text-cyber-green">Sec</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering digital defenders and building a community of cybersecurity enthusiasts at NIT Calicut.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyber-green transition-colors">About Us</a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-cyber-green transition-colors">Events</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-cyber-green transition-colors">Projects</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-cyber-green transition-colors">Team</a>
              </li>
              <li>
                <a href="#resources" className="text-gray-400 hover:text-cyber-green transition-colors">Resources</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyber-green transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Subscribe to Updates</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest events, workshops, and cybersecurity resources.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-cyber-blue/50 text-white border border-gray-700 rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-cyber-green flex-grow"
              />
              <button className="bg-cyber-green text-cyber-blue px-4 py-2 rounded-r-md hover:bg-cyber-light-green transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} NITC Cybersecurity Club. All rights reserved.
          </p>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="absolute right-8 bottom-8 rounded-full bg-cyber-green p-3 text-cyber-blue hover:bg-cyber-light-green transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
