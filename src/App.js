import React from 'react';
import Navigation from './Navigation/Navigation';
import { Router } from '@reach/router';
import './App.css';
import Welcome from './Welcome/Welcome';
import About from './About/About';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Welcome path="/" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;
