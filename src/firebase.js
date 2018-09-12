import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "react-soccer",
  storageBucket: "",
  messagingSenderId: "731022089885"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
};