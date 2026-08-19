import React from 'react';
import { motion } from 'framer-motion';
import { Tent, Mountain } from 'lucide-react';
import OrnamentalCorners from '../decorative/OrnamentalCorners';
import RoyalDivider from '../decorative/RoyalDivider';
import './NatureStaySection.css';

const NATURE_BG = '/images/nature.jpg';

const NatureStaySection = () => {
  return (
    <section className="nature" id="stay">
      {/* Full-width static background */}
      <div className="nature__bg">
        <div className="nature__bg-overlay" />
      </div>
      
      {/* Cinematic Lighting */}
      <div className="nature__god-rays" />

      {/* Marigold garland on right side */}
      <div className="nature__garland" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="nature__marigold" style={{ animationDelay: `${i * 0.3}s` }}>●</span>
        ))}
      </div>

      {/* Content */}
      <div className="nature__container">
        <motion.div
          className="nature__card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <OrnamentalCorners size="md" />
          {/* Double inner border */}
          <div className="nature__card-inner-border" />

          <div className="nature__card-inner-border" />

          <p className="nature__label">When The Celebration Slows Down...</p>
          <h2 className="nature__heading text-gradient-gold">The Royal Retreat</h2>
          
          <RoyalDivider />

          <div className="nature__features">
            <div className="nature__feat">
              <span className="nature__feat-icon"><Tent size={28} color="var(--bright-gold)" /></span>
              <div className="nature__feat-text">
                <strong>1 Night</strong>
                <p>LIVZO Nature Stay</p>
              </div>
            </div>
            <div className="nature__feat">
              <span className="nature__feat-icon"><Mountain size={28} color="var(--bright-gold)" /></span>
              <div className="nature__feat-text">
                <strong>Lake & Mountain</strong>
                <p>Scenic Surroundings</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NatureStaySection;
