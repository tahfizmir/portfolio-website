import React from 'react';
import { FiCode, FiDatabase, FiServer, FiSmartphone } from 'react-icons/fi';
import './About.css';

const About: React.FC = () => {
  const skills = [
    {
      icon: <FiCode />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
      icon: <FiServer />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications and APIs',
      technologies: ['Node.js', 'Express', 'Python', 'Django']
    },
    {
      icon: <FiDatabase />,
      title: 'Database Management',
      description: 'Designing and optimizing database solutions',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL']
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my background, skills, and what drives my passion for development
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p>
                I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
                My journey in software development began during my computer science studies, where I discovered 
                my love for creating digital solutions that make a real impact.
              </p>
              <p>
                I thrive on turning complex problems into simple, beautiful, and intuitive solutions. 
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
              <p>
                My goal is to leverage technology to build products that not only meet business objectives 
                but also provide exceptional user experiences. I'm always eager to take on new challenges 
                and collaborate with like-minded individuals.
              </p>
            </div>

            <div className="stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Technologies Mastered</p>
              </div>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card card">
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div className="technologies">
                  {skill.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 