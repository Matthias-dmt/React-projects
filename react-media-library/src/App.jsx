import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Home,
  AddAuthor,
  EditAuthor,
  Error,
  PrivateRoute,
  LoginPage,
} from "./pages/";
import { Navbar } from "./components/";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home></Home>
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <PrivateRoute exact path="/addAuthor">
          <Navbar />
          <AddAuthor></AddAuthor>
        </PrivateRoute>

        <PrivateRoute path="/editAuthor/:id">
          <Navbar />
          <EditAuthor></EditAuthor>
        </PrivateRoute>

        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
