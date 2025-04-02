
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
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

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-tech-blue/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="text-tech-teal font-mono font-bold text-xl">SimonNjenga</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="text-tech-lightest hover:text-tech-teal font-mono text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <Button className="btn-primary font-mono">Resume</Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-tech-lightest hover:text-tech-teal focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'fixed inset-0 bg-tech-blue/95 backdrop-blur-md z-50 flex items-center justify-center' : 'hidden'}`}>
        <div className="flex flex-col items-center space-y-8 p-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-tech-lightest hover:text-tech-teal text-xl font-mono"
            >
              {item.name}
            </a>
          ))}
          <Button onClick={() => window.open('/resume.pdf')} className="btn-primary mt-4">Resume</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
