import React, { useState } from "react";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import TourList from "./components/TourList/TourList.jsx";
import NavLink from "./components/Navbar/NavLink";

function App() {
  return (
    <div>
      <header>
        <Navbar>
          <NavLink content="Home" />
          <NavLink content="About" />
          <NavLink content="Contact" />
        </Navbar>
      </header>
      <main className="App">
        <TourList />
      </main>
    </div>
  );
}

export default App;
