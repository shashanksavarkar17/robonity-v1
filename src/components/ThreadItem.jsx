import React from 'react';
import { Link } from 'react-router-dom';

function ThreadItem({ title, author, date, replies, views }) {
  return (
    <div className="thread-item">
      <div className="thread-details">
        {/* We link to a placeholder, e.g., /forum/thread/1 */}
        <Link to={`/forum/thread/1`}>{title}</Link>
        <div className="thread-metadata">
          by <strong>{author}</strong> on {date}
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