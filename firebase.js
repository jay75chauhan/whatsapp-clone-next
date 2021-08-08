import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3__K8hRKEIKt95zvfXzV8o-g8COwgl8I",
  authDomain: "whatsapp-clone-nextjs-bbd67.firebaseapp.com",
  projectId: "whatsapp-clone-nextjs-bbd67",
  storageBucket: "whatsapp-clone-nextjs-bbd67.appspot.com",
  messagingSenderId: "471089374674",
  appId: "1:471089374674:web:e89f11759e1fd732a1140b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
