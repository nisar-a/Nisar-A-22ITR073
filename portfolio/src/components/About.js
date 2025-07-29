import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: -50
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="about" 
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div 
        className="about-content"
        variants={containerVariants}
      >
        <motion.div 
          className="profile-image-container"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <motion.div 
            className="profile-image"
            whileHover={{ rotate: 5 }}
          >
            <img 
              src="/assets/photo.png" 
              alt="Nisar - Software Developer" 
              loading="lazy"
            />
          </motion.div>
          <motion.div 
            className="profile-backdrop"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </motion.div>

        <motion.div 
          className="about-text"
          variants={itemVariants}
        >
          <motion.h2
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="bio"
            variants={itemVariants}
          >
            <motion.p
              variants={itemVariants}
            >
              A motivated individual with in-depth knowledge of programming languages 
              and development tools, seeking a position in a growth-oriented company 
              where I can contribute effectively while enhancing my own skills.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About;