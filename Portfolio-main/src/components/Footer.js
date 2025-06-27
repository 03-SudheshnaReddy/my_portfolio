import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-slogan">"Building the future, one line of code at a time."</p>
        <p>© {new Date().getFullYear()} Sudheshna Reddy.Crafted with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
