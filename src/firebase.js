import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIZB9VDgrurUCTXw9WxVWPgZdFVwOuACM",
  authDomain: "clone-ed028.firebaseapp.com",
  databaseURL: "https://clone-ed028.firebaseio.com",
  projectId: "clone-ed028",
  storageBucket: "clone-ed028.appspot.com",
  messagingSenderId: "261740305112",
  appId: "1:261740305112:web:df937eda4bd1d00d9915ad",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//db
const db = firebaseApp.firestore();
//authentication
const auth = firebase.auth();

export { db, auth };
