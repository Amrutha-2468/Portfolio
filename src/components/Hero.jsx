import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">P Amrutha Sri</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I'm a passionate full stack developer with expertise in React, Node.js, and modern web technologies. 
              I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
            </p>
            
            <div className="hero-actions">
              <a href="https://docs.google.com/document/d/1DIGDlExZHpXZ9X6RN8NthcXQscR6dPzxK12VGOjkMx0/edit?usp=sharing" className="btn btn-primary">
                <FaDownload />
                Download Resume
              </a>
              <div className="social-links">
                <a href="https://github.com/Amrutha-2468" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/amrutha-sri-pinapaka-a23b32229/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-placeholder">
                <img 
                  src="\Professional_Pic.jpeg"
                  alt="P Amrutha Sri"
                  className="avatar-img"/>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero
