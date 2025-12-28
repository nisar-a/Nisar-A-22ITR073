import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  // Update the animation variants
  const imageVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0.95,
        x: -20
    },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 12
        }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 15 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillTags = [
    'JavaScript', 
    'React', 
    'Node.js', 
    'Python', 
    'AWS', 
    'MongoDB'
  ];

  return (
    <motion.section 
      id="about" 
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="about-content">
        <motion.div 
          className="profile-image-container"
          variants={imageVariants}
        >
          <motion.div 
            className="profile-image"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={process.env.PUBLIC_URL + '/assets/NISAR A_PHOTO.JPG'} 
              alt="Nisar - Software Developer" 
            />
          </motion.div>
          <motion.div 
            className="profile-backdrop"
            animate={{ 
              scale: [1, 1.02, 1],
              rotate: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </motion.div>

        <motion.div 
          className="about-text"
          variants={textVariants}
        >
          <motion.h2>
            About Me
          </motion.h2>
          <motion.div className="bio">
            <p>
              A motivated individual with in-depth knowledge of programming languages 
              and development tools, seeking a position in a growth-oriented company 
              where I can contribute effectively while enhancing my own skills.
            </p>
          </motion.div>

          <motion.div 
            className="skills-highlight"
            variants={skillVariants}
          >
            {skillTags.map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-tag"
                variants={textVariants}
                whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { 
                        type: "spring", 
                        stiffness: 400,
                        damping: 10 
                    }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About;