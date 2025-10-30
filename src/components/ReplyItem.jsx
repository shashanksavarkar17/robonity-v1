import React from 'react';

// Helper function to format the timestamp (no change)
function formatDate(timestamp) {
  if (!timestamp) {
    return 'Just now';
  }
  return timestamp.toDate().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });
}

function ReplyItem({ reply }) {
  // UPDATED: We use reply.authorName directly
  const username = reply.authorName || 'Anonymous';

  return (
    <div className="reply-item">
      <div className="reply-header">
        <strong>{username}</strong>
        <span className="reply-date">{formatDate(reply.createdAt)}</span>
      </div>
      <p className="reply-text">{reply.text}</p>
    </div>
  );
}

export default ReplyItem;