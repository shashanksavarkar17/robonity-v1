import React from 'react';

function Home() {
  return (
    <div>
      <h1 className="page-header">Welcome to Robonity</h1>
      <p>This is the central hub for our robotics community. Share your projects, find team members, and learn from others.</p>
      
      <h2 style={{ marginTop: '2rem' }}>Get Started</h2>
      <p>
        Check out the <a href="/projects">Projects</a> page to see what others are building, or learn more <a href="/about">about us</a>.
      </p>
    </div>
  );
}

export default Home;