// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-fa0ed.firebaseapp.com",
  projectId: "mern-auth-fa0ed",
  storageBucket: "mern-auth-fa0ed.appspot.com",
  messagingSenderId: "374970890983",
  appId: "1:374970890983:web:b7632f4b2cb5cb3ac2c042",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
