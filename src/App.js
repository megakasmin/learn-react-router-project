import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NestedUsers from "./components/NestedUsers";
import Users from "./components/Users";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup" exact={true}>
            <SignUp />
          </Route>
          <Route path="/about" exact={true}>
            <About />
          </Route>
          <Route path="/contact" exact={true}>
            <Contact />
          </Route>
          <Route path="/signin" exact={true}>
            <SignIn />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/users" exact={true}>
            <Users />
          </Route>
          <Route path="/users/:name" exact={true}>
            <NestedUsers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
