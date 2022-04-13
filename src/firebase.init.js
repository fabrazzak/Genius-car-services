// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzdJe3tyfTpscB_QfWkq9kyQJQxP2qJ-s",
  authDomain: "genius-car-service-4dcdb.firebaseapp.com",
  projectId: "genius-car-service-4dcdb",
  storageBucket: "genius-car-service-4dcdb.appspot.com",
  messagingSenderId: "538999884037",
  appId: "1:538999884037:web:b2fe365a589fcd23870f6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;