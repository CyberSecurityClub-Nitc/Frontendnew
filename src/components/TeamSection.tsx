import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialization: string;
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "President",
      specialization: "Network Security",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
      github: "#",
      linkedin: "#",
      email: "alex@example.com"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Vice President",
      specialization: "Web Security",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
      github: "#",
      linkedin: "#",
      email: "sarah@example.com"
    },
    {
      id: 3,
      name: "Rahul Sharma",
      role: "Technical Lead",
      specialization: "Malware Analysis",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
      github: "#",
      linkedin: "#",
      email: "rahul@example.com"
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "CTF Coordinator",
      specialization: "Cryptography",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
      github: "#",
      linkedin: "#",
      email: "priya@example.com"
    },
    {
      id: 5,
      name: "Michael Okonkwo",
      role: "Workshop Coordinator",
      specialization: "Penetration Testing",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
      github: "#",
      linkedin: "#",
      email: "michael@example.com"
    },
    {
      id: 6,
      name: "Aisha Khan",
      role: "Outreach Coordinator",
      specialization: "Digital Forensics",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
      github: "#",
      linkedin: "#",
      email: "aisha@example.com"
    }
  ];

  return (
    <section id="team" className="py-20 bg-cyber-blue">
      <div className="section-container">
        <h2 className="section-title">Our Team</h2>
        <p className="text-gray-300 mb-10 max-w-3xl">
          Meet the passionate cybersecurity enthusiasts who lead our club initiatives, organize events, and drive our community forward.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="glass-card overflow-hidden rounded-xl card-hover"
            >
              <div className="relative h-60 mb-4 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-blue/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-cyber-green font-medium">{member.role}</p>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-300 text-sm mb-4">
                  <span className="text-white font-medium">Specialization:</span> {member.specialization}
                </p>
                
                <div className="flex justify-start space-x-4 mt-2">
                  {member.github && (
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyber-green transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyber-green transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-cyber-green transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Interested in joining our core team? We're always looking for passionate individuals!
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-cyber-green text-cyber-blue font-medium rounded-md hover:bg-cyber-light-green transition-colors"
          >
            Apply to Join
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
