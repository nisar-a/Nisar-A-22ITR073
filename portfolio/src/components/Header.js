import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Header.css';

function Header() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 300], [0, -100]);
  const subtitleY = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.header 
      className="header"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="header-content"
        style={{ opacity }}
      >
        <motion.h1 
          className="animate-title"
          variants={titleVariants}
          style={{ y: titleY }}
        >
          <span className="gradient-text">Nisar A</span>
        </motion.h1>

        <motion.h2 
          className="animate-subtitle"
          variants={titleVariants}
          style={{ y: subtitleY }}
        >
          B.TECH in Information Technology
        </motion.h2>

        <motion.div 
          className="header-buttons"
          variants={containerVariants}
        >
          <motion.a 
            href="#contact" 
            className="contact-button"
            variants={buttonVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <motion.span 
              className="button-arrow"
              animate={{ 
                x: [0, 10, 0],
                opacity: [1, 0.6, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
          </motion.a>

          <motion.a 
            href="#projects" 
            className="projects-button"
            variants={buttonVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.8, 0.4, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span>Scroll Down</span>
        <motion.div className="scroll-arrow">↓</motion.div>
      </motion.div>
    </motion.header>
  );
}

export default Header;