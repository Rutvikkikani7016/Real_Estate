// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reale-state-2b2b7.firebaseapp.com",
  projectId: "reale-state-2b2b7",
  storageBucket: "reale-state-2b2b7.appspot.com",
  messagingSenderId: "114033733068",
  appId: "1:114033733068:web:dcf875007eb764a935c169",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
