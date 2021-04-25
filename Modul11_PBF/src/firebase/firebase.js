import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseconfig = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyBVRuRDRfaA8DfNSm-UbYhBSsK4Gef-UEU",
    authDomain: "loginfirebase-modul11.firebaseapp.com",
    projectId: "loginfirebase-modul11",
    storageBucket: "loginfirebase-modul11.appspot.com",
    messagingSenderId: "701950067833",
    appId: "1:701950067833:web:61915e09c46568b31ec0a8",
    measurementId: "G-MDCLX5NBNW"
    
};
  

export const myFirebase = firebase.initializeApp(firebaseconfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;