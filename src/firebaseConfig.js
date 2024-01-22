// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDkuXx0p5YyYtqkg5hL9xx9BqvYDlJR24Y",
  authDomain: "fir-auth-112223.firebaseapp.com",
  projectId: "fir-auth-112223",
  storageBucket: "fir-auth-112223.appspot.com",
  messagingSenderId: "68208790168",
  appId: "1:68208790168:web:a78fc25a45e10eb1501eed",
  measurementId: "G-K99LN4SESF"
};

const app = firebase.initializeApp(firebaseConfig);
export default app