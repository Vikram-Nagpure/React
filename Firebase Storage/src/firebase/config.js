// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKy3Un136oPnJ08AX5mqF94CZLL4CHI-U",
  authDomain: "getstore-ca451.firebaseapp.com",
  projectId: "getstore-ca451",
  storageBucket: "getstore-ca451.appspot.com",
  messagingSenderId: "875521572758",
  appId: "1:875521572758:web:15e51cd7eaee07826327b7",
  measurementId: "G-5HJZ9Y0LP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);