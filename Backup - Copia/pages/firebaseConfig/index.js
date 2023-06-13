import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {getFirestore, query, getDocs, collection, where, addDoc,} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOVtDBzxtrkyIFlOZ1dgTgXKEX4CQVH3Q",
  authDomain: "canetaazul-4514e.firebaseapp.com",
  projectId: "canetaazul-4514e",
  storageBucket: "canetaazul-4514e.appspot.com",
  messagingSenderId: "513734508531",
  appId: "1:513734508531:web:671803e0127fc906ee5c86",
  measurementId: "G-H6ZTR9LYZZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  logout,
  storage,
};