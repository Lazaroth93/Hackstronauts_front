import React from 'react';
import { motion } from 'motion/react';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;