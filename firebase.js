import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZjPECpIx4QB3vuDZ1epcICoDOu5N8WEg",
  authDomain: "instragram-clone-f7fa9.firebaseapp.com",
  projectId: "instragram-clone-f7fa9",
  storageBucket: "instragram-clone-f7fa9.appspot.com",
  messagingSenderId: "1033630924556",
  appId: "1:1033630924556:web:084fcb9af29b284d96d329",
  measurementId: "G-M3Z770EZH0"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth();
