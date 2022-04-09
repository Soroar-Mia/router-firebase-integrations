// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUbRnoS_hFB1g8g6QLZ7BW07EcRr8Bkrg",
  authDomain: "router-firebase-integrations.firebaseapp.com",
  projectId: "router-firebase-integrations",
  storageBucket: "router-firebase-integrations.appspot.com",
  messagingSenderId: "327765158995",
  appId: "1:327765158995:web:5fd684760644f445edeaa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;