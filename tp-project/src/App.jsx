import React from "react";

import { Home } from "./pages/Home.jsx";
import { Qcm } from "./pages/Qcm.jsx";
import { Score } from "./pages/Score.jsx";
import { Error } from "./pages/Error.jsx";
import { Login } from "./pages/Login.jsx";

import { PrivateRoute } from "./components/PrivateRoute.jsx";
import Nav from "./components/Nav.jsx";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App ">
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/qcm">
              <Qcm />
            </PrivateRoute>
            <Route path="/score">
              <Score />
            </Route>
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
