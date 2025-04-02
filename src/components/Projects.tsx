
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
  reversed?: boolean;
}

const Project = ({ title, description, image, tags, links, reversed = false }: ProjectProps) => (
  <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-24`}>
    <div className="w-full md:w-3/5 rounded-lg overflow-hidden">
      <div className="relative group h-72 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-tech-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {links.github && (
            <a href={links.github} className="text-tech-teal hover:text-white transition-colors p-2 bg-tech-navy/80 rounded-full" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
          )}
          {links.live && (
            <a href={links.live} className="text-tech-teal hover:text-white transition-colors p-2 bg-tech-navy/80 rounded-full" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
    
    <div className="w-full md:w-2/5">
      <h3 className="text-2xl font-semibold text-tech-lightest mb-2">{title}</h3>
      <div className="bg-tech-lightblue p-6 rounded-lg shadow-lg mb-4">
        <p className="text-tech-light">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Badge key={index} className="tech-tag">{tag}</Badge>
        ))}
      </div>
    </div>
  </div>
);

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Predictive Analytics Dashboard",
      description: "A comprehensive dashboard built using Python, Flask, and Plotly for visualizing and analyzing predictive models. Implemented machine learning algorithms to forecast key business metrics with 90% accuracy.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      tags: ["Python", "Machine Learning", "Flask", "Plotly", "Pandas", "scikit-learn"],
      links: {
        github: "https://github.com",
        live: "#"
      }
    },
    {
      title: "NLP Document Classifier",
      description: "Automated document classification system using Natural Language Processing to categorize thousands of documents. Implemented using PyTorch and BERT with 92% classification accuracy.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      tags: ["Python", "NLP", "PyTorch", "BERT", "Text Classification", "Docker"],
      links: {
        github: "https://github.com",
      }
    },
    {
      title: "Data Processing Pipeline",
      description: "Designed and implemented an ETL pipeline that processes and transforms 500GB+ of raw data daily. Built with Python, Apache Airflow, and deployed on AWS infrastructure.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      tags: ["Python", "Apache Airflow", "AWS", "ETL", "Big Data", "PostgreSQL"],
      links: {
        github: "https://github.com",
        live: "#"
      }
    }
  ];

  return (
    <section id="projects" className="bg-tech-navy py-20">
      <div className="section-container">
        <h2 className="section-title text-tech-lightest">
          <span className="text-tech-teal font-mono">03.</span> Featured Projects
        </h2>
        
        <div className="mt-16">
          {projects.map((project, index) => (
            <Project
              key={index}
              {...project}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button className="btn-primary">
            See More Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
