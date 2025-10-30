import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import GalleryItem from '../components/GalleryItem';

function Gallery() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Real-time listener for projects
  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      const projectsRef = collection(db, 'projects');
      const q = query(projectsRef, orderBy('createdAt', 'desc'));

      const unsubscribe = onSnapshot(q,
        (querySnapshot) => {
          const projectsData = [];
          querySnapshot.forEach((doc) => {
            projectsData.push({ ...doc.data(), id: doc.id });
          });
          setProjects(projectsData);
          setLoading(false);
        },
        (err) => {
          console.error(err);
          setError("Failed to load projects: " + err.message);
          setLoading(false);
        }
      );
      return () => unsubscribe();
    } catch (err) {
      console.error(err);
      setError("Error setting up projects listener: " + err.message);
      setLoading(false);
    }
  }, []);
  
  return (
    <div>
      <div className="gallery-header">
        <h1 className="page-header" style={{marginBottom: 0}}>Project Gallery</h1>
        {/* New Submit Button */}
        <Link to="/submit-project" className="new-thread-btn">
          Submit Your Project
        </Link>
      </div>
      <p style={{marginBottom: '2rem'}}>A visual showcase of the amazing robots built by our community members.</p>
      
      {loading && <p>Loading projects...</p>}
      
      {error && (
        <div className="auth-error">
          <p><strong>Error loading projects:</strong></p>
          <p style={{fontFamily: 'monospace', fontSize: '0.9rem', marginTop: '1rem'}}>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="gallery-grid">
          {projects.length === 0 && (
            <p style={{color: 'var(--text-muted)'}}>No projects submitted yet. Be the first!</p>
          )}
          {projects.map(item => (
            <GalleryItem 
              key={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              // You can also pass authorName if you update GalleryItem
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;