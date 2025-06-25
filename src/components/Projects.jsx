import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import '../styles/Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Jobby App: Job Finder Platform',
      description: 'A comprehensive job search platform featuring user authentication, enhancing candidate engagement by facilitating 300+ daily searches through streamlined interface design and detailed role descriptions.',
      technologies: ['React', 'Node.js'],
      image: '.././public/jobby-App.jpeg',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      title: 'Rock Paper Scissors Game',
      description: 'A fun and interactive Rock Paper Scissors game built with React. Players can compete against the computer and track their scores.',
      technologies: ['React', 'CSS3'],
      image: '.././public/rock-paper-scissors.png',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Nxtwatch: Video Streaming Platform',
      description: 'A responsive video streaming platform that allows users to watch and share videos seamlessly.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '.././public/nxtwatch.png',
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </header>

        <div className="projects-grid">
          {projects.map(project => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <img className='project-img' src={project.image} alt={project.title} />
                </div>
              </div>
              
              <div className="project-content">
                <header className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </header>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <footer className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub />
                    Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
