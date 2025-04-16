import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="profile-image-container">
          <div className="profile-image">
            <img 
              src="/assets/photo 1.png" 
              alt="Nisar - Software Developer" 
              loading="lazy"
            />
          </div>
          <div className="profile-backdrop"></div>
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <div className="bio">
            <p>
              A motivated individual with in-depth knowledge of programming languages 
              and development tools, seeking a position in a growth-oriented company 
              where I can contribute effectively while enhancing my own skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;