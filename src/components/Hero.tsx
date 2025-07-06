import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import "./Hero.css";

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
              A 2025 batch B.Tech CSE graduate from the Indian Institute of
              Information Technology, Pune , I recently completed a Software
              Development Internship at Autodesk, where I contributed to
              production-level development using React, TypeScript, and C++.
              Beyond that, I have hands-on experience with Node.js, Express.js,
              MongoDB, and related technologies, with a strong interest in
              building robust full-stack applications.
            </p>

            <div className="hero-actions fade-in">
              <a href="#contact" className="btn btn-primary">
                <FiMail />
                Get In Touch
              </a>
              <a
                href="public/assets/Mir_Tahfiz_Hafiz.pdf"
                className="btn btn-secondary"
                download
              >
                <FiDownload />
                Download Resume
              </a>
            </div>

            <div className="social-links fade-in">
              <a
                href="https://github.com/tahfizmir"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
                title="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/tahfiz-mir-46364a239/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://leetcode.com/u/tahfeezmir/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Leetcode"
                title="Leetcode"
              >
                <FaLaptopCode />
              </a>
              <a
                href="https://codeforces.com/profile/mirtahfiz"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Codeforces"
                title="Codeforces"
              >
                <FaCode />
              </a>
            </div>
          </div>

          <div className="hero-image fade-in">
            <div className="image-container">
              <img
                src="/assets/profilePicture.jpeg"
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
