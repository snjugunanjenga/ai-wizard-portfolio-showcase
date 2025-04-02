
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Briefcase, Building } from 'lucide-react';

interface JobProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  skills?: string[];
}

const JobCard = ({ title, company, duration, description, skills }: JobProps) => (
  <div className="p-6 bg-tech-lightblue rounded-lg shadow-lg">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-tech-lightest">{title}</h3>
        <p className="text-tech-teal flex items-center">
          <Building size={16} className="mr-1" /> {company}
        </p>
      </div>
      <div className="text-tech-light font-mono flex items-center mt-2 sm:mt-0">
        <Calendar size={16} className="mr-1" /> {duration}
      </div>
    </div>
    
    <ul className="space-y-2 mb-4">
      {description.map((item, index) => (
        <li key={index} className="text-tech-light flex items-start">
          <span className="text-tech-teal mr-2">▹</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    
    {skills && skills.length > 0 && (
      <div className="mt-4 pt-4 border-t border-tech-teal/20">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="text-xs font-mono text-tech-teal bg-tech-navy px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const Experience = () => {
  const jobs = [
    {
      category: "ai",
      title: "Senior AI Developer & Data Scientist",
      company: "Independent Contractor",
      duration: "June 2016 - Present",
      description: [
        "Led the development and deployment of machine learning models for various clients, improving predictive accuracy and operational efficiency.",
        "Automated data processing workflows, reducing manual efforts by 50% and accelerating project timelines.",
        "Developed AI-driven chatbots and recommendation systems, enhancing customer interaction and engagement.",
        "Conducted extensive data analysis to provide actionable insights, driving strategic decision-making for clients.",
        "Mentored junior developers and data scientists, fostering a culture of continuous learning and innovation.",
        "Utilized cloud platforms like AWS, Google Cloud, and Azure for deploying and managing AI solutions.",
        "Expertise in web scraping and data extraction using tools like Selenium and BeautifulSoup."
      ],
      skills: ["Python", "Machine Learning", "Data Science", "Cloud Services", "Web Scraping", "Mentoring"]
    },
    {
      category: "government",
      title: "Presiding Officer",
      company: "Independent Electoral and Boundaries Commission, Kenya",
      duration: "Aug 2022 - Sept 2022",
      description: [
        "In charge of elections process in the polling station.",
        "Counted and tallied votes cast.",
        "Announced election results in a designated polling station.",
        "Signed the official results declaration forms in a polling station.",
        "Transmitted result electronically to the national and constituency tallying centers.",
        "Handed over the official results to the Returning Officer at the constituency tallying center."
      ],
      skills: ["Leadership", "Data Management", "Electronic Systems", "Reporting"]
    },
    {
      category: "finance",
      title: "Loan Officer (Sales and Marketing)",
      company: "Housing Finance Bank HFC, Kenya, Nairobi",
      duration: "May 2019 - Nov 2020",
      description: [
        "Oversaw entire loan application process including proper loan documentation.",
        "Ensured timely payment of loan installments.",
        "Consistent marketing and recruitment of new clients to achieve sales goals and loan quotas."
      ],
      skills: ["Sales", "Customer Service", "Document Management", "Financial Services"]
    },
    {
      category: "data",
      title: "Data Specialist (Sports Performance Analyst)",
      company: "CloudFactory, Kenya, Nairobi",
      duration: "May 2018 - Nov 2018",
      description: [
        "Captured all the actions happening on the pitch to later tag and create video playlists of each player to present clips showing mistakes and any positives from the match.",
        "Presentation of opposition offensive and defensive formations, tactical analysis and any relevant actions that need consideration by coaches.",
        "Creation of reports on various aspect of performance.",
        "Interpretation, analysis and dissemination of performance data."
      ],
      skills: ["Data Analysis", "Video Analysis", "Reporting", "Performance Metrics"]
    },
    {
      category: "finance",
      title: "Commercial Loan Officer",
      company: "Instant Fundry Investments, Kenya, Nairobi",
      duration: "Feb 2017 - Jan 2018",
      description: [
        "Oversaw entire loan application process including proper loan documentation.",
        "Ensured timely payment of loan installments.",
        "Consistent marketing and recruitment of new clients to achieve sales goals and loan quotas."
      ],
      skills: ["Commercial Loans", "Client Acquisition", "Documentation", "Sales"]
    },
    {
      category: "finance",
      title: "Loan Officer",
      company: "Premier Credit Ltd, Kenya, Nairobi",
      duration: "Feb 2016 - Jan 2017",
      description: [
        "Oversaw entire loan application process including proper loan documentation.",
        "Ensured timely payment of loan installments.",
        "Consistent marketing and recruitment of new clients to achieve sales goals and loan quotas."
      ],
      skills: ["Loan Processing", "Customer Relationship", "Sales", "Documentation"]
    }
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredJobs = activeCategory === "all" 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);

  return (
    <section id="experience" className="bg-tech-blue py-20">
      <div className="section-container">
        <h2 className="section-title text-tech-lightest">
          Work Experience
        </h2>
        
        <Tabs defaultValue="all" className="mt-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-tech-navy/50 backdrop-blur-sm">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveCategory("all")}
                className="data-[state=active]:bg-tech-lightblue data-[state=active]:text-tech-teal"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="ai" 
                onClick={() => setActiveCategory("ai")}
                className="data-[state=active]:bg-tech-lightblue data-[state=active]:text-tech-teal"
              >
                AI Development
              </TabsTrigger>
              <TabsTrigger 
                value="data" 
                onClick={() => setActiveCategory("data")}
                className="data-[state=active]:bg-tech-lightblue data-[state=active]:text-tech-teal"
              >
                Data Analysis
              </TabsTrigger>
              <TabsTrigger 
                value="finance" 
                onClick={() => setActiveCategory("finance")}
                className="data-[state=active]:bg-tech-lightblue data-[state=active]:text-tech-teal"
              >
                Finance
              </TabsTrigger>
              <TabsTrigger 
                value="government" 
                onClick={() => setActiveCategory("government")}
                className="data-[state=active]:bg-tech-lightblue data-[state=active]:text-tech-teal"
              >
                Government
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 gap-8">
              {filteredJobs.map((job, index) => (
                <div 
                  key={index} 
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <JobCard {...job} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="mt-0">
            <div className="grid grid-cols-1 gap-8">
              {filteredJobs.map((job, index) => (
                <div 
                  key={index} 
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <JobCard {...job} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="data" className="mt-0">
            <div className="grid grid-cols-1 gap-8">
              {filteredJobs.map((job, index) => (
                <div 
                  key={index} 
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <JobCard {...job} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="finance" className="mt-0">
            <div className="grid grid-cols-1 gap-8">
              {filteredJobs.map((job, index) => (
                <div 
                  key={index} 
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <JobCard {...job} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="government" className="mt-0">
            <div className="grid grid-cols-1 gap-8">
              {filteredJobs.map((job, index) => (
                <div 
                  key={index} 
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <JobCard {...job} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
