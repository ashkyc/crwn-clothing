import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAJhlu9it4OqvryDymQ5rkmlfkM0bmkFhU",
  authDomain: "crwn-db-2adda.firebaseapp.com",
  databaseURL: "https://crwn-db-2adda.firebaseio.com",
  projectId: "crwn-db-2adda",
  storageBucket: "crwn-db-2adda.appspot.com",
  messagingSenderId: "496511170129",
  appId: "1:496511170129:web:4af1cafb66ba869638ea70",
  measurementId: "G-EDEHH9X5JN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
