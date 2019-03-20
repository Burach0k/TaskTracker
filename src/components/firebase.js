import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA2I6VsrmBhnkuTJA_pOv4GkcONPW65AHU",
  authDomain: "fir-10997.firebaseapp.com",
  databaseURL: "https://fir-10997.firebaseio.com",
  projectId: "fir-10997",
  storageBucket: "fir-10997.appspot.com",
  messagingSenderId: "203140966853"
};
const fb = firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export default {
  auth: () =>  fb.auth().signInWithPopup(provider),
  getNew: () => firebase.firestore().collection("news").get(),
  addNew: () => firebase.firestore().collection("news"),
};