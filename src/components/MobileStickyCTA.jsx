import React from 'react';
import './MobileStickyCTA.css';

const MobileStickyCTA = () => {
  return (
    <div className="mcta">
      <div className="mcta__inner">
        <div className="mcta__price">
          <div className="mcta__discount-tag">
            <span className="mcta__old-price">₹3,200</span>
            <span className="mcta__save-badge">20% OFF</span>
          </div>
          <h4>₹2,560 <span className="mcta__per">/ Person</span></h4>
        </div>
        <a href="https://wa.me/917046267684" className="btn-gold mcta__btn" target="_blank" rel="noopener noreferrer">
          ✦ RESERVE NOW
        </a>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
