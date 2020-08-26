import React, { useReducer, useEffect, useContext } from "react";

import {
  NoteReducer,
  initialState,
  NoteContext,
} from "./reducer/NoteReducer.jsx";

export const NotesList = () => {
  const [state, dispatch] = useContext(NoteContext);
  //console.log(state);

  return (
    <div>
      <h5 className="text-capitalize">Note list</h5>
      <ul>
        {state.notes.map((note, i) => (
          <li key={i}>
            {" "}
            notes : {note.value} , coef : {note.coef}
          </li>
        ))}
      </ul>
      {state.notes.length > 0 && (
        <button
          onClick={() => dispatch({ type: "delete" })}
          className="btn btn-danger m-3"
        >
          Delete all
        </button>
      )}
    </div>
  );
};
