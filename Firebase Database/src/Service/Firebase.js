// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXHN2qTUVuU6FYbyMMISSJklGDgzh8Ebs",
  authDomain: "fir-e3c04.firebaseapp.com",
  projectId: "fir-e3c04",
  storageBucket: "fir-e3c04.appspot.com",
  messagingSenderId: "444500987031",
  appId: "1:444500987031:web:8b6c921941082d70196dd2",
  measurementId: "G-L8V1VZYWVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export const provider = new GoogleAuthProvider();