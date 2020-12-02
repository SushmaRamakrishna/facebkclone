import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYgUrIauNgjzXHUFXedfZXJsjQlw_VV-o",
    authDomain: "facebk-ba9ab.firebaseapp.com",
    databaseURL: "https://facebk-ba9ab.firebaseio.com",
    projectId: "facebk-ba9ab",
    storageBucket: "facebk-ba9ab.appspot.com",
    messagingSenderId: "65977213427",
    appId: "1:65977213427:web:d41648915e6d53e52b3286",
    measurementId: "G-T1GDHGJLRQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;