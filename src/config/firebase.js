// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE0i9LdMSaDoJDJkKk3FRvO16surtm_yE",
  authDomain: "vite-contact-d16b0.firebaseapp.com",
  projectId: "vite-contact-d16b0",
  storageBucket: "vite-contact-d16b0.appspot.com",
  messagingSenderId: "463738728169",
  appId: "1:463738728169:web:b52214a02ef3e963be0a78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
