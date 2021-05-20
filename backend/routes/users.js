var express = require("express");
var router = express.Router();
var firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyAI3zxgTnQ9GICqfRTdHW152yOJUgdTeUo",
  authDomain: "college-space-5255c.firebaseapp.com",
  databaseURL: "https://college-space-5255c-default-rtdb.firebaseio.com",
  projectId: "college-space-5255c",
  storageBucket: "college-space-5255c.appspot.com",
  messagingSenderId: "909928667339",
  appId: "1:909928667339:web:1feea0d3b08c6ce516e34e",
  measurementId: "G-9K0QB0FYXC",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/currentUser", function (req, res, next) {
  const user = firebase.auth().currentUser;
  res.json({ user: user });
});

router.post("/express-signup", function (req, res, next) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  var splitEmail = email.split("@");
  if (splitEmail.length === 1 || splitEmail[1].substring(3) !== "vjti.ac.in") {
    setError("Please enter a valid VJTI email ID");
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const user = firebase.auth().currentUser;

      user
        .updateProfile({
          displayName: username,
          photoURL:
            "https://techpowerusa.com/wp-content/uploads/2017/06/default-user.png",
        })
        .then(() => {
          db.collection("users")
            .doc(user.uid)
            .set({
              displayName: user.displayName,
              photoURL: user.photoURL,
              email: user.email,
              branch: splitEmail[1].substring(0, 2),
            });

          user.sendEmailVerification().then(() => {
            firebase
              .auth()
              .signOut()
              .then(() =>
                res.json({ message: "Verification link sent to the email" })
              )
              .catch((err) => {
                res.json({ message: err.message });
              });
          });
        });
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.post("/express-login", (req, res, next) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(() => {
      const user = firebase.auth().currentUser;
      if (!user.emailVerified) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            res.json({ error: "Email not verified!" });
          });
      } else res.json({ user: user });
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.post("/express-logout", (req, res, next) => {
  if (firebase.auth().currentUser == null) {
    res.json({ error: "No user signed in" });
    return;
  }

  firebase
    .auth()
    .signOut()
    .then((data) => {
      res.json({ logout: data });
    });
});

router.get("/getbooks", (req, res, next) => {
  const user = firebase.auth().currentUser;
  if (user === null) res.json({ error: "User not found" });

  db.collection("Textbooks")
    .get()
    .then((querySnapshot) => {
      const material = [];
      querySnapshot.forEach((doc) => {
        material.push(doc.data());
      });
      res.send(material);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
});

router.post("/feedback", (req, res, next) => {
  if (firebase.auth().currentUser == null)
    res.json({ error: "User not found" });
  else {
    const user = firebase.auth().currentUser;
    const form = req.body;
    console.log(form);
    db.collection("feedback")
      .doc(user.email)
      .get()
      .then((data) => {
        res.send(data.data());
      })
      .catch((err) => {
        res.json({ error: err.message });
      });
  }
});

module.exports = router;
