// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBDkqv957wQseeIOj3Yx_4LgkwT5s1uqdE",
  authDomain: "todoapp-d5ef1.firebaseapp.com",
  projectId: "todoapp-d5ef1",
  storageBucket: "todoapp-d5ef1.appspot.com",
  messagingSenderId: "670735487105",
  appId: "1:670735487105:web:ff2cca23d43c873eacfd80",
  measurementId: "G-KSDMK1T183",
});

const db = firebaseApp.firestore();
export default db;
