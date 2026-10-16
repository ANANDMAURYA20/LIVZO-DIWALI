import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flower, Flame, Moon, Heart } from 'lucide-react';
import OrnamentalCorners from '../decorative/OrnamentalCorners';
import RoyalDivider from '../decorative/RoyalDivider';
import './FinalBooking.css';

const highlights = [
  { icon: '🪔', text: 'Resort Light Illuminations' },
  { icon: '🎆', text: 'Eco Sparkler & Folk Night' },
  { icon: '🎨', text: 'Diya & Rangoli Workshop' },
  { icon: '🍬', text: 'Royal Festive Feast & Sweets' },
];

const FinalBooking = () => {
  return (
    <section className="final" id="contact">
      {/* Background festive atmospheric layers */}
      <div className="festive-pattern" />
      <div className="fabric-texture" />
      <div className="final__glow" />

      {/* Hanging Diwali Kandeel & Diyas across the section */}
      <div className="final__hangings" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`final__hang final__hang--${i}`}>
            <div className="final__hang-chain" />
            <div className="final__hang-lamp">
              <div className="final__hang-flame" />
              <div className="final__hang-body" />
            </div>
          </div>
        ))}
      </div>

      {/* Cascading Marigold Floral Torans on sides */}
      <div className="final__toran final__toran--left" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="final__toran-flower" style={{ animationDelay: `${i * 0.25}s` }}>
            <span className="final__flower-petal">✿</span>
          </div>
        ))}
      </div>
      <div className="final__toran final__toran--right" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="final__toran-flower" style={{ animationDelay: `${i * 0.3}s` }}>
            <span className="final__flower-petal">✿</span>
          </div>
        ))}
      </div>

      {/* Main Container */}
      <div className="final__container">
        <motion.div
          className="final__content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
        >
          {/* Opulent Diwali RSVP Card */}
          <div className="final__diwali-card">
            <OrnamentalCorners size="lg" />
            <div className="final__diwali-inner-border" />

            {/* Auspicious Inscription */}
            <div className="final__shubh font-indic">
              <span>॥ ॐ श्री महालक्ष्म्यै नमः ॥</span>
            </div>

            <RoyalDivider variant="red" />

            <p className="final__invite font-calligraphy">
              You are cordially invited to celebrate the victory of light
            </p>

            <h1 className="final__title font-royal text-gradient-gold text-glow-gold">
              DIWALI UTSAV 2026
            </h1>
            <h3 className="final__subtitle font-serif">AT LIVZO RESORT & WILDERNESS SANCTUARY</h3>

            {/* Central Glowing Diya & Price Plaque */}
            <div className="final__centerpiece">
              <div className="final__diya-aura" />
              <svg
                className="final__diya-svg"
                viewBox="0 0 120 65"
                width="110"
                height="60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="60" cy="16" r="16" fill="url(#finalFlameGlow)" opacity="0.65" />
                <path
                  d="M60 2 C64 10 70 18 60 28 C50 18 56 10 60 2 Z"
                  fill="url(#finalFlameOuter)"
                  className="final__flame-anim"
                />
                <path d="M60 10 C62 16 65 21 60 27 C55 21 58 16 60 10 Z" fill="#FFFDF0" />
                <path
                  d="M20 30 C35 30 45 40 60 40 C75 40 85 30 100 30 C104 30 106 34 102 38 C92 54 78 62 60 62 C42 62 28 54 18 38 C14 34 16 30 20 30 Z"
                  fill="url(#finalDiyaBrass)"
                  stroke="#E8C252"
                  strokeWidth="1.2"
                />
                <path
                  d="M22 34 Q60 44 98 34"
                  stroke="#FFF3DD"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                  opacity="0.8"
                />
                <defs>
                  <radialGradient id="finalFlameGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFA500" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="finalFlameOuter" x1="60" y1="2" x2="60" y2="28" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFCC" />
                    <stop offset="40%" stopColor="#FFA726" />
                    <stop offset="100%" stopColor="#E65100" />
                  </linearGradient>
                  <linearGradient id="finalDiyaBrass" x1="20" y1="30" x2="100" y2="62" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F5C542" />
                    <stop offset="50%" stopColor="#C9993A" />
                    <stop offset="100%" stopColor="#7E5616" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Price Plaque */}
              <div className="final__price-card">
                <div className="final__discount-strip">
                  <span className="final__old-price">₹3,200</span>
                  <span className="final__discount-pill">DIWALI SPECIAL · 20% OFF</span>
                </div>
                <div className="final__price-row">
                  <span className="final__price-rupee font-serif">₹</span>
                  <span className="final__price-val font-serif">2,560</span>
                  <span className="final__price-per">/ PERSON</span>
                </div>
                <p className="final__price-includes">
                  ✦ 1 Night Stay · Lunch, High-Tea, Gala Dinner & Breakfast Included ✦
                </p>
              </div>
            </div>

            {/* Diwali Highlights Grid */}
            <div className="final__highlights-grid">
              {highlights.map((h, i) => (
                <div key={i} className="final__highlight-item">
                  <span className="final__highlight-icon">{h.icon}</span>
                  <span className="final__highlight-text">{h.text}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Button */}
            <a
              href="https://wa.me/917046267684"
              className="btn-gold final__cta-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="final__cta-star">✦</span>
              <span>RESERVE YOUR DIWALI GETAWAY</span>
              <span className="final__cta-arrow">→</span>
            </a>

            <p className="final__spots-hint">
              ✦ Limited Luxury Tents & Resort Cottages Available for Diwali ✦
            </p>

            <RoyalDivider variant="red" />

            {/* Bottom Row of Lit Earthen Diyas */}
            <div className="final__bottom-diyas" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="final__bottom-diya">
                  <div className="final__mini-flame" />
                  <div className="final__mini-diya" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="final__footer">
        <div className="final__footer-inner">
          <div className="final__footer-logo">
            <span className="final__footer-icon">
              <Flower size={16} color="var(--bright-gold)" />
            </span>
            <span className="final__footer-brand font-royal">LIVZO RESORT</span>
          </div>
          <div className="final__footer-links">
            <a href="#home">Home</a>
            <a href="#experience">Experience</a>
            <a href="#package">Package</a>
            <a href="#stay">Stay</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="final__footer-copy">© 2026 LIVZO Resort. Shubh Deepavali.</p>
        </div>
      </footer>
    </section>
  );
};

export default FinalBooking;
