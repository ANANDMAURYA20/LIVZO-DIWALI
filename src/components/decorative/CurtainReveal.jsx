import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Curtain from '../entrance/Curtain';
import EntranceText from '../entrance/EntranceText';
import './CurtainReveal.css';

const CurtainReveal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Lock body scroll while curtains are closed
    document.body.style.overflow = 'hidden';

    // Start opening after a short delay
    const openTimer = setTimeout(() => {
      setIsOpen(true);
      // Unlock scroll as curtains open
      document.body.style.overflow = '';
    }, 1200);
    
    // Completely remove the overlay from the DOM after animation finishes
    const removeTimer = setTimeout(() => {
      setIsRemoved(true);
    }, 3000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      {/* The normal content (Hero Section) */}
      {children}

      {/* The Cinematic Overlay */}
      {!isRemoved && (
        <div className="curtain-overlay">
          {/* Ambient Darkness */}
          <motion.div 
            className="curtain-ambient-darkness"
            initial={{ opacity: 0.9 }}
            animate={{ opacity: isOpen ? 0 : 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          
          {/* Entrance Text */}
          <motion.div 
            className="curtain-hint"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? -30 : 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          >
            <EntranceText />
          </motion.div>

          {/* Left Curtain */}
          <motion.div 
            className="curtain-panel"
            initial={{ x: "0%", scale: 1 }}
            animate={{ x: isOpen ? "-100%" : "0%", scale: isOpen ? 1.15 : 1 }}
            transition={{ duration: 1.6, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.2 }}
            style={{ transformOrigin: 'left center' }}
          >
            <Curtain side="left" />
          </motion.div>

          {/* Right Curtain */}
          <motion.div 
            className="curtain-panel"
            initial={{ x: "0%", scale: 1 }}
            animate={{ x: isOpen ? "100%" : "0%", scale: isOpen ? 1.15 : 1 }}
            transition={{ duration: 1.6, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.2 }}
            style={{ transformOrigin: 'right center' }}
          >
            <Curtain side="right" />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CurtainReveal;
