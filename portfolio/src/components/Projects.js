import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: "Engineering Facts API",
    description: "Real-time engineering facts web application with daily updates",
    image: "/assets/projects/eng-facts.png",
    tech: ["React", "Node.js", "REST API"]
  },
  {
    title: "ASTRA Lamps",
    description: "Modern e-commerce website for premium lighting products",
    image: "/assets/projects/astra-lamps.png",
    tech: ["React", "Redux", "Stripe"]
  },
  {
    title: "Patient Management System",
    description: "Complete healthcare records and appointment management solution",
    image: "/assets/projects/patient-mgmt.png",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Password Manager",
    description: "Secure password management with encryption and authentication",
    image: "/assets/projects/password-manager.png",
    tech: ["React", "Express", "MongoDB"]
  }
];

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      id="projects" 
      className="projects-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        variants={cardVariants}
      >
        Projects
      </motion.h2>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="project-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={project.image} alt={project.title} loading="lazy" />
            </motion.div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className="tech-tag"
                    whileHover={{ 
                      scale: 1.1,
                      y: -2 
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;