
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-tech-blue">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5 space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <p className="text-tech-teal font-mono">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-tech-lightest">
              Simon Njenga.
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-tech-light">
              I build intelligent systems.
            </h2>
            <p className="text-tech-light max-w-2xl text-lg md:text-xl">
              I'm a <span className="text-tech-teal">Python AI Programmer and Data Scientist</span> with 10+ years of experience,
              specializing in developing and deploying machine learning models.
              I transform complex data into actionable insights and leverage AI
              to solve real-world problems.
            </p>
            <div className="pt-4">
              <Button asChild className="btn-primary text-base">
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="relative w-60 h-60 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-tech-teal/20 animate-pulse"></div>
              <img 
                src="/lovable-uploads/33bcb54b-2d4c-4547-97ce-50761ba2219d.png" 
                alt="Simon Njenga" 
                className="rounded-full w-full h-full object-cover border-4 border-tech-teal z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-tech-navy rounded-full border-2 border-tech-teal flex items-center justify-center animate-float">
                <div className="text-tech-teal font-mono text-sm text-center">
                  <div>10+</div>
                  <div>Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden md:block absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-tech-teal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        </a>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-8 w-24 h-24 border border-tech-teal/20 rounded-full"></div>
      <div className="absolute bottom-20 left-8 w-16 h-16 border border-tech-teal/20 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-tech-teal/30 rounded-full"></div>
    </section>
  );
};

export default Hero;
