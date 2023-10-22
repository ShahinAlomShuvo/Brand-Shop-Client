// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmKbx8L94gVuk7BoHeye8M7mNBUiSG7J0",
  authDomain: "shopnthread.firebaseapp.com",
  projectId: "shopnthread",
  storageBucket: "shopnthread.appspot.com",
  messagingSenderId: "1011117635907",
  appId: "1:1011117635907:web:dac4815f18708b98df97f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
