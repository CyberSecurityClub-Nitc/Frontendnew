
import React from 'react';
import { Shield, Target, Trophy, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-cyber-dark-blue">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          {/* Left column - Text content */}
          <div className="w-full md:w-1/2 animate-page-transition opacity-0">
            <h2 className="section-title">About Us</h2>
            <p className="text-gray-300 mb-8 text-lg">
              The NIT Calicut Cybersecurity Club is dedicated to fostering a community of digital defenders who collaborate, learn, and innovate in the field of cybersecurity. We empower students with practical skills and theoretical knowledge to navigate and secure our increasingly connected world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-5">
                <div className="flex items-center mb-3">
                  <Shield className="h-5 w-5 text-cyber-green mr-2" />
                  <h3 className="font-bold text-lg">Our Mission</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  To promote cybersecurity awareness, skill development, and ethical hacking practices among students.
                </p>
              </div>
              <div className="glass-card p-5">
                <div className="flex items-center mb-3">
                  <Target className="h-5 w-5 text-cyber-green mr-2" />
                  <h3 className="font-bold text-lg">Our Vision</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  To build a network of skilled cybersecurity professionals who contribute to a safer digital ecosystem.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right column - Achievement stats */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 animate-page-transition opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 matrix-grid opacity-25"></div>
              <h3 className="text-2xl font-bold mb-6 text-cyber-green">Club Achievements</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Trophy className="h-10 w-10 text-cyber-light-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">CTF Championships</h4>
                    <p className="text-gray-300">Secured top positions in national and international CTF competitions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Users className="h-10 w-10 text-cyber-light-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Community Growth</h4>
                    <p className="text-gray-300">Growing community of 200+ active members from various engineering disciplines.</p>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-3xl font-bold text-white">50+</span>
                      <span className="text-sm text-gray-300">Workshops Conducted</span>
                    </div>
                    <div>
                      <span className="block text-3xl font-bold text-white">20+</span>
                      <span className="text-sm text-gray-300">CTFs Participated</span>
                    </div>
                    <div>
                      <span className="block text-3xl font-bold text-white">15+</span>
                      <span className="text-sm text-gray-300">Projects Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
