// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6NShIoPV2oDq5KI8QgWaPigzMBsaP0KY",
  authDomain: "house-marketplace-fafd5.firebaseapp.com",
  projectId: "house-marketplace-fafd5",
  storageBucket: "house-marketplace-fafd5.appspot.com",
  messagingSenderId: "994782776473",
  appId: "1:994782776473:web:916f9bda7150fb6e09fc08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()