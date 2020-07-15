import React from 'react';
import Sounds from '../Sounds/Sounds';
import './Welcome.css';
function Welcome() {
  return (
    <div className="welcome">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Listen And <span className="relax">Relax</span>
          </h1>
        </div>
      </div>
      <Sounds />
    </div>
  );
}

export default Welcome;
