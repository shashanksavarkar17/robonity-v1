import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase'; // Import auth from your firebase.js
import { onAuthStateChanged } from 'firebase/auth';

// 1. Create the Context
const AuthContext = createContext();

// 2. Create a custom hook to use the context
export function useAuth() {
  return useContext(AuthContext);
}

// 3. Create the Provider component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // This is the listener from Firebase
    // It runs on mount and whenever the auth state changes
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false); // We're done loading
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    // You can add login, signup, logout functions here if you want
  };

  // 4. Return the provider
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}