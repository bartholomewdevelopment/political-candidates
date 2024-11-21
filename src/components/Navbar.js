import React from 'react';
import '../styles/components/Navbar.scss';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;