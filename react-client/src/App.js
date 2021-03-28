import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/pages/Home";
import Form from "./Components/Signup/Form";
import Login from "./Components/Signup/login";

import axios from "axios";
import About from "./Components/About/About";
import Support from "./Components/Support/Support";

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
            {user ? (
              <Redirect to="/" />
            ) : (
              <About user={user} onChange={handleUser} />
            )}
          </Route>

          <Route exact path="/support">
            {user ? (
              <Redirect to="/" />
            ) : (
              <Support user={user} onChange={handleUser} />
            )}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
