import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Let's Connect</h2>
        <div className="header-line"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-intro">
          <p className="contact-text">
            I'm always interested in hearing about new opportunities and exciting projects.
            <span className="highlight">Let's create something amazing together!</span>
          </p>
        </div>
        
        <div className="contact-grid">
          <a href="mailto:anisar2594@gmail.com" className="contact-item email">
            <div className="contact-icon">
              <img src="/assets/email.png" alt="Email" />
            </div>
            <div className="contact-info">
              <h3>Email Me</h3>
              <span>anisar2594@gmail.com</span>
            </div>
            <div className="hover-effect"></div>
          </a>
          
          <a href="tel:+919787795213" className="contact-item phone">
            <div className="contact-icon">
              <img src="/assets/phone.png" alt="Phone" />
            </div>
            <div className="contact-info">
              <h3>Call Me</h3>
              <span>+91 9787795213</span>
            </div>
            <div className="hover-effect"></div>
          </a>

          <a 
            href="https://github.com/nisar-a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item github"
          >
            <div className="contact-icon">
              <img src="/assets/github.png" alt="GitHub" />
            </div>
            <div className="contact-info">
              <h3>Follow on GitHub</h3>
              <span>nisar-a</span>
            </div>
            <div className="hover-effect"></div>
          </a>

          <a 
            href="https://www.linkedin.com/in/nisar-a-11b569259/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item linkedin"
          >
            <div className="contact-icon">
              <img src="/assets/linkedin.png" alt="LinkedIn" />
            </div>
            <div className="contact-info">
              <h3>Connect on LinkedIn</h3>
              <span>nisar-a</span>
            </div>
            <div className="hover-effect"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;