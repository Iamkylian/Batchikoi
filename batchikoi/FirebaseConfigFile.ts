// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0rn_bTUW0BsFtIMbqRJPuhheMIZtwnFE",
  authDomain: "rnbatchikoi.firebaseapp.com",
  projectId: "rnbatchikoi",
  storageBucket: "rnbatchikoi.appspot.com",
  messagingSenderId: "702886589042",
  appId: "1:702886589042:web:2c7b14e1fd133f03c308eb"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);