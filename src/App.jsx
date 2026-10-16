import React from 'react';
import Navbar from './components/Navbar';
import DiwaliLoaderEntrance from './components/entrance/DiwaliLoaderEntrance';
import HeroSection from './components/sections/HeroSection';
import PackageSection from './components/sections/PackageSection';
import ExperienceGrid from './components/sections/ExperienceGrid';
import StoryCarousel from './components/sections/StoryCarousel';
import NatureStaySection from './components/sections/NatureStaySection';
import FinalBooking from './components/sections/FinalBooking';
import MobileStickyCTA from './components/MobileStickyCTA';
import FloatingParticles from './components/decorative/FloatingParticles';
import FirecrackerCanvas from './components/decorative/FirecrackerCanvas';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <FloatingParticles />
      <FirecrackerCanvas />
      <DiwaliLoaderEntrance />
      <Navbar />
      <main>
        <HeroSection />
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
