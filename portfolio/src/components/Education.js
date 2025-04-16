import React from 'react';
import './Education.css';

const educationData = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Kongu Engineering College',
    period: '2020 - 2024',
    score: 'CGPA: 7.34',
    semester: '(till 5th semester)',
    achievements: [
      'Technical Team Lead',
      'Web Development Club Member',
      'Participated in 5+ Hackathons'
    ]
  },
  {
    degree: 'Higher Secondary (HSC)',
    institution: 'New Power Mat.Hr.Sec.School',
    period: '2019 - 2020',
    score: '89.65%',
    achievements: [
      'School First in Computer Science',
      'Active participant in Tech events'
    ]
  },
  {
    degree: 'Secondary School (SSLC)',
    institution: 'New Power Mat.Hr.Sec.School',
    period: '2017 - 2018',
    score: '83%',
    achievements: [
      'Merit Student',
      'Science Club Member'
    ]
  }
];

function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education Journey</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <div className="institution">
                <i className="fas fa-university"></i>
                {edu.institution}
              </div>
              <div className="period">
                <i className="fas fa-calendar-alt"></i>
                {edu.period}
              </div>
              <div className="score">
                <i className="fas fa-star"></i>
                {edu.score} {edu.semester}
              </div>
              <div className="achievements">
                <h4>Achievements</h4>
                <ul>
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;