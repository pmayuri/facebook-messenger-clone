import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyCQibbC59_RPoyaJJtluIJ-GaZGLoGwzTg",
  authDomain: "facebook-messenger-clone-a525b.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-a525b.firebaseio.com",
  projectId: "facebook-messenger-clone-a525b",
  storageBucket: "facebook-messenger-clone-a525b.appspot.com",
  messagingSenderId: "84179737057",
  appId: "1:84179737057:web:592c71905efd67f7b81aa0",
  measurementId: "G-KTPWE4M7X3"

});

const db = firebaseApp.firestore();

export default db ;