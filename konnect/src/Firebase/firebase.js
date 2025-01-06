// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR4MKQbzY_ePlrrQdpKKN8w0KCPGjvIfs",
  authDomain: "notifications-konnecteam.firebaseapp.com",
  projectId: "notifications-konnecteam",
  storageBucket: "notifications-konnecteam.appspot.com",
  messagingSenderId: "833291587114",
  appId: "1:833291587114:web:ac1900537db29e66cbbd53",
  measurementId: "G-5R96SCSH2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);