import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA3-WdYxu0sQ4Vyvgm-2zj8FVhueiy_M9c',
  authDomain: 'task1-12e9d.firebaseapp.com',
  databaseURL: 'https://task1-12e9d.firebaseio.com',
  projectId: 'task1-12e9d',
  storageBucket: 'task1-12e9d.appspot.com',
  messagingSenderId: '675340658609',
};
const fb = firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export default {
  auth: () => fb.auth().signInWithPopup(provider),
  signOut: () => fb.auth(),
  getTodo: () =>firebase.firestore().collection('ToDo').get(),
  todoCollection: () => firebase.firestore().collection('ToDo'),
};
