import React, { useReducer, useContext } from "react";

import { NoteInput } from "./components/NoteInput.jsx";
import { NotesList } from "./components/NotesList.jsx";
import { Average } from "./components/Average.jsx";

import {
  NoteReducer,
  initialState,
  NoteContext,
} from "./components/reducer/NoteReducer.jsx";

import "./App.css";

function App() {
  const [state, dispatch] = useContext(NoteContext);

  //console.log(state.notes);
  return (
    <div className="container-fluid text-center mt-5">
      <h1 className="text-capitalize mb-5 w100 d-block">
        <span className="text-danger">Calculate</span> your average
      </h1>
      <div className="mt-5 d-flex justify-content-between">
        <div className="w-25">
          <NotesList />
        </div>
        <div className="w-75 mt-5">
          {state.notes.length < 11 ? (
            <NoteInput />
          ) : (
            <h4 className="mt-5">The number of notes is limited to 10</h4>
          )}

          <Average notes={state.notes} />
        </div>
      </div>
    </div>
  );
}

export default App;
