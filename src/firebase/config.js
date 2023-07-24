import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtNUF3pEAzc_-ApRDbeU9qo7mx6v-I0gA",
  authDomain: "olxclone-fc686.firebaseapp.com",
  projectId: "olxclone-fc686",
  storageBucket: "olxclone-fc686.appspot.com",
  messagingSenderId: "996713241846",
  appId: "1:996713241846:web:957d64c515e17d0561e0d7",
  measurementId: "G-2VGJ8DL4BT"
};
 export default firebase.initializeApp(firebaseConfig)