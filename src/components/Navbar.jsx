import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import NavLink

// A simple SVG logo placeholder (a gear/atom)
// You can replace this with an <img src="/logo.png" />
const Logo = () => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="var(--primary-color)" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 8a8 8 0 0 0 -5.66 2.34" />
    <path d="M12 16a8 8 0 0 0 5.66 -2.34" />
  </svg>
);

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link" onClick={handleLinkClick}>
        <Logo />
        <span className="logo-text">Robonity</span>
      </Link>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <div className={isMobileMenuOpen ? "bar open" : "bar"}></div>
        <div className={isMobileMenuOpen ? "bar open" : "bar"}></div>
        <div className={isMobileMenuOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Navigation Links */}
      <ul className={isMobileMenuOpen ? "nav-links open" : "nav-links"}>
        <li><NavLink to="/" onClick={handleLinkClick} end>Home</NavLink></li>
        <li><NavLink to="/projects" onClick={handleLinkClick}>Projects</NavLink></li>
        <li><NavLink to="/gallery" onClick={handleLinkClick}>Gallery</NavLink></li>
        <li><NavLink to="/forum" onClick={handleLinkClick}>Forum</NavLink></li>
        <li><NavLink to="/events" onClick={handleLinkClick}>Events</NavLink></li>
        <li><NavLink to="/roboshare" onClick={handleLinkClick}>RoboShare</NavLink></li>
        <li><NavLink to="/resources" onClick={handleLinkClick}>Resources</NavLink></li>
        <li><NavLink to="/newsletter" onClick={handleLinkClick}>Newsletter</NavLink></li>
        <li><NavLink to="/about" onClick={handleLinkClick}>About</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;