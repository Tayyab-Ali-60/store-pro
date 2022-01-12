// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHgsGTn5tmToyPKKQ6qtkWhFJ7vw3NzE0",
  authDomain: "shop-11d39.firebaseapp.com",
  projectId: "shop-11d39",
  storageBucket: "shop-11d39.appspot.com",
  messagingSenderId: "252947606299",
  appId: "1:252947606299:web:6a01c69ae05c295bf881be",
  measurementId: "G-XRB7RVM3M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;