import React from 'react';
import { Link } from 'react-router-dom';

// Helper function to format the timestamp (no change)
function formatDate(timestamp) {
  if (!timestamp) {
    return 'Just now';
  }
  return timestamp.toDate().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

// Prop list is updated
function ThreadItem({ id, title, authorName, date, replies, views }) {

  return (
    <div className="thread-item">
      <div className="thread-details">
        <Link to={`/forum/thread/${id}`}>{title}</Link>
        <div className="thread-metadata">
          {/* UPDATED: We just use authorName directly */}
          by <strong>{authorName || 'Anonymous'}</strong> on {formatDate(date)}
        </div>
      </div>
      <div className="thread-stats">
        <div>{replies} Replies</div>
        <div>{views} Views</div>
      </div>
    </div>
  );
}

export default ThreadItem;