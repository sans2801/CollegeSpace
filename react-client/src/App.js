import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/pages/Home";
import Form from "./Components/Signup/Form";
import login from "./Components/Signup/login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/Signup" exact component={Form} />
          <Route exact path="/login" exact component={login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
