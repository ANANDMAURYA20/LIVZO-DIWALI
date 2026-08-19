import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './FloatingParticles.css';

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const pts = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      dur: Math.random() * 5 + 6,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.25 + 0.08,
    }));
    setParticles(pts);
  }, []);

  return (
    <div className="fp" aria-hidden="true">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="fp__dot"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
          }}
          animate={{ y: [0, -25, 0], x: [0, (Math.random() - 0.5) * 10, 0] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
