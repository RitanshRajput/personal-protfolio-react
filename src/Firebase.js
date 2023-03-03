import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" ;

const firebaseConfig = {
  apiKey: "AIzaSyBr-k7DzUPL604mGmupK4DXtyOgZdfhBVY",
  authDomain: "react-1st-portfolio-webpage.firebaseapp.com",
  projectId: "react-1st-portfolio-webpage",
  storageBucket: "react-1st-portfolio-webpage.appspot.com",
  messagingSenderId: "23168819764",
  appId: "1:23168819764:web:87027427566506474ee061"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore() ;
