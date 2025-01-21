// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDR4MKQbzY_ePlrrQdpKKN8w0KCPGjvIfs",
//   authDomain: "notifications-konnecteam.firebaseapp.com",
//   projectId: "notifications-konnecteam",
//   storageBucket: "notifications-konnecteam.appspot.com",
//   messagingSenderId: "833291587114",
//   appId: "1:833291587114:web:ac1900537db29e66cbbd53",
//   measurementId: "G-5R96SCSH2D"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBMGIgbEUoA_pHYgeN81wc1-B5RQ2ZViwQ",
  authDomain: "react-contact-58806.firebaseapp.com",
  projectId: "react-contact-58806",
  storageBucket: "react-contact-58806.appspot.com",
  messagingSenderId: "134105602975",
  appId: "1:134105602975:web:fe39989b7adf2a8359fbaa",
  measurementId: "G-WBJP8BP5CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage(app);

// const analytics = getAnalytics(app);

console.log("Firebase initialized:", app.name);
