import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import HeroSection from './HeroSection';
import DiwaliLoaderEntrance from '../entrance/DiwaliLoaderEntrance';
import './DiwaliHeroSequence.css';

const DiwaliHeroSequence = () => {
  const containerRef = useRef(null);
  const hasBurstRef = useRef(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Transform values for the Happy Diwali Intro Overlay
  // At scroll 0: full opacity, scale 1.0
  // As user scrolls: zooms smoothly up to 2.8x and dissolves out by progress 0.65
  const introScale = useTransform(scrollYProgress, [0, 0.65], [1.0, 2.75]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.2, 0.62], [1.0, 0.95, 0.0]);
  const introY = useTransform(scrollYProgress, [0, 0.65], [0, -50]);
  const introGlowScale = useTransform(scrollYProgress, [0, 0.6], [1.0, 2.2]);
  const hangingsY = useTransform(scrollYProgress, [0, 0.45], [0, -110]);
  const hangingsOpacity = useTransform(scrollYProgress, [0, 0.35], [1.0, 0.0]);

  // Pointer events: active while greeting is visible, passes through to hero once dissolved
  const pointerEvents = useTransform(scrollYProgress, (v) => (v > 0.58 ? 'none' : 'auto'));

  // Transform values for the underlying Hero Section
  // Starts softly visible behind the golden aura, scales seamlessly to 1.0 at full brilliance
  const heroScale = useTransform(scrollYProgress, [0, 0.65], [0.93, 1.0]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3, 0.68], [0.45, 0.85, 1.0]);

  // Launch celebratory rocket bursts when passing through the portal threshold
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.25 && latest < 0.65 && !hasBurstRef.current) {
      hasBurstRef.current = true;
      window.dispatchEvent(new CustomEvent('trigger-fireworks', { detail: { count: 5 } }));
    } else if (latest < 0.1) {
      hasBurstRef.current = false;
    }
  });

  const handleEnterClick = () => {
    if (containerRef.current) {
      // Smoothly scroll the page down past the portal into the Hero Section
      const targetScroll = containerRef.current.offsetTop + containerRef.current.offsetHeight * 0.72;
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      // Fire festive burst
      window.dispatchEvent(new CustomEvent('trigger-fireworks', { detail: { count: 4 } }));
    }
  };

  return (
    <div className="diwali-hero-track" ref={containerRef} id="home">
      <div className="diwali-hero-sticky">
        {/* Layer 1: Royal Hero Section */}
        <motion.div
          className="diwali-hero-layer diwali-hero-layer--hero"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <HeroSection />
        </motion.div>

        {/* Layer 2: Grand Happy Diwali Opening Portal */}
        <motion.div
          className="diwali-hero-layer diwali-hero-layer--intro"
          style={{
            scale: introScale,
            opacity: introOpacity,
            y: introY,
            pointerEvents,
          }}
          onClick={handleEnterClick}
          role="region"
          aria-label="Happy Diwali Opening Portal"
        >
          <DiwaliLoaderEntrance
            hangingsY={hangingsY}
            hangingsOpacity={hangingsOpacity}
            introGlowScale={introGlowScale}
            onEnterClick={handleEnterClick}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DiwaliHeroSequence;
