import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBi7VqZ0y2WIKxC6viP-TnyST2v4KE5DdY",
  authDomain: "whatsapp-2-next-75527.firebaseapp.com",
  projectId: "whatsapp-2-next-75527",
  storageBucket: "whatsapp-2-next-75527.appspot.com",
  messagingSenderId: "868324868037",
  appId: "1:868324868037:web:a287cad4136a75bb8ed5ac",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
