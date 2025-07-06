import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in">
              Hi, I'm <span className="highlight">Mir Tahfiz</span>
            </h1>
            <h2 className="hero-subtitle fade-in">
              Full Stack Developer & Software Engineer
            </h2>
            <p className="hero-description fade-in">
              I'm a passionate developer who loves creating amazing digital experiences. 
              Currently building innovative solutions and expanding my expertise in modern technologies.
            </p>
            
            <div className="hero-actions fade-in">
              <a href="#contact" className="btn btn-primary">
                <FiMail />
                Get In Touch
              </a>
                 <a href="src/assets/Mir_Tahfiz_Hafiz.pdf" className="btn btn-secondary" download>
                <FiDownload />
                Download Resume
              </a>
            </div>

            <div className="social-links fade-in">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>

          <div className="hero-image fade-in">
            <div className="image-container">
              <img 
                src="src\assets\profilePicture.jpeg"
                alt="Your Name" 
                className="profile-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 