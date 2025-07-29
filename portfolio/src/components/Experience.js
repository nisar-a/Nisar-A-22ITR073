import React from 'react';
import { motion } from 'framer-motion';
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const tagVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      id="experience" 
      className="experience-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        variants={cardVariants}
      >
        Professional Experience
      </motion.h2>
      <motion.div 
        className="experience-timeline"
        variants={containerVariants}
      >
        {experienceData.map((exp, index) => (
          <motion.div 
            key={index} 
            className="experience-card"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="experience-header">
              <motion.div 
                className="role-info"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
              </motion.div>
              <div className="experience-meta">
                <motion.span 
                  className="period"
                  whileHover={{ scale: 1.05 }}
                >
                  <i className="far fa-calendar-alt"></i>
                  {exp.period}
                </motion.span>
                <motion.span 
                  className="location"
                  whileHover={{ scale: 1.05 }}
                >
                  <i className="fas fa-map-marker-alt"></i>
                  {exp.location}
                </motion.span>
              </div>
            </div>
            <motion.ul 
              className="experience-details"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {exp.description.map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <div className="experience-tags">
              {exp.tags.map((tag, idx) => (
                <motion.span 
                  key={idx} 
                  className="tag"
                  variants={tagVariants}
                  whileHover="hover"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Experience;