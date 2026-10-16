import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        {/* Logo */}
        <a href="#" className="nav__logo">
          <div className="nav__logo-mark">
            <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="17" stroke="var(--antique-gold)" strokeWidth="1.2"/>
              <circle cx="20" cy="20" r="11" stroke="var(--antique-gold)" strokeWidth="0.6" strokeDasharray="2 3"/>
              <circle cx="20" cy="20" r="5" fill="var(--antique-gold)" opacity="0.25"/>
              <circle cx="20" cy="20" r="2" fill="var(--antique-gold)" opacity="0.6"/>
            </svg>
          </div>
          <div className="nav__logo-text">
            <span className="nav__brand">LIVZO</span>
            <span className="nav__sub">R E S O R T</span>
          </div>
        </a>

        {/* Center Links */}
        <div className="nav__links">
          <a href="#experience">Experience</a>
          <span className="nav__link-dot">·</span>
          <a href="#package">Package</a>
          <span className="nav__link-dot">·</span>
          <a href="#stay">Stay</a>
          <span className="nav__link-dot">·</span>
          <a href="#gallery">Gallery</a>
          <span className="nav__link-dot">·</span>
          <a href="#contact">Contact</a>
        </div>

        {/* CTA */}
        <a href="https://wa.me/917046267684" className="nav__cta" target="_blank" rel="noopener noreferrer">₹2,560 · Book Now (20% OFF)</a>

        {/* Hamburger */}
        <button className="nav__hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Ornamental bottom line */}
      <div className="nav__bottom-line" aria-hidden="true"></div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="nav__mobile">
          <a href="#experience" onClick={() => setMobileOpen(false)}>Experience</a>
          <a href="#package" onClick={() => setMobileOpen(false)}>Package</a>
          <a href="#stay" onClick={() => setMobileOpen(false)}>Stay</a>
          <a href="#gallery" onClick={() => setMobileOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
          <a href="https://wa.me/917046267684" className="nav__cta nav__cta--mobile" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>₹2,560 · Book Now (20% OFF)</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
