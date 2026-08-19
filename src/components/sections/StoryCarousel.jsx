import React, { useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OrnamentalCorners from '../decorative/OrnamentalCorners';
import RoyalDivider from '../decorative/RoyalDivider';
import './StoryCarousel.css';

const IMAGES = {
  welcome: '/ChatGPT Image Aug 19, 2026, 08_04_36 AM.png',
  celebrate: '/janmashtami_celebration.png',
  create: '/matki_decoration.png',
  stay: '/images/10_live_nature_stay.jpg',
};

const slides = [
  { id: 1, num: '01', title: 'WELCOME', image: IMAGES.welcome },
  { id: 2, num: '02', title: 'CELEBRATE', image: IMAGES.celebrate },
  { id: 3, num: '03', title: 'CREATE', image: IMAGES.create },
  { id: 4, num: '04', title: 'STAY', image: IMAGES.stay },
];

const StoryCarousel = () => {
  const scrollRef = useRef(null);
  const [dotIdx, setDotIdx] = useState(0);

  const updateDots = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const ratio = scrollLeft / Math.max(scrollWidth - clientWidth, 1);
    setDotIdx(Math.min(Math.round(ratio * 3), 3));
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -350 : 350, behavior: 'smooth' });
    setTimeout(updateDots, 400);
  };

  return (
    <section className="story" id="gallery">
      <div className="festive-pattern festive-pattern--cream" />

      <div className="story__container">
        {/* Title */}
        <div className="story__header">
          <RoyalDivider variant="red" />
          <h2 className="story__title">A Celebration To Remember</h2>
          <RoyalDivider variant="red" />
        </div>

        {/* Carousel */}
        <div className="story__carousel">
          <button className="story__arrow story__arrow--l" onClick={() => scroll('left')}>
            <ChevronLeft size={22} />
          </button>

          <div className="story__scroll no-scrollbar" ref={scrollRef} onScroll={updateDots}>
            <div className="story__track">
              {slides.map((s) => (
                <div key={s.id} className="story__slide">
                  {/* The Royal Portrait */}
                  <div className="story__portrait-wrap">
                    <div className="story__portrait-inner">
                      <img src={s.image} alt={s.title} className="story__portrait-img" loading="lazy" />
                      <div className="story__portrait-glow" />
                    </div>
                    {/* Golden Picture Frame */}
                    <div className="story__portrait-frame" />
                    <OrnamentalCorners size="sm" />
                  </div>
                  
                  {/* Golden Text Banner */}
                  <div className="story__banner">
                    <span className="story__banner-num">{s.num}</span>
                    <span className="story__banner-name">{s.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="story__arrow story__arrow--r" onClick={() => scroll('right')}>
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="story__dots">
          {slides.map((_, i) => (
            <span key={i} className={`story__dot ${i === dotIdx ? 'story__dot--on' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryCarousel;
