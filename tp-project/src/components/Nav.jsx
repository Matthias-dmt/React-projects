import React from "react";

import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startGame, logout } from "../actions/actions-types.jsx";

const Navbar = ({ ...rest }) => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state);
  const { match, location, history } = rest;

  const token =
    (location.state && location.state.isLogged) ||
    localStorage.getItem("token") === "true";

  console.log(rest);
  return (
    <div className="bg-dark">
      <nav className="d-flex w-75 ml-auto mr-auto mb-4 justify-content-between p-4 text-white">
        <>
          <Link to="/">Home</Link>
        </>
        <>
          {token ? (
            <Link to="/" onClick={() => dispatch(logout())}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </>
        <>
          <Link onClick={() => dispatch(startGame())} to="/qcm">
            QCM
          </Link>
        </>
      </nav>
    </div>
  );
};

const Nav = withRouter(Navbar);
export default Nav;
