import React from 'react';
import '../styles/components/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ohio Politicians Platform. All rights reserved.</p>
      <div className="footer-links">
        <a href="/about">About</a> | <a href="/contact">Contact</a>
      </div>
      <p className="footer-legalese">
        Disclaimer: Information on this platform is sourced from Wikipedia and other public sources, which may contain inaccuracies. If you have corrections or updated information, please contact us at <a href="mailto:joseph@bartholomewdevelopment.com">joseph@bartholomewdevelopment.com</a>.
      </p>
    </footer>
  );
}

export default Footer;
