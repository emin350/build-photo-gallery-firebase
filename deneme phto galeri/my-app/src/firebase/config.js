import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAOIi5krS_xaEMmgqQq8LfH9BU9Juy2aeM",
    authDomain: "deneme-954a2.firebaseapp.com",
    projectId: "deneme-954a2",
    storageBucket: "deneme-954a2.appspot.com",
    messagingSenderId: "540650556389",
    appId: "1:540650556389:web:9db5fe4bb2bc85069f3d0c",
    measurementId: "G-D2C618B61J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export{projectStorage,projectFirestore,timestamp};