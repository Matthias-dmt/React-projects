import React from "react";

import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children, ...rest }) => {
  const state = useSelector((state) => state);
  const { isLogged } = state;

  const isLog = window.localStorage.getItem("token");

  console.log(isLogged);
  return (
    <Route
      {...rest}
      render={(props) => (isLog ? children : <Redirect from="/" to="/login" />)}
    />
  );
};
