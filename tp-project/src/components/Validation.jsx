import React from "react";

import { nextQuestion } from "../actions/actions-types.jsx";

import { useDispatch } from "react-redux";

export const Validation = () => {
  const dispatch = useDispatch(useDispatch);
  return (
    <>
      <button
        onClick={() => dispatch(nextQuestion())}
        className="btn btn-primary w-50"
      >
        Enter
      </button>
    </>
  );
};
