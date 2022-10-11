// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKyQL2j1SpFMD5_ncVCSBQvuio66Fkl_4",
    authDomain: "instagram-9e243.firebaseapp.com",
    projectId: "instagram-9e243",
    storageBucket: "instagram-9e243.appspot.com",
    messagingSenderId: "818725046702",
    appId: "1:818725046702:web:2d131cf53482064941203f",
    measurementId: "G-TTX1G3HN62"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};