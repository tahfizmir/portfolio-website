import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Mir Tahfiz Hafiz</h3>
            <p>
              Full Stack Developer passionate about creating amazing digital experiences 
              and solving complex problems through code.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a
                  href="https://github.com/tahfizmir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                  title='GitHub'
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/tahfiz-mir-46364a239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                  title='LinkedIn'
                >
                  <FiLinkedin />
                </a>
                <a
                  href="mailto:tahfeezmir27@gmail.com"
                  className="social-link"
                  aria-label="Email"
                  title='Email'
                >
                  <FiMail />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Mir Tahfiz built this web-page and holds all the rights.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 