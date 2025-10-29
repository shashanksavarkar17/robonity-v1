import React from 'react';

// We'll use a simple file icon (you could replace this with an SVG icon)
const FileIcon = () => <div className="roboshare-icon">📄</div>;

function RoboShareItem({ title, description, url }) {
  return (
    <div className="roboshare-item">
      <FileIcon />
      <h3 className="roboshare-title">{title}</h3>
      <p className="roboshare-description">{description}</p>
      <a href={url} className="roboshare-link" download>
        Download
      </a>
    </div>
  );
}

export default RoboShareItem;