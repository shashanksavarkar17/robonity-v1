import React, { useState } from 'react';
import { db } from '../firebase';
import { useAuth } from './AuthContext';
import { collection, addDoc, serverTimestamp, doc, updateDoc, increment } from 'firebase/firestore';

function PostReply({ threadId }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!text.trim()) {
      setError('Reply cannot be empty.');
      return;
    }
    if (!currentUser || !currentUser.displayName) { // Check for displayName
      setError('You must be logged in with a display name to reply.');
      return;
    }

    try {
      // 1. Add the new reply
      const repliesRef = collection(db, 'threads', threadId, 'replies');
      await addDoc(repliesRef, {
        text: text,
        authorId: currentUser.uid,
        authorName: currentUser.displayName, // <-- UPDATED
        createdAt: serverTimestamp(),
      });

      // 2. Update the 'replies' count
      const threadRef = doc(db, 'threads', threadId);
      await updateDoc(threadRef, {
        replies: increment(1)
      });

      setText('');
    } catch (err) {
      setError('Failed to post reply.');
      console.error(err);
    }
  };
  
  // (The rest of the return(...) JSX is the same)
  // ...
// ... rest of the file
  return (
    <form className="post-reply-form" onSubmit={handleSubmit}>
      <h3>Post a Reply</h3>
      {error && <p className="auth-error">{error}</p>}
      <div className="form-group">
        <textarea
          placeholder="Write your reply..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          rows="4"
        ></textarea>
        <button type="submit" className="new-thread-btn">
          Post Reply
        </button>
      </div>
    </form>
  );
}

export default PostReply;