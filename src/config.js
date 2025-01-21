// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXITlqfXfKvenfwTN7MEV6jXa4B2b7LvU",
  authDomain: "f1-approve.firebaseapp.com",
  projectId: "f1-approve",
  storageBucket: "f1-approve.firebasestorage.app",
  messagingSenderId: "337262720812",
  appId: "1:337262720812:web:b71b05465b9c429d685e89",
  measurementId: "G-EWKWKETEYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};