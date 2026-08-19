import React from 'react';
import Navbar from './components/Navbar';
import CurtainReveal from './components/decorative/CurtainReveal';
import HeroSection from './components/sections/HeroSection';
import PackageSection from './components/sections/PackageSection';
import ExperienceGrid from './components/sections/ExperienceGrid';
import StoryCarousel from './components/sections/StoryCarousel';
import NatureStaySection from './components/sections/NatureStaySection';
import FinalBooking from './components/sections/FinalBooking';
import MobileStickyCTA from './components/MobileStickyCTA';
import FloatingParticles from './components/decorative/FloatingParticles';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <FloatingParticles />
      <Navbar />
      <main>
        <CurtainReveal>
          <HeroSection />
        </CurtainReveal>
        <PackageSection />
        <ExperienceGrid />
        {/* <StoryCarousel /> */}
        <NatureStaySection />
        <FinalBooking />
      </main>
      <MobileStickyCTA />
    </div>
  );
}

export default App;
