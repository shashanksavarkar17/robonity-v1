import React from 'react';
import GalleryItem from '../components/GalleryItem'; // Import the new component

function Gallery() {
  // We'll use placeholder images from a service called 'placeholder.com'
  // You can replace these URLs with your own images later.
  
  const galleryData = [
    {
      id: 1,
      title: 'Autonomous Rover',
      description: 'A student-built rover navigating an obstacle course.',
      imageUrl: 'https://via.placeholder.com/400x250/007bff/ffffff?text=Rover+Project'
    },
    {
      id: 2,
      title: 'RoboSoccer 2025',
      description: 'Our team competing in the finals.',
      imageUrl: 'https://via.placeholder.com/400x250/28a745/ffffff?text=RoboSoccer'
    },
    {
      id: 3,
      title: '3D Printed Arm',
      description: 'A 6-axis robotic arm prototype.',
      imageUrl: 'https://via.placeholder.com/400x250/dc3545/ffffff?text=Robotic+Arm'
    },
    {
      id: 4,
      title: 'Workshop Day',
      description: 'Members learning soldering and circuitry.',
      imageUrl: 'https://via.placeholder.com/400x250/ffc107/000000?text=Workshop'
    },
    {
      id: 5,
      title: 'Drone Assembly',
      description: 'Assembling our custom quadcopter for aerial photography.',
      imageUrl: 'https://via.placeholder.com/400x250/17a2b8/ffffff?text=Drone+Build'
    },
    {
      id: 6,
      title: 'Line Follower Bot',
      description: 'A classic line follower bot from our beginner\'s competition.',
      imageUrl: 'https://via.placeholder.com/400x250/6c757d/ffffff?text=Line+Follower'
    }
  ];

  return (
    <div>
      <h1 className="page-header">Project Gallery</h1>
      <p style={{marginBottom: '2rem'}}>A visual showcase of the amazing robots built by our community members.</p>
      
      <div className="gallery-grid">
        {galleryData.map(item => (
          <GalleryItem 
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;