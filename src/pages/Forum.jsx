import React from 'react';
import ThreadItem from '../components/ThreadItem'; // Import the component

function Forum() {

  const threadData = [
    {
      id: 1,
      title: 'Help! My motor driver keeps burning out.',
      author: 'RoboNoob',
      date: 'Oct 28, 2025',
      replies: 5,
      views: 42
    },
    {
      id: 2,
      title: 'Showcase: My 3D Printed Quadruped Robot',
      author: 'ProjectMaster',
      date: 'Oct 27, 2025',
      replies: 12,
      views: 110
    },
    {
      id: 3,
      title: 'Best practices for Raspberry Pi vs Arduino?',
      author: 'CodeJunkie',
      date: 'Oct 26, 2025',
      replies: 8,
      views: 78
    },
    {
      id: 4,
      title: 'RoboSoccer 2026 Strategy Discussion',
      author: 'TeamCaptain',
      date: 'Oct 25, 2025',
      replies: 2,
      views: 31
    }
  ];

  return (
    <div>
      <div className="forum-header">
        <h1 className="page-header" style={{marginBottom: 0}}>Community Forum</h1>
        <button className="new-thread-btn">
          Start New Thread
        </button>
      </div>
      
      <div className="forum-list">
        {threadData.map(thread => (
          <ThreadItem
            key={thread.id}
            title={thread.title}
            author={thread.author}
            date={thread.date}
            replies={thread.replies}
            views={thread.views}
          />
        ))}
      </div>
    </div>
  );
}

export default Forum;