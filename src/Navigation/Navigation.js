import React from 'react';
import { Link } from '@reach/router';

function Navigation() {
  return (
    <nav>
      <Link to="/">Logo</Link>
      <ul>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
      </ul>
    </nav>
  );
}

export default Navigation;
