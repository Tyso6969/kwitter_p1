
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKltlKJWe9BUZHDLcXoHf-Ic-VG2Q58nQ",
  authDomain: "kwitter-1ddcd.firebaseapp.com",
  projectId: "kwitter-1ddcd",
  storageBucket: "kwitter-1ddcd.appspot.com",
  messagingSenderId: "557493230921",
  appId: "1:557493230921:web:a8eff5f3c551de3d7f8e98",
  measurementId: "G-0X42070D7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
