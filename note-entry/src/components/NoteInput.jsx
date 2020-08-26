import React, { useReducer, useContext } from "react";

import {
  NoteReducer,
  initialState,
  NoteContext,
} from "./reducer/NoteReducer.jsx";

export const NoteInput = ({
  value,
  handleSubmit,
  handleNoteValue,
  ...rest
}) => {
  const [state, dispatch] = useContext(NoteContext);

  return (
    <div className="container mt-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "handleSubmit" });
        }}
      >
        <label className="d-block mb-4" htmlFor="noteValue">
          <h6>note entry :</h6>
        </label>

        <input
          onChange={(e) => dispatch({ type: "handleChange", target: e.target })}
          className=" d-block mr-auto ml-auto w-75 mb-4"
          type="text"
          name="noteValue"
          id="noteValue"
          value={state.noteValue}
        />
        <div className="d-block mb-3 w-100">
          <label htmlFor="coef ml-3">
            <h6>Coefficient :</h6>
          </label>
          <select
            onChange={(e) =>
              dispatch({ type: "handleChange", target: e.target })
            }
            name="coef"
            id="coef"
            className="ml-3"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <button className="btn btn-success w-25 mb-4" type="submit">
          Enter
        </button>
      </form>
    </div>
  );
};
