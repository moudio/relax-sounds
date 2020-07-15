import React from 'react';
import Navigation from './Navigation/Navigation';
import { Router } from '@reach/router';
import './App.css';
import Welcome from './Welcome/Welcome';
import About from './About/About';
import Error from './Error/Error';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Welcome exact={true} path="/" />
        <About path="/about" />
        <Error path="*" />
      </Router>
    </div>
  );
}

export default App;
