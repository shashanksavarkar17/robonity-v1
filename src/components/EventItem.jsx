import React from 'react';

// Props will include: date, title, location, and description
function EventItem({ date, title, location, description }) {
  return (
    <div className="event-item">
      <div className="event-date">
        {/* We'll assume the date is a simple string for now */}
        {date}
      </div>
      <div className="event-details">
        <h3 className="event-title">{title}</h3>
        <div className="event-location">{location}</div>
        <p className="event-description">{description}</p>
      </div>
    </div>
  );
}

export default EventItem;