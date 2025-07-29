import React from 'react';
import { motion } from 'framer-motion';
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
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      id="achievements" 
      className="achievements-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Achievements & Certifications
      </motion.h2>
      
      <motion.div 
        className="achievements-grid"
        variants={containerVariants}
      >
        {achievements.map((achievement, index) => (
          <motion.div 
            key={index} 
            className="achievement-card"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="achievement-icon"
              variants={iconVariants}
            >
              {achievement.icon}
            </motion.div>
            <div className="achievement-content">
              <h3>{achievement.title}</h3>
              {achievement.organization && (
                <div className="organization">{achievement.organization}</div>
              )}
              <p className="description">{achievement.description}</p>
              <div className="period">{achievement.period}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Achievements;