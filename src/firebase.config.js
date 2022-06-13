import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSFXx5FYUPiEYf7CcVWWWzkI-2uUHVScQ",
    authDomain: "house-marketplace-app-debce.firebaseapp.com",
    projectId: "house-marketplace-app-debce",
    storageBucket: "house-marketplace-app-debce.appspot.com",
    messagingSenderId: "263128363382",
    appId: "1:263128363382:web:d95f457c57c5c682f88a57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()