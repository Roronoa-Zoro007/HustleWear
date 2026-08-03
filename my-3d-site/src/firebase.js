import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAwlK-50NUpSqwJ4i8jk7UFD4RjojjldPY",
  authDomain: "hustlewear.firebaseapp.com",
  projectId: "hustlewear",
  storageBucket: "hustlewear.firebasestorage.app",
  messagingSenderId: "602663914574",
  appId: "1:602663914574:web:cd040b10222a80f80c071f",
  measurementId: "G-SQG5Q0EX1Q"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);