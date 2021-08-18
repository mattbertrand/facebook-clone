import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDEaZW02x9pqO1mfqi-n0pBppxWiffCfTo",
    authDomain: "facebook-clone-f8893.firebaseapp.com",
    projectId: "facebook-clone-f8893",
    storageBucket: "facebook-clone-f8893.appspot.com",
    messagingSenderId: "903690362358",
    appId: "1:903690362358:web:146cf4fdc0fe526bf37bd7",
    measurementId: "G-80DNQRH0WJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;