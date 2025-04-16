import React from 'react';
import './Achievements.css';

const achievements = [
  {
    title: "Runner-Up - IT Hackathon",
    period: "2023 – 2024",
    icon: "🏆",
    description: "Led a team of 4 to develop an innovative solution in 24 hours"
  },
  {
    title: "3rd Prize - Paper Presentation",
    period: "2023 – 2024",
    icon: "🎯",
    organization: "Exodia, IEEE",
    description: "Research paper on emerging technologies in cloud computing"
  },
  {
    title: "2nd Prize - Paper Presentation",
    period: "2022 – 2023",
    icon: "🥈",
    organization: "Cryonics",
    description: "Technical paper on modern web development architectures"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    period: "2025–2028",
    icon: "☁️",
    description: "Professional certification for AWS cloud technologies"
  }
];

function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements & Certifications</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="achievement-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-content">
              <h3>{achievement.title}</h3>
              {achievement.organization && (
                <div className="organization">{achievement.organization}</div>
              )}
              <p className="description">{achievement.description}</p>
              <div className="period">{achievement.period}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;