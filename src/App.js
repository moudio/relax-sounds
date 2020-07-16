import React from 'react';
import Navigation from './Navigation/Navigation';
import { Router, globalHistory } from '@reach/router';
import './App.css';
import Welcome from './Welcome/Welcome';
import About from './About/About';
import Error from './Error/Error';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Welcome exact={true} path="/" history={globalHistory} />
        <About path="/about" />
        <Error path="*" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
