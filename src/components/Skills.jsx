import React from 'react'
import '../styles/Skills.css'

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'CSS/SCSS', level: 85 },
    { name: 'MongoDB', level: 70 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'Git', level: 85 }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </header>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article key={index} className="skill-item">
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
