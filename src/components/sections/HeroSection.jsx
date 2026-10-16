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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="hero__presents">
              <span className="hero__presents-star">✦</span>
              LIVZO RESORT PRESENTS
              <span className="hero__presents-star">✦</span>
            </p>
            <div className="hero__auspicious font-indic">॥ शुभ दीपावली २०२६ ॥</div>
          </motion.div>

          <motion.h1
            className="hero__title font-royal text-gradient-gold text-glow-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            DIWALI UTSAV
          </motion.h1>

          <motion.div
            className="hero__title-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />

          <motion.div
            className="hero__subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <span className="hero__subtitle-calligraphy font-calligraphy">A Royal Symphony of Lights</span>
            <span className="hero__subtitle-sub">Under Starlit Skies</span>
          </motion.div>

          {/* Price Badge */}
          <motion.a
            href="https://wa.me/917046267684"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__price-badge"
            style={{ textDecoration: 'none' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } }}
            whileHover={{ scale: 1.04, transition: { duration: 0.25 } }}
          >
            <OrnamentalCorners size="sm" />
            <div className="hero__price-wrapper">
              <div className="hero__discount-tag">
                <span className="hero__old-price">₹3,200</span>
                <span className="hero__save-pill">20% OFF</span>
              </div>
              <div className="hero__price-inner">
                <span className="hero__price-star">✦</span>
                <span className="hero__price-rupee">₹</span>
                <span className="hero__price-amount">2,560</span>
                <span className="hero__price-per">/ PERSON</span>
              </div>
            </div>
          </motion.a>

          <motion.div
            className="hero__tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <span className="hero__tagline-script font-calligraphy">Come for the golden glow,</span>
            <span className="hero__tagline-sub">stay for the serene wilderness.</span>
          </motion.div>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="#package" className="btn-gold hero__btn-main" style={{ textDecoration: 'none' }}>
              <span className="hero__btn-star">✦</span>
              <span>Explore The Festivities</span>
              <span className="hero__btn-arrow">→</span>
            </a>
            <a href="#package" className="hero__cta-secondary">View Package Itinerary ↓</a>
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
                  src="/images/diwali_hero.jpg"
                  alt="Diwali Utsav — Royal Brass Urli with Floating Diyas & Fresh Marigolds"
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
