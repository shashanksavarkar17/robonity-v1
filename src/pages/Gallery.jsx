import React from 'react';
import GalleryItem from '../components/GalleryItem'; // We still need this

function Gallery() {
  // We are back to using the original placeholder data
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
    }
  ];

  return (
    <div>
      {/* We are removing the "Submit Project" button and header */}
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
