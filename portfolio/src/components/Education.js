import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const educationData = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Kongu Engineering College',
    period: '2022 - 2026',
    score: 'CGPA: 7.38',
    semester: '(till 6th semester)',
    achievements: [
      'Team Lead',
      'Web Development Club Member',
      'Participated in 5+ Hackathons',
      'Add.Secretary of IT Association '
    ]
  },
  {
    degree: 'Higher Secondary (HSC)',
    institution: 'New Power Mat.Hr.Sec.School',
    period: '2021 - 2022',
    score: '89.65%',
    achievements: [
      'Maths - Biology',
      'Team Lead'
    ]
  },
  {
    degree: 'Secondary School (SSLC)',
    institution: 'New Power Mat.Hr.Sec.School',
    period: '2019 - 2020',
    score: '83%',
    achievements: [
      'Team Lead in house Level',
    ]
  }
];

function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      y: 20 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.section 
      id="education" 
      className="education-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        variants={itemVariants}
      >
        Education Journey
      </motion.h2>
      <motion.div 
        className="timeline"
        variants={containerVariants}
      >
        {educationData.map((edu, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            <motion.div 
              className="timeline-dot"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <motion.div 
              className="timeline-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
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
              <motion.div 
                className="Highlights"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h4>Highlights</h4>
                <ul>
                  {edu.achievements.map((achievement, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Education;