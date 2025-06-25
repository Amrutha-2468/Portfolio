import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </header>

        <div className="about-content">
          <div className="about-text">
            <p>
             I'm a dedicated full-stack developer with hands-on experience in building responsive and user-friendly web applications. 
             My journey into programming began during my B.Tech in Computer Science at Anurag University, and ever since, 
             I’ve been passionate about solving real-world problems through code.</p>
            <p>
              I specialize in frontend development with React.js and have solid experience working with backend technologies like Node.js, Express, and MongoDB.
               I’ve also worked with databases like MySQL and have built interactive dashboards using Power BI and Tableau. 
              I'm comfortable collaborating in Agile environments and enjoy taking ownership of features from concept to deployment.</p>
            <p>
              When I’m not coding, I enjoy exploring new frameworks, contributing to projects, and learning through hands-on experimentation. 
              I’m constantly looking to grow as a developer and create clean, scalable, and efficient solutions that make a real impact.</p>
          </div>

         {/* <div className="about-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>Fresher</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>1</h3>
              <p>Happy Client</p>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  )
}

export default About
