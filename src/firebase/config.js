import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDqqF9LTGRJekZi99L7VHbqDo7eMUekrZM",
    authDomain: "vue-content-post.firebaseapp.com",
    projectId: "vue-content-post",
    storageBucket: "vue-content-post.appspot.com",
    messagingSenderId: "145454486093",
    appId: "1:145454486093:web:83f6dd8ab7bec9e2194204"
  };
  //init firebase
  firebase.initializeApp(firebaseConfig)

  //database setup
  let db=firebase.firestore();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp
  export {db,timestamp};