// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0nCvCAQrLGeDe9U6M89fulfK98FxY0ks",
  authDomain: "robonityapp.firebaseapp.com",
  projectId: "robonityapp",
  storageBucket: "robonityapp.firebasestorage.app",
  messagingSenderId: "941417528903",
  appId: "1:941417528903:web:a0e5324ca4ce2c5b2dfb62",
  measurementId: "G-YTPF1EV6M7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // 2. Initialize and export
export default app;