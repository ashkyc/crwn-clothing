import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("Jb51dq1uLKrVBrwpGaBW")
  .collection("cartItems")
  .doc("EpJAsNXjkQdjoz64iTMn");
firestore.doc("users/Jb51dq1uLKrVBrwpGaBW/cartItems/EpJAsNXjkQdjoz64iTMn");
firestore.collection("users/Jb51dq1uLKrVBrwpGaBW/cartItems");
