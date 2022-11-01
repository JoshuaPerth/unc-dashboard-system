import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAn5GGJiQ-pr047V9UbYdu5k2Gl5jyBB2I",

    authDomain: "unc-dashboard-system.firebaseapp.com",
  
    projectId: "unc-dashboard-system",
  
    storageBucket: "unc-dashboard-system.appspot.com",
  
    messagingSenderId: "482390854997",
  
    appId: "1:482390854997:web:88ca5e1b30264d9ffdf3dc",
  
    measurementId: "G-LJ6XF2ZZ4L"
  
  };


  if(!firebase.apps.lenght){
    firebase.initializeApp(config);
  }

  const firestore = firebase.firestore();

  export {firestore};

