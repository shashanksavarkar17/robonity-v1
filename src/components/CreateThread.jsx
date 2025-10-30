import React, { useState } from 'react';
import { db } from '../firebase';
import { useAuth } from './AuthContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function CreateThread() {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Title cannot be empty.');
      return;
    }

    if (!currentUser || !currentUser.displayName) { // Check for displayName
      setError('You must be logged in with a display name to post.');
      return;
    }

    try {
      await addDoc(collection(db, 'threads'), {
        title: title,
        authorId: currentUser.uid,
        authorName: currentUser.displayName, // <-- UPDATED
        createdAt: serverTimestamp(),
        replies: 0,
        views: 0,
      });
      setTitle('');
    } catch (err) {
      setError('Failed to create thread. Please try again.');
      console.error(err);
    }
  };
  
  // (The rest of the return(...) JSX is the same)
  // ...
// ... rest of the file
  return (
    <form className="create-thread-form" onSubmit={handleSubmit}>
      <h3>Start a New Discussion</h3>
      {error && <p className="auth-error">{error}</p>}
      <div className="form-group">
        <input
          type="text"
          placeholder="Thread Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit" className="new-thread-btn">
          Post Thread
        </button>
      </div>
    </form>
  );
}

export default CreateThread;