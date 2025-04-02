
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/simon-njuguna-692557104/" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Mail, href: "mailto:simonnjenganjuguna@gmail.com" }
  ];

  return (
    <footer className="bg-tech-blue pt-12 pb-8 border-t border-tech-lightblue">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-tech-lightest mb-2">SimonNjenga<span className="text-tech-teal">.</span></h2>
            <p className="text-tech-light font-mono text-sm">Python AI Developer & Data Scientist</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-tech-light hover:text-tech-teal transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-tech-lightblue mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-tech-light text-sm text-center md:text-left">
              &copy; {currentYear} Simon Njenga. All rights reserved.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <a href="#about" className="text-tech-light hover:text-tech-teal text-sm transition-colors">About</a>
              <a href="#skills" className="text-tech-light hover:text-tech-teal text-sm transition-colors">Skills</a>
              <a href="#projects" className="text-tech-light hover:text-tech-teal text-sm transition-colors">Projects</a>
              <a href="#experience" className="text-tech-light hover:text-tech-teal text-sm transition-colors">Experience</a>
              <a href="#contact" className="text-tech-light hover:text-tech-teal text-sm transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
