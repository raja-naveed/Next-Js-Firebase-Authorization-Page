// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-g4-prUMhQdXFl1SU1YyC-KjNg8BPr2c",
  authDomain: "authenticate-cb800.firebaseapp.com",
  projectId: "authenticate-cb800",
  storageBucket: "authenticate-cb800.appspot.com",
  messagingSenderId: "254112340149",
  appId: "1:254112340149:web:9bfa312ba84b58cfbf86fc"
};


// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;