import React from 'react';
import { motion } from 'framer-motion';

function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        width: 200,
        height: 200,
        background: '#61dafb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2rem auto',
        borderRadius: '1rem'
      }}
    >
      Hello Animation!
    </motion.div>
  );
}

export default AnimatedBox; 