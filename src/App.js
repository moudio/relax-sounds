import React from 'react';
import Navigation from './Navigation/Navigation';
import { Router } from '@reach/router';
import './App.css';
import Welcome from './Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Welcome path="/" />
      </Router>
    </div>
  );
}

export default App;
