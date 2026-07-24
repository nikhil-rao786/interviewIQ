
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"



// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "interviewiq-aa197.firebaseapp.com",
  projectId: "interviewiq-aa197",
  storageBucket: "interviewiq-aa197.firebasestorage.app",
  messagingSenderId: "969793340182",
  appId: "1:969793340182:web:0731246acdabdb8a9f0637"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}