// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyCQibbC59_RPoyaJJtluIJ-GaZGLoGwzTg",
  authDomain: "facebook-messenger-clone-a525b.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-a525b.firebaseio.com",
  projectId: "facebook-messenger-clone-a525b",
  storageBucket: "facebook-messenger-clone-a525b.appspot.com",
  messagingSenderId: "84179737057",
  appId: "1:84179737057:web:592c71905efd67f7b81aa0",
  measurementId: "G-KTPWE4M7X3"
};
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider };
  export default db;
