import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMkxE6R4g23kREP4bnmH0rZLd47o4dCZw",
  authDomain: "linkedin-clonee-b97f8.firebaseapp.com",
  projectId: "linkedin-clonee-b97f8",
  storageBucket: "linkedin-clonee-b97f8.appspot.com",
  messagingSenderId: "537049342071",
  appId: "1:537049342071:web:cd725161647f5ee3bbe672"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
