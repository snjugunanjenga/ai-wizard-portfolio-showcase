
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-tech-navy py-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-3/5">
            <h2 className="section-title text-tech-lightest">
              About Me
            </h2>
            
            <div className="space-y-4 text-tech-light">
              <p>
                I'm a seasoned Python AI Programmer and Data Scientist with over a decade of experience
                in developing and deploying machine learning models, automating workflows, and driving data-driven 
                decision-making. My journey in tech has been focused on transforming complex data into actionable 
                insights and leveraging AI to solve real-world problems.
              </p>
              
              <p>
                With expertise in Python programming and data science, I've led the development of machine learning models
                that improve predictive accuracy and operational efficiency. I've automated data processing workflows, 
                reducing manual efforts by 50% and accelerating project timelines for various clients.
              </p>
              
              <p>
                Beyond technical skills, I bring a problem-solving mindset and a passion for continuous learning. 
                I enjoy mentoring junior developers and data scientists, fostering a culture of innovation and knowledge sharing.
              </p>
              
              <p>
                When I'm not coding or analyzing data, I'm constantly exploring the latest advancements in AI 
                and machine learning to stay at the forefront of this rapidly evolving field.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-tech-teal font-mono text-lg mb-3">Career Objective</h3>
              <p className="text-tech-light italic border-l-2 border-tech-teal pl-4">
                "A seasoned Python AI Programmer and Data Scientist with over 10 years of experience in developing and deploying machine learning models, automating workflows, and driving data-driven decision-making. Dedicated to transforming data into actionable insights and leveraging AI to solve complex problems. Passionate about continuous learning and staying abreast of the latest advancements in AI and machine learning!"
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 bg-tech-lightblue rounded-lg p-6 shadow-lg">
            <h3 className="text-tech-teal font-mono text-xl mb-4">Education</h3>
            <div className="space-y-6">
              <div>
                <p className="text-tech-lightest font-semibold">BSc Mathematics and Computer Science</p>
                <p className="text-tech-light">Multimedia University, Kenya, Nairobi</p>
                <p className="text-tech-light text-sm">2012-2015</p>
                <p className="text-tech-teal text-sm mt-1">Majored in Statistics and Data Analysis</p>
              </div>
              
              <div>
                <p className="text-tech-lightest font-semibold">Diploma in Animal Health and Production</p>
                <p className="text-tech-light">Ahiti, Ndomba</p>
                <p className="text-tech-light text-sm">2021-2023</p>
              </div>
              
              <div>
                <p className="text-tech-lightest font-semibold">C.P.A (PART 1-Section I)</p>
                <p className="text-tech-light">KASNEB</p>
                <p className="text-tech-light text-sm">2012</p>
              </div>
              
              <div>
                <p className="text-tech-lightest font-semibold">Kenya Certificate of Secondary Education (K.C.S.E)</p>
                <p className="text-tech-light">Kagumo High School, Kenya, Nyeri</p>
                <p className="text-tech-light text-sm">2007-2010</p>
                <p className="text-tech-teal text-sm mt-1">Grade: B+</p>
              </div>
              
              <div>
                <p className="text-tech-lightest font-semibold">Kenya Certificate of Primary Education (K.C.P.E)</p>
                <p className="text-tech-light">Busara Forest View Academy, Kenya, Nyahururu</p>
                <p className="text-tech-light text-sm">2000-2006</p>
                <p className="text-tech-teal text-sm mt-1">Marks: 414/500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
