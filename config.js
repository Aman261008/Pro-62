import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAH47fa5GOZTAFoPUiWos0no8pdPT3JavE",
  authDomain: "pro-c60-d858a.firebaseapp.com",
  databaseURL: "https://pro-c60-d858a-default-rtdb.firebaseio.com",
  projectId: "pro-c60-d858a",
  storageBucket: "pro-c60-d858a.appspot.com",
  messagingSenderId: "51994773759",
  appId: "1:51994773759:web:d61e2337d7d2e5c86864ca"
};
firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  