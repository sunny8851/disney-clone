import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAInTC_oGoKHLG8wPeVG4qtyqz0tpA1Fcw",
  authDomain: "disney-f492f.firebaseapp.com",
  projectId: "disney-f492f",
  storageBucket: "disney-f492f.appspot.com",
  messagingSenderId: "913014536581",
  appId: "1:913014536581:web:0067f755361b2f97f32cec",
  measurementId: "G-MCRP3VXHJ3",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
