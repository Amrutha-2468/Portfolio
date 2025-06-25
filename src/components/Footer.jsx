import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Pinapaka Amrutha Sri</h3>
            <p>Full Stack Developer</p>
          </div>
          
          <div className="footer-links">
            <a href="https://github.com/Amrutha-2468" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/amrutha-sri-pinapaka-a23b32229/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {2025} Pinapaka Amrutha Sri. Made with <FaHeart className="heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
