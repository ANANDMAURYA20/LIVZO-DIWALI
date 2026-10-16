import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';
import OrnamentalCorners from '../decorative/OrnamentalCorners';
import RoyalDivider from '../decorative/RoyalDivider';
import './DiwaliIntroSection.css';

const DiwaliIntroSection = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Scroll animations: fade out and scale up as user scrolls down
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);
  const scale = useTransform(scrollY, [0, 450], [1, 1.06]);
  const yText = useTransform(scrollY, [0, 450], [0, -60]);

  const scrollToHero = () => {
    const heroEl = document.getElementById('home');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="diwali-intro" id="intro">
      {/* Background Ambience */}
      <div className="diwali-intro__bg-pattern" />
      <div className="diwali-intro__radial-glow" />

      {/* Hanging Traditional Diyas on Top */}
      <div className="diwali-intro__hangings" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className={`diwali-intro__hanging diwali-intro__hanging--${i}`}>
            <div className="diwali-intro__chain" />
            <div className="diwali-intro__lamp">
              <div className="diwali-intro__lamp-flame" />
              <div className="diwali-intro__lamp-body" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Greeting Content */}
      <motion.div
        className="diwali-intro__container"
        style={{ opacity, scale, y: yText }}
      >
        <div className="diwali-intro__frame">
          <OrnamentalCorners size="lg" />
          <div className="diwali-intro__inner-border" />

          {/* Livzo Welcome Tag */}
          <motion.div
            className="diwali-intro__badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="diwali-intro__star">✦</span>
            <span>LIVZO RESORT PRESENTS</span>
            <span className="diwali-intro__star">✦</span>
          </motion.div>

          {/* Hindi Auspicious Blessing Tag */}
          <motion.div
            className="diwali-intro__devanagari"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <span>॥ शुभ दीपावली ॥</span>
          </motion.div>

          {/* Grand Happy Diwali Typography */}
          <motion.div
            className="diwali-intro__title-wrap"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="diwali-intro__title-line diwali-intro__title-happy">
              HAPPY
            </h1>
            <h1 className="diwali-intro__title-line diwali-intro__title-diwali">
              DIWALI
            </h1>
          </motion.div>

          <RoyalDivider />

          {/* Central Flaming Diya Motif */}
          <motion.div
            className="diwali-intro__diya-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
          >
            <div className="diwali-intro__diya-halo" />
            <svg
              className="diwali-intro__diya-svg"
              viewBox="0 0 120 70"
              width="100"
              height="60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Flame Glow */}
              <circle cx="60" cy="18" r="16" fill="url(#flameGlow)" opacity="0.6" />
              {/* Flame Outer */}
              <path
                d="M60 4 C64 12 70 20 60 30 C50 20 56 12 60 4 Z"
                fill="url(#flameOuter)"
                className="diwali-intro__flame-pulse"
              />
              {/* Flame Inner Core */}
              <path
                d="M60 12 C62 18 66 23 60 29 C54 23 58 18 60 12 Z"
                fill="#FFFDF0"
              />
              {/* Diya Clay/Brass Body */}
              <path
                d="M20 32 C35 32 45 42 60 42 C75 42 85 32 100 32 C104 32 106 36 102 40 C92 56 78 64 60 64 C42 64 28 56 18 40 C14 36 16 32 20 32 Z"
                fill="url(#diyaBrass)"
                stroke="#E8C252"
                strokeWidth="1.2"
              />
              {/* Rim Detailing */}
              <path
                d="M22 36 Q60 46 98 36"
                stroke="#FFF3DD"
                strokeWidth="0.8"
                strokeDasharray="2 2"
                opacity="0.8"
              />
              {/* Gradients */}
              <defs>
                <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFA500" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="flameOuter" x1="60" y1="4" x2="60" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFFFCC" />
                  <stop offset="40%" stopColor="#FFA726" />
                  <stop offset="100%" stopColor="#E65100" />
                </linearGradient>
                <linearGradient id="diyaBrass" x1="20" y1="32" x2="100" y2="64" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#F5C542" />
                  <stop offset="50%" stopColor="#C9993A" />
                  <stop offset="100%" stopColor="#7E5616" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Heartwarming Subtitle */}
          <motion.p
            className="diwali-intro__blessing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            May the radiant light of thousands of diyas illuminate your soul with eternal peace,
            good health, and royal splendor.
          </motion.p>

          {/* Interactive Scroll & Fireworks Call-To-Action */}
          <motion.div
            className="diwali-intro__scroll-action"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            onClick={scrollToHero}
          >
            <div className="diwali-intro__scroll-badge">
              <Sparkles size={16} className="diwali-intro__sparkle-icon" />
              <span>SCROLL TO CELEBRATE</span>
              <ChevronDown size={18} className="diwali-intro__bounce-arrow" />
            </div>
            <p className="diwali-intro__interactive-hint">
              ✦ Scroll down or tap anywhere to burst firecrackers ✦
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default DiwaliIntroSection;
