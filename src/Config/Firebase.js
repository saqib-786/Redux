// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_obJFBtPwEsPxjbJlp1EjT48Lih9LTpA",
  authDomain: "my-chat-app-16c6e.firebaseapp.com",
  databaseURL: "https://my-chat-app-16c6e.firebaseio.com",
  projectId: "my-chat-app-16c6e",
  storageBucket: "my-chat-app-16c6e.appspot.com",
  messagingSenderId: "431935894407",
  appId: "1:431935894407:web:001f119ede197de3ad5922",
  measurementId: "G-1BDT1GYNW2"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const database = getDatabase(firebase)

export {firebase,database}
