import React from 'react';
import './MobileStickyCTA.css';

const MobileStickyCTA = () => {
  return (
    <div className="mcta">
      <div className="mcta__inner">
        <div className="mcta__price">
          <h4>₹2,100 <span className="mcta__per">/ Person</span></h4>
        </div>
        <a href="https://wa.me/917046267684" className="btn-gold mcta__btn" target="_blank" rel="noopener noreferrer">RESERVE</a>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
