import React from 'react';
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
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;