import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk6bxyyjdBKPuIeMTj_pjnT6lQbSKNzUQ",
  authDomain: "text-me-39de7.firebaseapp.com",
  projectId: "text-me-39de7",
  storageBucket: "text-me-39de7.appspot.com",
  messagingSenderId: "854353912448",
  appId: "1:854353912448:web:0103b604d5df7f049a7c65"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;