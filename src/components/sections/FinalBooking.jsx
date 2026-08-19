import React from 'react';
import { motion } from 'framer-motion';
import { Flower } from 'lucide-react';
import OrnamentalCorners from '../decorative/OrnamentalCorners';
import RoyalDivider from '../decorative/RoyalDivider';
import './FinalBooking.css';

const FinalBooking = () => {
  return (
    <section className="final" id="contact">
      {/* Background decorations */}
      <div className="festive-pattern" />
      <div className="fabric-texture" />
      <div className="final__glow" />

      {/* Outer ornamental frame */}
      <div className="final__frame">
        <OrnamentalCorners size="lg" />
        <div className="final__frame-inner" />
      </div>

      {/* Hanging diyas */}
      <div className="final__hangings" aria-hidden="true">
        {[1, 2, 3].map(i => (
          <div key={i} className={`final__hang final__hang--${i}`}>
            <div className="final__hang-chain" />
            <div className="final__hang-lamp">
              <div className="final__hang-flame" />
            </div>
          </div>
        ))}
      </div>

      {/* Marigold garlands */}
      <div className="final__garland final__garland--l" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="final__bead" style={{ animationDelay: `${i * 0.2}s` }}>●</span>
        ))}
      </div>
      <div className="final__garland final__garland--r" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="final__bead" style={{ animationDelay: `${i * 0.25}s` }}>●</span>
        ))}
      </div>

      {/* Main Content */}
      <div className="final__container">
        <motion.div
          className="final__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Royal RSVP Card Wrapper */}
          <div className="final__rsvp-card">
            <OrnamentalCorners size="md" />
            <div className="final__rsvp-inner-border" />

            <RoyalDivider />
            <p className="final__invite">You're Invited</p>

            <h1 className="final__title text-gradient-gold text-glow-gold">JANMASHTAMI</h1>
            <h3 className="final__subtitle">AT LIVZO</h3>

            {/* Golden Royal Crest */}
            <div className="final__crest">
              <div className="final__crest-inner">
                <div className="final__crest-content">
                  {/* <span className="final__crest-r">₹</span> */}
                  <span className="final__crest-amt">₹ 2,100</span>
                  <span className="final__crest-p">/ PERSON</span>
                </div>
              </div>
              {/* Decorative outer rings */}
              <div className="final__crest-ring-1" />
              <div className="final__crest-ring-2" />
            </div>

            <a href="https://wa.me/917046267684" className="final__cta-gold" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Reserve Your Experience
            </a>

            <RoyalDivider />
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="final__footer">
        <div className="final__footer-inner">
          <div className="final__footer-logo">
            <span className="final__footer-icon"><Flower size={16} color="var(--bright-gold)" /></span>
            <span className="final__footer-brand">LIVZO</span>
          </div>
          <div className="final__footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
          <p className="final__footer-copy">© 2026 LIVZO Resort. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default FinalBooking;
