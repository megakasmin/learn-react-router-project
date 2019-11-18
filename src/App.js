import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, Contact, NestedUsers, Users, SignUp } from "./components";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/about" exact={true}>
            <About />
          </Route>
          <Route path="/contact" exact={true}>
            <Contact />
          </Route>
          <Route path="/signup" exact={true}>
            <SignUp />
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
