import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', icon: '⚛️', highlight: true },
      { name: 'JavaScript', icon: '📱', highlight: true },
      { name: 'HTML/CSS', icon: '🎯', highlight: true }
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', icon: '🚀', highlight: true },
      { name: 'Python', icon: '🐍', highlight: true },
      { name: 'Java', icon: '☕', highlight: true }
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: '🛠️',
    skills: [
      { name: 'Git', icon: '📊', highlight: true },
      { name: 'MongoDB', icon: '🗃️', highlight: true },
      { name: 'AWS', icon: '☁️', highlight: true }
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills & Technologies</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className={`skill-card ${skill.highlight ? 'highlight' : ''}`}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;