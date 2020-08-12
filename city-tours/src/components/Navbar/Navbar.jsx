import React from "react";

import logo from "../../logo.png";
import "./Navbar.scss";

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo" />
      <ul className="nav-links">{children}</ul>
    </nav>
  );
}

export default Navbar;
