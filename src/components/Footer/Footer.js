import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center py-4">
        <p>&copy; {new Date().getFullYear()} Recipe Vault. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/terms-of-service" className="footer-link">Terms of Service</a>
        </div>
        <p className="mt-2">Recipes sourced from <a href="https://www.food.com" target="_blank" rel="noopener noreferrer" className="footer-link">food.com</a>. Not intended to be seen as original content.</p>
      </div>
    </footer>
  );
};

export default Footer;
