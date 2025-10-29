import React from 'react';

// We'll pass in props: the image URL, title, and a description
function GalleryItem({ imageUrl, title, description }) {
  return (
    <div className="gallery-item">
      <img src={imageUrl} alt={title} className="gallery-image" />
      <div className="gallery-item-content">
        <h3 className="gallery-title">{title}</h3>
        <p className="gallery-description">{description}</p>
      </div>
    </div>
  );
}

export default GalleryItem;