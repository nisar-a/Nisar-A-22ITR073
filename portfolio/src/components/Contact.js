import React from 'react';
import './Contact.css';

const contactItems = [
  {
    title: 'Email Me',
    content: 'anisar2594@gmail.com',
    icon: '/assets/email.png',
    link: 'mailto:anisar2594@gmail.com'
  },
  {
    title: 'Call Me',
    content: '+91 9787795213',
    icon: '/assets/phone.png',
    link: 'tel:+919787795213'
  },
  {
    title: 'Follow on GitHub',
    content: 'nisar-a',
    icon: '/assets/github.png',
    link: 'https://github.com/nisar-a'
  },
  {
    title: 'Connect on LinkedIn',
    content: 'nisar-a',
    icon: '/assets/linkedin.png',
    link: 'https://www.linkedin.com/in/nisar-a-11b569259/'
  }
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Get In Touch</h2>
      </div>
      
      <div className="contact-grid">
        {contactItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">
              <img 
                src={item.icon} 
                alt={item.title}
                width="24"
                height="24"
                loading="lazy"
              />
            </div>
            <div className="contact-info">
              <h3>{item.title}</h3>
              <span>{item.content}</span>
            </div>
            <div className="hover-effect"></div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;