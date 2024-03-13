// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpFcyRbOBnaSWANxVcX9joqMDg0NBupWA",
  authDomain: "shopping-cart-03132024.firebaseapp.com",
  projectId: "shopping-cart-03132024",
  storageBucket: "shopping-cart-03132024.appspot.com",
  messagingSenderId: "989279049898",
  appId: "1:989279049898:web:86fdd3a619665a7cfb98d3",
  measurementId: "G-KDJV2259H2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
