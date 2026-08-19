import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Music, Paintbrush, Leaf } from 'lucide-react';
import OrnamentalCorners from '../decorative/OrnamentalCorners';
import RoyalDivider from '../decorative/RoyalDivider';
import './ExperienceGrid.css';

const IMAGES = {
  welcome: '/ChatGPT Image Aug 19, 2026, 08_04_36 AM.png',
  celebrate: '/janmashtami_celebration.png',
  create: '/matki_decoration.png',
  stay: '/images/10_live_nature_stay.jpg',
};

const experiences = [
  { id: 1, title: 'WELCOME', desc: 'Traditional welcome and festive hospitality.', icon: <Flame size={28} />, image: IMAGES.welcome },
  { id: 2, title: 'CELEBRATE', desc: 'Janmashtami celebration and Dahi-Handi.', icon: <Music size={28} />, image: IMAGES.celebrate },
  { id: 3, title: 'CREATE', desc: 'Matki decoration and creative festive moments.', icon: <Paintbrush size={28} />, image: IMAGES.create },
  { id: 4, title: 'STAY', desc: 'Relax and unwind with nature around you.', icon: <Leaf size={28} />, image: IMAGES.stay },
];

const ExperienceGrid = () => {
  return (
    <section className="exp" id="experience">
      <div className="festive-pattern" />
      <div className="fabric-texture" />

      <div className="exp__container">
        {/* Section Title */}
        <div className="exp__title-area">
          <RoyalDivider />
          <h2 className="exp__heading">Celebrate. Create. Stay.</h2>
          <RoyalDivider />
        </div>

        {/* 4-Card Grid */}
        <div className="exp__grid">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="exp__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              {/* Royal Portal (Image Arch) */}
              <div className="exp__portal-wrap">
                <div className="exp__portal-inner">
                  <img src={exp.image} alt={exp.title} className="exp__portal-img" loading="lazy" />
                  <div className="exp__portal-glow" />
                </div>
                {/* Gold Frame Layer */}
                <div className="exp__portal-frame" />
              </div>

              {/* Text Plaque */}
              <div className="exp__plaque">
                <div className="exp__plaque-icon">{exp.icon}</div>
                <h4 className="exp__plaque-title">{exp.title}</h4>
                <p className="exp__plaque-desc">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceGrid;
