import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { db, storage } from '../firebase';
import { useAuth } from '../components/AuthContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function SubmitProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!currentUser) {
      setError('You must be logged in to submit a project.');
      return;
    }
    if (!image) {
      setError('Please select an image to upload.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Create a unique storage path for the file
      const storagePath = `projects/${currentUser.uid}/${Date.now()}_${image.name}`;
      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, image);

      // 2. Listen to upload progress
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (uploadError) => { // Handle upload error
          console.error(uploadError);
          setError('Failed to upload image: ' + uploadError.message);
          setIsSubmitting(false);
        },
        async () => { // Handle successful upload
          // 3. Get the image's public download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // 4. Add project details to Firestore
          await addDoc(collection(db, 'projects'), {
            title: title,
            description: description,
            imageUrl: downloadURL,
            authorId: currentUser.uid,
            authorName: currentUser.displayName,
            createdAt: serverTimestamp(),
          });
          
          setIsSubmitting(false);
          navigate('/gallery'); // Redirect to gallery on success
        }
      );
    } catch (err) {
      setError('Failed to create project: ' + err.message);
      setIsSubmitting(false);
    }
  };
  
  // Show a message if not logged in
  if (!currentUser) {
    return (
      <div>
        <h1 className="page-header">Submit Project</h1>
        <p className="auth-switch" style={{textAlign: 'left', margin: '2rem 0'}}>
          Please <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link> to submit a project.
        </p>
      </div>
    );
  }

  return (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1 className="page-header">Submit a Project</h1>
        {error && <p className="auth-error">{error}</p>}
        
        <div className="form-group">
          <label htmlFor="title">Project Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Project Image</label>
          <input
            type="file"
            id="image"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            required
            style={{padding: '0.5rem', border: 'none'}}
          />
        </div>
        
        {isSubmitting && (
          <div className="progress-bar-container">
            <div 
              className="progress-bar" 
              style={{ width: `${uploadProgress}%` }}
            >
              {Math.round(uploadProgress)}%
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Project'}
        </button>
      </form>
    </div>
  );
}

export default SubmitProject;