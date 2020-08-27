import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange, loginSubmit } from "../actions/actions-types.jsx";

import { Redirect } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const { errorLogin, isLogged, email, avatar, password } = useSelector(
    (state) => state
  );
  if (isLogged) return <Redirect from="/login" to="/" />;

  //console.log(isLogged);
  return (
    <div>
      {errorLogin != "" && (
        <div
          className="alert alert-danger mt-4 ml-auto mr-auto rounded "
          role="alert"
        >
          {errorLogin}
        </div>
      )}
      <form
        className="text-left mt-4"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(loginSubmit());
        }}
      >
        <div class="form-group">
          <label htmlFor="email" className="d-block">
            Enter your email :{" "}
          </label>
          <input
            className="d-block w-100 form-control"
            onChange={(e) => dispatch(handleChange(e.target))}
            type="email"
            name="email"
            id="email"
            value={email}
          />
        </div>
        <div class="form-group">
          <label htmlFor="password" className="d-block">
            Enter your password :{" "}
          </label>
          <input
            className="d-block w-100 form-control"
            onChange={(e) => dispatch(handleChange(e.target))}
            type="password"
            name="password"
            id="password"
            value={password}
          />
        </div>
        <div class="form-group">
          <label htmlFor="avatar" className="d-block">
            Enter your avatar (*):{" "}
          </label>
          <input
            className="d-block w-100 form-control"
            onChange={(e) => dispatch(handleChange(e.target))}
            type="text"
            name="avatar"
            value={avatar}
            id="avatar"
          />
        </div>
        <small className="text-center d-block mb-2">
          * this fields are not mandatory
        </small>
        <button className="btn btn-primary w-25">Enter</button>
      </form>
    </div>
  );
};
