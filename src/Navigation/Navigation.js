import React from 'react'
import { Link } from '@reach/router'
import './Navigation.css'
function Navigation () {
  return (
    <>
      <nav className="Navbar">
        <div className="logo">
          <Link to="/">Home</Link>
        </div>
        <ul className="about-ul">
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation
