import React from "react";

import logo from "../../logo.png";
import "./Navbar.scss";

function NavLink({ content }) {
  return (
    <li>
      <a href="/" className="nav-link">
        {content}
      </a>
    </li>
  );
}

export default NavLink;
