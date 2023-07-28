import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAChZGqT4rxRpo5d_lFSmHom5sAl7fR8Rw",
  authDomain: "newsletter-emails-562b8.firebaseapp.com",
  projectId: "newsletter-emails-562b8",
  storageBucket: "newsletter-emails-562b8.appspot.com",
  messagingSenderId: "996397285806",
  appId: "1:996397285806:web:63787b8b686dbcf83c083f",
  measurementId: "G-16ZQDTEZMT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)