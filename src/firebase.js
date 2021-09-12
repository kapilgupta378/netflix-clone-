import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBZkKkL9x9LfY0eaVvqWCweJ-8Y8l2a1uc",
  authDomain: "netflix-clone-new-79ffe.firebaseapp.com",
  projectId: "netflix-clone-new-79ffe",
  storageBucket: "netflix-clone-new-79ffe.appspot.com",
  messagingSenderId: "20331586007",
  appId: "1:20331586007:web:6dbbd986202ad5555deb92"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;