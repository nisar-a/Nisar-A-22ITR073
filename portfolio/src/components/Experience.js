import React from 'react';
import './Experience.css';

const experienceData = [
  {
    role: 'Web Development Intern',
    company: 'INTERNPE',
    period: 'Jun 2023 - Jul 2023',
    location: 'Remote',
    description: [
      'Developed responsive web applications using React.js',
      'Collaborated with team members using Git version control',
      'Implemented modern UI/UX designs and best practices'
    ],
    tags: ['React', 'JavaScript', 'Git', 'REST API']
  },
  {
    role: 'Software Development Intern',
    company: 'PRODIGY',
    period: 'Aug 2023 - Sep 2023',
    location: 'Remote',
    description: [
      'Built full-stack applications using MERN stack',
      'Worked on real-world projects with agile methodology',
      'Optimized application performance and user experience'
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js']
  },
  {
    role: 'Joint Secretary',
    company: 'IT Association, Kongu Engineering College',
    period: '2022 - 2023',
    location: 'Erode, TN',
    description: [
      'Led technical events and workshops for 200+ students',
      'Organized coding competitions and hackathons',
      'Managed team of volunteers for department activities'
    ],
    tags: ['Leadership', 'Event Management', 'Team Building']
  },
  {
    role: 'Member',
    company: 'Mobile App Development Club, KEC',
    period: '2021 - Present',
    location: 'Erode, TN',
    description: [
      'Participated in mobile app development workshops',
      'Contributed to group projects and peer learning',
      'Explored cross-platform development technologies'
    ],
    tags: ['React Native', 'Mobile Development', 'UI Design']
  }
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Professional Experience</h2>
      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="role-info">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
              </div>
              <div className="experience-meta">
                <span className="period">
                  <i className="far fa-calendar-alt"></i>
                  {exp.period}
                </span>
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  {exp.location}
                </span>
              </div>
            </div>
            <ul className="experience-details">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="experience-tags">
              {exp.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;