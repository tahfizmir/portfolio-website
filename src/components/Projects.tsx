import React from 'react';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import './Projects.css';

const Projects: React.FC = () => {
const projects = [
  {
    title: 'Video Hosting Platform',
    description: 'A full-stack platform to upload, stream, and manage video content with user accounts and secure streaming.',
    image: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?w=500&h=300&fit=crop&auto=format&q=80',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js','JWT', 'Bcrypt'],
    github: 'https://github.com/yourusername/video-hosting-platform',
    features: ['User Authentication', 'Video Upload', 'Secure Streaming', 'Responsive Design','User Profiles']
  },
  {
    title: 'Blogging Platform',
    description: 'A feature-rich blogging platform with user authentication, rich text editing, and SEO-friendly post management.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&h=300&fit=crop&auto=format&q=80',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    github: 'https://github.com/yourusername/blogging-platform',
    features: ['User Authentication', 'Rich Text Editor', 'SEO Optimization']
  },
  {
    title: 'Food Delivery Platform',
    description: 'A responsive food delivery application with restaurant listings, order tracking, and integrated payment.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&h=300&fit=crop&auto=format&q=80',
    technologies: ['React.js', 'Node.js', 'Live API'],
    github: 'https://github.com/yourusername/food-delivery-platform',
    features: ['Restaurant Listings', 'Order Tracking', 'Cart Integration', 'Mobile Responsive']
  },
];



  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View source code"
                    >
                      <FiGithub />
                    </a>
                    
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-features">
                  {project.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <FiCode />
                    Link
                  </a>
           
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="github-cta">
          <h3>Want to see more?</h3>
          <p>Check out my GitHub profile for more projects and contributions</p>
          <a
            href="https://github.com/tahfizmir"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FiGithub />
            Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 