// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWJ1xpirbYR_OB7HlwWMdZIgeaUn_kSgE",
  authDomain: "streetmusicapp-1d17f.firebaseapp.com",
  databaseURL: "https://streetmusicapp-1d17f-default-rtdb.firebaseio.com",
  projectId: "streetmusicapp-1d17f",
  storageBucket: "streetmusicapp-1d17f.appspot.com",
  messagingSenderId: "107794960278",
  appId: "1:107794960278:web:a4eb69af5c7ff9206157b7",
  measurementId: "G-H1YGNYLJ35"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);