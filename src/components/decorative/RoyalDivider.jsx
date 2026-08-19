import React from 'react';
import './RoyalDivider.css';

/**
 * Decorative divider with gold lines and ornamental center.
 * @param {string} variant - 'gold' | 'red' 
 */
const RoyalDivider = ({ variant = 'gold' }) => {
  return (
    <div className={`rdiv rdiv--${variant}`} aria-hidden="true">
      <span className="rdiv__line rdiv__line--l"></span>
      <svg className="rdiv__ornament" viewBox="0 0 80 20" width="80" height="20" fill="none">
        <path d="M0 10 H25" stroke="currentColor" strokeWidth="0.8"/>
        <circle cx="30" cy="10" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
        <path d="M33 7 L40 2 L47 7" stroke="currentColor" strokeWidth="0.8" fill="none"/>
        <path d="M33 13 L40 18 L47 13" stroke="currentColor" strokeWidth="0.8" fill="none"/>
        <circle cx="40" cy="10" r="1.5" fill="currentColor" opacity="0.6"/>
        <circle cx="50" cy="10" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
        <path d="M55 10 H80" stroke="currentColor" strokeWidth="0.8"/>
      </svg>
      <span className="rdiv__line rdiv__line--r"></span>
    </div>
  );
};

export default RoyalDivider;
