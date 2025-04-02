
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import FeaturedProjects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Simon Njenga | Python AI Developer & Data Scientist";
  }, []);

  return (
    <div className="bg-tech-blue text-tech-lightest min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
