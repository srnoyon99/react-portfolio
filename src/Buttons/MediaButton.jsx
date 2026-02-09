import React, { useState } from 'react';
import { Github, Linkedin, Mail, Briefcase } from 'lucide-react';

export default function MediaButton() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#', gradient: 'linear-gradient(135deg, #333 0%, #000 100%)' },
    { name: 'Gmail', icon: Mail, href: '#', gradient: 'linear-gradient(135deg, #ea4335 0%, #c5221f 100%)' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', gradient: 'linear-gradient(135deg, #0077b5 0%, #005582 100%)' },
  ];

  return (
    <div className="relative ">

    

      <div className="text-center relative  z-10">
      
        
        <div className="flex flex-wrap gap-5 justify-center  max-w-lg mx-auto">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={social.name}
                className="relative"
              >
                {/* Glow effect */}
                {isHovered && (
                  <div 
                    className="absolute  rounded-2xl blur-xl opacity-60 overflow-hidden transition-opacity duration-300"
                    style={{ background: social.gradient }}
                  ></div>
                )}
                
                <a
                  href={social.href}
                  title={`Join us on ${social.name}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative block w-16 h-16 flex items-center justify-center text-white backdrop-blur-sm"
                  style={{
                    background: isHovered ? social.gradient : 'rgba(51, 65, 85, 0.5)',
                    transform: isHovered ? 'rotate(-90deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                    borderTopLeftRadius: isHovered ? '50%' : '16px',
                    borderTopRightRadius: isHovered ? '50%' : '16px',
                    borderBottomLeftRadius: isHovered ? '50%' : '16px',
                    borderBottomRightRadius: isHovered ? '16px' : '16px',
                    border: isHovered ? '2px solid rgba(255, 255, 255, 0.2)' : '2px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: isHovered 
                      ? '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
                      : '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border-radius 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s, background 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
                  }}
                >
                  <span 
                    style={{
                      transform: isHovered ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon className="w-7 h-7" strokeWidth={2} />
                  </span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}