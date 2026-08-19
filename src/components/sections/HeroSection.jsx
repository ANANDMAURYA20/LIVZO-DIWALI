import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Flower2, Sparkles } from 'lucide-react';
import OrnamentalCorners from '../decorative/OrnamentalCorners';
import './HeroSection.css';

const HeroSection = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]); 
  const yDiyas = useTransform(scrollY, [0, 1000], [0, -400]); 
  const yArch = useTransform(scrollY, [0, 1000], [0, -150]); 

  // 3D Tilt Effect logic
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  // Smooth out mouse movements
  const springConfig = { damping: 30, stiffness: 100, mass: 1.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Map 0-1 values to degrees for tilt (-8 to 8 degrees)
  const rotateX = useTransform(smoothMouseY, [0, 1], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section 
      className="hero" 
      id="home" 
      ref={sectionRef} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
    >
      {/* Background */}
      <div className="hero__bg-wrap">
        <div className="festive-pattern" />
        <div className="fabric-texture" />
        {/* Ambient floating orbs */}
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
      </div>
      <div className="hero__gradient" />
      <div className="hero__glow" />

      {/* Hanging Diyas */}
      <div className="hero__hangings" aria-hidden="true">
        {[1,2,3,4,5].map(i => (
          <div key={i} className={`hero__hanging hero__hanging--${i}`}>
            <div className="hero__chain" />
            <div className="hero__diya">
              <div className="hero__diya-body" />
              <div className="hero__diya-flame" />
            </div>
          </div>
        ))}
      </div>

      {/* Outer ornamental frame */}
      <div className="hero__outer-frame">
        <OrnamentalCorners size="lg" />
        {/* Double inner border */}
        <div className="hero__inner-frame" />
      </div>

      {/* ─── Main content ─── */}
      <div className="hero__content">
        {/* LEFT — Text */}
        <div className="hero__left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="hero__presents">
              <span className="hero__presents-star">✦</span>
              LIVZO PRESENTS
              <span className="hero__presents-star">✦</span>
            </p>
          </motion.div>

          <motion.h1
            className="hero__title text-gradient-gold text-glow-gold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            JANMASHTAMI
          </motion.h1>

          <motion.div
            className="hero__title-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          />

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            A Royal Celebration<br />Under The Festive Lights
          </motion.p>

          {/* Price Badge */}
          <motion.a
            href="https://wa.me/917046267684"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__price-badge"
            style={{ textDecoration: 'none' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: 1.3 } }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(201, 153, 58, 0.2)', transition: { duration: 0.2 } }}
          >
            <OrnamentalCorners size="sm" />
            <div className="hero__price-inner">
              <span className="hero__price-rupee">₹</span>
              <span className="hero__price-amount">2,100</span>
              <span className="hero__price-per">/ PERSON</span>
            </div>
          </motion.a>

          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            Come for the celebration.<br />Stay for the experience.
          </motion.p>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <a href="#package" className="btn-gold" style={{ display: 'inline-block', textDecoration: 'none' }}>Explore The Celebration</a>
            <a href="#package" className="hero__cta-secondary">View Package ↓</a>
          </motion.div>
        </div>

        {/* Right side: Image inside ornamental arch */}
        <motion.div 
          className="hero__right"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ rotateX, rotateY, perspective: 1200 }}
        >
          {/* Decorative arch frame */}
          <div className="hero__arch">
            <div className="hero__arch-outer">
              <div className="hero__arch-inner">
                {/* Divine God Rays / Chakra behind the image */}
                <div className="hero__god-rays" />
                <img
                  src="/images/pot.png"
                  alt="Janmashtami — Decorated Matki with Peacock Feather, Flute & Diyas"
                  className="hero__arch-image"
                />
              </div>
            </div>

            {/* Gold filigree decorations around arch */}
            <div className="hero__arch-decor hero__arch-decor--top">
              <svg viewBox="0 0 120 30" width="120" height="30" fill="none">
                <path d="M10 28 Q60 -5 110 28" stroke="var(--antique-gold)" strokeWidth="1" fill="none" opacity="0.6"/>
                <path d="M20 25 Q60 2 100 25" stroke="var(--antique-gold)" strokeWidth="0.6" fill="none" opacity="0.4"/>
                <circle cx="60" cy="5" r="3" fill="var(--bright-gold)" opacity="0.5"/>
              </svg>
            </div>

            {/* Floating decorative elements */}
            <div className="hero__arch-flower hero__arch-flower--1"><Flower2 size={24} color="var(--bright-gold)" /></div>
            <div className="hero__arch-flower hero__arch-flower--2"><Flower2 size={20} color="var(--bright-gold)" /></div>
            <div className="hero__arch-flower hero__arch-flower--3"><Flower2 size={18} color="var(--bright-gold)" /></div>
            <div className="hero__arch-diya"><Sparkles size={22} color="var(--bright-gold)" /></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
