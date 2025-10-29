import React from 'react';

function Projects() {
  return (
    <div>
      <h1 className="page-header">Community Projects</h1>
      <p>Here is a list of projects currently being developed by our community members.</p>
      
      {/* This is just a placeholder. We can make this dynamic later! */}
      <div style={{ marginTop: '1.5rem' }}>
        <h3>Project: Autonomous Mars Rover</h3>
        <p>A small-scale rover using a Raspberry Pi and AI for navigation.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <h3>Project: RoboSoccer Team</h3>
        <p>Building a team of AI-powered robots for the upcoming RoboSoccer 2026.</p>
      </div>
    </div>
  );
}

export default Projects;