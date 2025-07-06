import React from "react";
import { FiCode, FiCoffee, FiDatabase, FiServer } from "react-icons/fi";
import "./About.css";

const About: React.FC = () => {
  const skills = [
    {
      icon: <FiCode />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      icon: <FiServer />,
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs",
      technologies: ["Node.js", "Express", "Springboot"],
    },
    {
      icon: <FiDatabase />,
      title: "Database Management",
      description: "Designing and optimizing database solutions",
      technologies: ["MongoDB", "Redis", "MySQL"],
    },
    {icon: <FiCoffee />,
      title: "Problem Solving",
      description: "Solving comples DSA problems",
      technologies: ["C++"],}
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my background, skills, and what drives my
            passion for development
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p>
                I'm a passionate full-stack developer with a strong foundation
                in modern web technologies. My journey in software development
                began during my computer science studies, where I discovered my
                love for creating digital solutions that make a real impact.
              </p>
              <p>
                During my time at Autodesk, I worked on frontend optimizations
                in Autodesk Fusion, backend logic integration, and improved
                automation pipelines and testing coverage. Beyond that, I have
                hands-on experience with Node.js, Express, MongoDB, and related
                technologies, with a strong interest in building robust
                full-stack applications
              </p>
              <p>
                My goal is to leverage technology to build products that not
                only meet business objectives but also provide exceptional user
                experiences. I'm always eager to take on new challenges and
                collaborate with like-minded individuals.
              </p>
            </div>

          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card card">
                <div className="skill-icon">{skill.icon}</div>
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
