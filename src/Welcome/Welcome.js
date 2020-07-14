import React from 'react';
import Sounds from '../Sounds/Sounds';
import './Welcome.css';
function Welcome() {
  return (
    <div className="welcome">
      <div className="hero">
        <h1>Listen And Relax</h1>
      </div>
      <Sounds />
    </div>
  );
}

export default Welcome;
