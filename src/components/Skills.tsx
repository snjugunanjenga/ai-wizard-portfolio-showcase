
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Code, Database, LineChart, BarChart, Cloud, 
  Brain, Globe, PenTool, Users, Terminal
} from 'lucide-react';

const SkillCategory = ({ 
  icon: Icon, 
  title, 
  skills 
}: { 
  icon: React.ElementType; 
  title: string; 
  skills: string[] 
}) => (
  <div className="bg-tech-lightblue rounded-lg p-6 transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <Icon className="text-tech-teal mr-3" size={24} />
      <h3 className="text-tech-lightest font-semibold text-xl">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Badge
          key={index}
          className="bg-tech-navy text-tech-lightest hover:bg-tech-teal hover:text-tech-navy px-3 py-1 rounded-full text-sm font-mono transition-colors"
          variant="outline"
        >
          {skill}
        </Badge>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python (Expert)", "R", "JavaScript", "HTML/CSS"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "Deep Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: LineChart,
      title: "Data Science",
      skills: ["Data Analysis", "Data Visualization", "Web Scraping", "Statistical Modeling", "Big Data", "Pandas", "NumPy", "SciPy", "Excel"]
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design", "React.js" ]
    },
    {
      icon: Database,
      title: "Database Management",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "SQL"]
    },
    {
      icon: Terminal,
      title: "Development Tools",
      skills: ["Git", "Flask", "Django", "Jupyter", "VS Code", "Docker"]
    },
    {
      icon: BarChart,
      title: "Visualization",
      skills: ["Tableau", "Matplotlib", "Plotly", "Seaborn", "D3.js", "PowerBI"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      skills: ["AWS", "Google Cloud", "Azure", "Cloud Deployment", "MLOps"]
    },
    {
      icon: PenTool,
      title: "Automation",
      skills: ["Workflow Automation", "RPA", "ETL Processes", "Task Scheduling", "CI/CD", "RAG"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Problem Solving", "Brainstorming", "Team Leadership", "Project Management", "Communication", "Mentoring"]
    }
  ];

  return (
    <section id="skills" className="bg-tech-blue py-20">
      <div className="section-container">
        <h2 className="section-title text-tech-lightest mb-12">
          My Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SkillCategory
                icon={category.icon}
                title={category.title}
                skills={category.skills}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
