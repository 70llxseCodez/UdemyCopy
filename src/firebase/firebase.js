import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDOedFmYe2QUJbqCINU-iQv8jw2FZ5b7Fk",
  authDomain: "udemy-copt.firebaseapp.com",
  projectId: "udemy-copt",
  storageBucket: "udemy-copt.appspot.com",
  messagingSenderId: "278934747563",
  appId: "1:278934747563:web:549df54a07973300bcbaee",
  measurementId: "G-KLV6BBKX7K"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
