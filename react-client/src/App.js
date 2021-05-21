import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Components/pages/Home";
import Form from "./Components/Signup/Form";
import Login from "./Components/Signup/login";
import Chatspace from "./Components/ChatSpace/Chatspace";

import axios from "axios";
import About from "./Components/About/About";
import Support from "./Components/Support/Support";
import Head from "./Components/Learnspace/Head";

import Pedia from "./Components/Vjtipedia/Pedia";
import Society from "./Components/Societies/Society";
import Internship from "./Components/Internships/Internship";
import Singlepost from "./Components/Internships/Singlepost";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/users/currentUser").then((res) => {
      setUser(res.data.user);
    });
  }, []);

  function handleUser(val) {
    setUser(val);
  }

  return (
    <>
      <Router>
        <Navbar user={user} onChange={handleUser} />

        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>

          <Route exact path="/learnspace">
            {user ? <Head /> : <Redirect to="/Signup" />}
          </Route>

          <Route exact path="/Signup">
            {user ? (
              <Redirect to="/" />
            ) : (
              <Form user={user} onChange={handleUser} />
            )}
          </Route>

          <Route exact path="/login">
            {user ? (
              <Redirect to="/" />
            ) : (
              <Login user={user} onChange={handleUser} />
            )}
          </Route>

          <Route exact path="/aboutus">
            <About user={user} onChange={handleUser} />
          </Route>

          <Route exact path="/support">
            <Support user={user} onChange={handleUser} />
          </Route>

          <Route exact path="/vjtipedia">
            <Pedia />
          </Route>

          <Route exact path="/societies">
            <Society />
          </Route>
          <Route exact path="/internships">
            <Internship />
          </Route>
          <Route exact path="/singlepost/:id">
            <Singlepost />
          </Route>

          <Route exact path="/chatspace">
            <Chatspace />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
