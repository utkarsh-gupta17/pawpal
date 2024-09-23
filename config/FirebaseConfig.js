// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "pawpal-5b835.firebaseapp.com",
  projectId: "pawpal-5b835",
  storageBucket: "pawpal-5b835.appspot.com",
  messagingSenderId: "250584598404",
  appId: "1:250584598404:web:eec89e2715815c84a3bfd1",
  measurementId: "G-45M96DCYKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);