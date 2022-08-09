// import firebase from"firebase/compat/app";
import firebase from"firebase/compat/app";
import"firebase/compat/auth"
import "firebase/compat/firestore"
// import"firebase/compat/auth"
// import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtrJCyuLC_fjbj2A4RmP-BvY-cnOdeQfM",
    authDomain: "fir-tut-ted-6cb6d.firebaseapp.com",
    projectId: "fir-tut-ted-6cb6d",
    storageBucket: "fir-tut-ted-6cb6d.appspot.com",
    messagingSenderId: "634713789570",
    appId: "1:634713789570:web:ffd334efdd56442183909b",
    measurementId: "G-E8QR5R8SD7"
  };
  firebase.initializeApp(firebaseConfig)

  export default firebase