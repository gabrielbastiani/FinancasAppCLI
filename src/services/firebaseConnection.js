import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB17HQBEotqpfg3j2rd69bNMCf5YIkANHo",
  authDomain: "financasapp-cd7ee.firebaseapp.com",
  projectId: "financasapp-cd7ee",
  storageBucket: "financasapp-cd7ee.appspot.com",
  messagingSenderId: "197960182274",
  appId: "1:197960182274:web:1feb46bccee13f639c951b"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;