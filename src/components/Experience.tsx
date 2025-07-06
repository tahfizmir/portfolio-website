import React from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Autodesk',
      position: 'Software Development Engineering Intern',
      duration: 'Jan 2025 - June 2025',
      location: 'Pune, Maharashtra',
      description: 'Worked on Autodesk Fusion, a multi-billion dollar product catering to millions of users worldwide.',
      achievements: [
        'Developed and optimized UI components in Autodesk Fusion using React, enhancing user experience',
        'Engineered backend logic in C++ to support seamless integration of new frontend features',
        'Stabilized internal automation pipelines, reducing CI test failures by 33%.',
        'Elevated test automation coverage from 89% to 95% through creation of robust, targeted test cases in N-test and Cypress',
        'Participated in code reviews and maintained high code quality standards',
        'Debugged critical bugs spanning multiple repositories and complex workflows in a large-scale codebase, significantly improving system stability impacting more than 4.6 million users'
      ],
      technologies: ['React.js', 'TypeScript', 'Node.js', 'Cypress', 'C++']
    },

  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and the valuable experiences that have shaped my career
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content card">
                <div className="experience-header">
                  <div className="company-info">
                    <h3>{exp.position}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className="experience-icon">
                    <FiBriefcase />
                  </div>
                </div>

                <div className="experience-details">
                  <div className="detail-item">
                    <FiCalendar />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="detail-item">
                    <FiMapPin />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <ul className="achievements">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>

                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 