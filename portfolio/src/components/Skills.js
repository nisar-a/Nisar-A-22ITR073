import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaNodeJs, FaPython, FaJava, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FaReact className="category-icon" />,
    skills: [
      { name: 'React', icon: <FaReact />, highlight: true },
      { name: 'JavaScript', icon: <FaJs />, highlight: true },
      { name: 'HTML/CSS', icon: <FaHtml5 />, highlight: true }
    ]
  },
  {
    title: 'Backend',
    icon: <FaNodeJs className="category-icon" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, highlight: true },
      { name: 'Python', icon: <FaPython />, highlight: true },
      { name: 'Java', icon: <FaJava />, highlight: true }
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: <FaGitAlt className="category-icon" />,
    skills: [
      { name: 'Git', icon: <FaGitAlt />, highlight: true },
      { name: 'MongoDB', icon: <SiMongodb />, highlight: true },
      { name: 'AWS', icon: <FaAws />, highlight: true }
    ]
  }
];

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.section 
      id="skills" 
      className="skills-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants}>
        Skills & Technologies
      </motion.h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="skill-category"
            variants={itemVariants}
          >
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skillIndex} 
                  className={`skill-card ${skill.highlight ? 'highlight' : ''}`}
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;