import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Coffee, Wine, Flame, Sparkles, Paintbrush, Leaf, Mountain, Compass, Utensils } from 'lucide-react';
import OrnamentalCorners from '../decorative/OrnamentalCorners';
import RoyalDivider from '../decorative/RoyalDivider';
import './PackageSection.css';

const inclusions = [
  { id: 1, icon: <Coffee size={20} />, img: '/images/01_breakfast.jpg', title: 'Royal Breakfast', desc: 'Festive sunrise breakfast feast' },
  { id: 2, icon: <Compass size={20} />, img: '/images/02_adventure.jpg', title: 'Wilderness Adventure', desc: 'Nature trails & outdoor activities' },
  { id: 3, icon: <Wine size={20} />, img: '/images/03_welcome_drink.jpg', title: 'Kesariya Welcome Drink', desc: 'A royal spiced festive greeting' },
  { id: 4, icon: <Flame size={20} />, img: '/images/04_welcome_tradition_m.jpg', title: 'Aarti & Chandan Tilak', desc: 'Traditional Diwali hospitality' },
  { id: 5, icon: <Utensils size={20} />, img: '/images/diwali_royal_feast.jpg', title: 'Royal Festive Lunch', desc: 'Authentic traditional festive spread' },
  { id: 6, icon: <Coffee size={20} />, img: '/images/06_high_tea.jpg', title: 'High-Tea & Sweets', desc: 'Artisanal festive snacks & tea' },
  { id: 7, icon: <Sparkles size={20} />, img: '/images/diwali_celebration.jpg', title: 'Grand Laxmi Pujan & Aarti', desc: 'Auspicious evening prayer & bells' },
  { id: 8, icon: <Utensils size={20} />, img: '/images/diwali_royal_feast.jpg', title: 'Grand Diwali Dinner', desc: 'Royal candlelight feast under the stars' },
  { id: 9, icon: <Paintbrush size={20} />, img: '/images/diwali_rangoli.jpg', title: 'Diya Craft & Flower Rangoli', desc: 'Paint clay diyas & arrange petals' },
  { id: 10, icon: <Leaf size={20} />, img: '/images/10_live_nature_stay.jpg', title: '1 Night Nature Stay', desc: 'Starlit tranquil retreat' },
  { id: 11, icon: <Mountain size={20} />, img: '/images/11_lake_mountain_stay.jpg', title: 'Lake + Mountain Stay', desc: 'Scenic serene surroundings' },
];

const PackageSection = () => {
  const scrollRef = useRef(null);
  const [dotIdx, setDotIdx] = useState(0);

  const updateDots = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const ratio = scrollLeft / Math.max(scrollWidth - clientWidth, 1);
    setDotIdx(Math.min(Math.round(ratio * 4), 4));
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
    setTimeout(updateDots, 400);
  };

  return (
    <section className="pkg" id="package">
      {/* Cream background with subtle red pattern */}
      <div className="festive-pattern festive-pattern--cream" />

      <div className="pkg__wrap">
        {/* Outer ornamental frame */}
        <div className="pkg__frame">
          <OrnamentalCorners size="lg" />
          <div className="pkg__frame-border" />

          {/* Header */}
          <div className="pkg__header">
            <RoyalDivider variant="red" />
            <p className="pkg__label font-indic">॥ दीपावली विशेष ॥</p>

            <div className="pkg__price-container">
              <div className="pkg__discount-pill">
                <span className="pkg__original-price">₹3,200</span>
                <span className="pkg__discount-badge">20% DIWALI OFF</span>
              </div>
              <div className="pkg__price-row">
                <span className="pkg__rupee font-serif">₹</span>
                <span className="pkg__amount font-serif">2,560</span>
                <span className="pkg__per">/ PERSON</span>
              </div>
            </div>

            <p className="pkg__sub font-calligraphy">Everything You Need For An Enchanting Festival of Lights</p>
          </div>

          {/* Carousel */}
          <div className="pkg__carousel-area">
            <button className="pkg__arrow pkg__arrow--l" onClick={() => scroll('left')}>
              <ChevronLeft size={20} />
            </button>

            <div className="pkg__scroll no-scrollbar" ref={scrollRef} onScroll={updateDots}>
              <div className="pkg__track">
                {inclusions.map((item) => (
                  <motion.div
                    key={item.id}
                    className="pkg__card"
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  >
                    {/* Image Header */}
                    <div className="pkg__card-img-wrap">
                      <img src={item.img} alt={item.title} className="pkg__card-img" />
                      <div className="pkg__card-img-overlay" />
                    </div>

                    <h5 className="pkg__card-title">{item.title}</h5>
                    <p className="pkg__card-desc">{item.desc}</p>
                    {/* Bottom ornament */}
                    <div className="pkg__card-bottom-orn">
                      <svg viewBox="0 0 40 8" width="40" height="8" fill="none">
                        <path d="M0 4 H15 M25 4 H40" stroke="var(--antique-gold)" strokeWidth="0.5" opacity="0.4" />
                        <circle cx="20" cy="4" r="2" stroke="var(--antique-gold)" strokeWidth="0.5" fill="none" opacity="0.4" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <button className="pkg__arrow pkg__arrow--r" onClick={() => scroll('right')}>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="pkg__dots">
            {[0, 1, 2, 3, 4].map(i => (
              <span key={i} className={`pkg__dot ${i === dotIdx ? 'pkg__dot--on' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
