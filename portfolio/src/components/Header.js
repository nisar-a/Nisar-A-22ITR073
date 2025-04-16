import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="animate-title">Nisar A</h1>
        <h2 className="animate-subtitle">Web Developer</h2>
        <div className="header-buttons">
          <a href="#contact" className="contact-button">
            Contact Me
            <svg className="button-arrow" viewBox="0 0 24 24">
              <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
            </svg>
          </a>
          <a href="#projects" className="projects-button">
            View Projects
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;