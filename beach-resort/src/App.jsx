import React from "react";
import "./App.css";

import Home from "./pages/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import SingleRoom from "./pages/SingleRoom.jsx";
import Error from "./pages/Error.jsx";
import Navbar from "./components/Navbar.jsx";

import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}

export default App;
