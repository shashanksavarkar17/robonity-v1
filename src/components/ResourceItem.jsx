import React from 'react';

function ResourceItem({ title, url, description }) {
  return (
    <div className="resource-item">
      <h3 className="resource-title">
        {/* target="_blank" opens the link in a new tab */}
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p className="resource-description">{description}</p>
    </div>
  );
}

export default ResourceItem;