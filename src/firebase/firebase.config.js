// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQmIR7wbpRNFnSfKCbrKT-WPYlTK1-bT4",
  authDomain: "the-coding-hero.firebaseapp.com",
  projectId: "the-coding-hero",
  storageBucket: "the-coding-hero.appspot.com",
  messagingSenderId: "1008426066252",
  appId: "1:1008426066252:web:0cbc2d1c6b9281f15cefe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;