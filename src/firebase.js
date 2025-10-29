// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);