import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAI3zxgTnQ9GICqfRTdHW152yOJUgdTeUo",
  authDomain: "college-space-5255c.firebaseapp.com",
  databaseURL: "https://college-space-5255c-default-rtdb.firebaseio.com",
  projectId: "college-space-5255c",
  storageBucket: "college-space-5255c.appspot.com",
  messagingSenderId: "909928667339",
  appId: "1:909928667339:web:1feea0d3b08c6ce516e34e",
});

var db = firebaseApp.firestore();

export { db };
