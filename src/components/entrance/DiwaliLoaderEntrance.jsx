import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';
import OrnamentalCorners from '../decorative/OrnamentalCorners';
import RoyalDivider from '../decorative/RoyalDivider';
import './DiwaliLoaderEntrance.css';

const DiwaliLoaderEntrance = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const touchStartY = useRef(0);
  const isTriggeredRef = useRef(false);

  const triggerDismiss = useCallback(() => {
    if (isTriggeredRef.current) return;
    isTriggeredRef.current = true;
    setIsDismissed(true);

    // Immediately restore normal body scrolling so user can scroll right away
    document.body.style.overflow = '';

    // Launch celebratory fireworks as it slides up
    window.dispatchEvent(new CustomEvent('trigger-fireworks', { detail: { count: 5 } }));

    // Remove from DOM after smooth slide-up finishes
    setTimeout(() => {
      setIsFinished(true);
    }, 900);
  }, []);

  useEffect(() => {
    if (isDismissed || isFinished) return;

    // Prevent background scrolling only while loader is active
    document.body.style.overflow = 'hidden';

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 5 || Math.abs(e.deltaX) > 5) {
        triggerDismiss();
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (Math.abs(touchStartY.current - e.touches[0].clientY) > 8) {
        triggerDismiss();
      }
    };

    const handleKeyDown = (e) => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ', 'Enter'].includes(e.key)) {
        triggerDismiss();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    // Auto-reveal after 4s so user isn't stuck
    const timer = setTimeout(() => {
      triggerDismiss();
    }, 4000);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [isDismissed, isFinished, triggerDismiss]);

  if (isFinished) return null;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className={`diwali-loader ${isDismissed ? 'diwali-loader--dismissed' : ''}`}
          initial={{ y: '0%', opacity: 1 }}
          animate={
            isDismissed
              ? {
                  y: '-100%',
                  opacity: 0,
                  transition: {
                    duration: 0.85,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }
              : { y: '0%', opacity: 1 }
          }
          onClick={triggerDismiss}
          role="dialog"
          aria-label="Happy Diwali Greetings Loader"
        >
          {/* Background Atmosphere */}
          <div className="diwali-loader__bg-pattern" />
          <div className="diwali-loader__radial-glow" />

          {/* Hanging Traditional Diyas at Top */}
          <div className="diwali-loader__hangings" aria-hidden="true">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className={`diwali-loader__hanging diwali-loader__hanging--${i}`}>
                <div className="diwali-loader__chain" />
                <div className="diwali-loader__lamp">
                  <div className="diwali-loader__lamp-flame" />
                  <div className="diwali-loader__lamp-body" />
                </div>
              </div>
            ))}
          </div>

          {/* Main Greeting Plaque */}
          <div className="diwali-loader__container">
            <div className="diwali-loader__frame">
              <OrnamentalCorners size="lg" />
              <div className="diwali-loader__inner-border" />

              {/* Livzo Welcome Tag */}
              <div className="diwali-loader__badge">
                <span className="diwali-loader__star">✦</span>
                <span>LIVZO RESORT PRESENTS</span>
                <span className="diwali-loader__star">✦</span>
              </div>

              {/* Hindi Blessing */}
              <div className="diwali-loader__devanagari">
                <span>॥ शुभ दीपावली ॥</span>
              </div>

              {/* Grand Typography: HAPPY DIWALI */}
              <div className="diwali-loader__title-wrap">
                <h1 className="diwali-loader__title-line diwali-loader__title-happy">HAPPY</h1>
                <h1 className="diwali-loader__title-line diwali-loader__title-diwali">DIWALI</h1>
              </div>

              <RoyalDivider />

              {/* Central Glowing Diya Illustration */}
              <div className="diwali-loader__diya-center">
                <div className="diwali-loader__diya-halo" />
                <svg
                  className="diwali-loader__diya-svg"
                  viewBox="0 0 120 70"
                  width="110"
                  height="65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="60" cy="18" r="18" fill="url(#loaderFlameGlow)" opacity="0.6" />
                  <path
                    d="M60 4 C64 12 70 20 60 30 C50 20 56 12 60 4 Z"
                    fill="url(#loaderFlameOuter)"
                    className="diwali-loader__flame-pulse"
                  />
                  <path d="M60 12 C62 18 66 23 60 29 C54 23 58 18 60 12 Z" fill="#FFFDF0" />
                  <path
                    d="M20 32 C35 32 45 42 60 42 C75 42 85 32 100 32 C104 32 106 36 102 40 C92 56 78 64 60 64 C42 64 28 56 18 40 C14 36 16 32 20 32 Z"
                    fill="url(#loaderDiyaBrass)"
                    stroke="#E8C252"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M22 36 Q60 46 98 36"
                    stroke="#FFF3DD"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                    opacity="0.8"
                  />
                  <defs>
                    <radialGradient id="loaderFlameGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFA500" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="loaderFlameOuter" x1="60" y1="4" x2="60" y2="30" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FFFFCC" />
                      <stop offset="40%" stopColor="#FFA726" />
                      <stop offset="100%" stopColor="#E65100" />
                    </linearGradient>
                    <linearGradient id="loaderDiyaBrass" x1="20" y1="32" x2="100" y2="64" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#F5C542" />
                      <stop offset="50%" stopColor="#C9993A" />
                      <stop offset="100%" stopColor="#7E5616" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Auspicious Blessing Quote */}
              <p className="diwali-loader__blessing font-calligraphy">
                May the divine radiance of lights illuminate your path with joy, peace, and royal splendor.
              </p>

              {/* Animated Scroll / Click To Enter Indicator */}
              <div className="diwali-loader__scroll-action">
                <div className="diwali-loader__scroll-badge font-serif">
                  <Sparkles size={16} className="diwali-loader__sparkle-icon" />
                  <span>SCROLL OR CLICK TO ENTER</span>
                  <ChevronDown size={18} className="diwali-loader__bounce-arrow" />
                </div>
                <p className="diwali-loader__interactive-hint">
                  ✦ Scroll or tap anywhere to explore Diwali Utsav ✦
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiwaliLoaderEntrance;
