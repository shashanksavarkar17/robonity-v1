import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Home() {
  return (
    <div>
      {/* === New Hero Section === */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Robonity</h1>
          <p>The premier community for robotics creators, engineers, and hobbyists. Share, learn, and build the future.</p>
          <div className="hero-buttons">
            <Link to="/forum" className="btn btn-primary">Join the Forum</Link>
            <Link to="/projects" className="btn btn-secondary">Explore Projects</Link>
          </div>
        </div>
        <div className="hero-image">
          {/* This tag will render an image */}
          
        </div>
      </section>
      {/* === End of Hero Section === */}

      {/* Existing Content */}
      <h2 className="page-header" style={{ marginTop: '3rem' }}>Get Started</h2>
      <p>
        Check out the <Link to="/projects">Projects</Link> page to see what others are building, 
        or learn more <Link to="/about">about us</Link>.
      </p>
    </div>
  );
}

export default Home;