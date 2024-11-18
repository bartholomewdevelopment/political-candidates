import React from 'react';
import '../styles/components/Footer.scss';


function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ohio Politicians Platform. All rights reserved.</p>
      <div className="footer-links">
        <a href="/about">About</a> | <a href="/contact">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
