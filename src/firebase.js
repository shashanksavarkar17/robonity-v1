// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
//
// ▼▼▼ THIS IS THE CRITICAL LINE THAT IS LIKELY MISSING OR WRONG ▼▼▼
//
export const auth = getAuth(app);
//
// ▲▲▲ MAKE SURE THIS LINE EXISTS AND HAS 'export const' ▲▲▲
//

export const db = getFirestore(app);
export default app;