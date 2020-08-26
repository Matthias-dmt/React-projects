import React, { useContext, useEffect } from "react";
import { NoteContext } from "./reducer/NoteReducer.jsx";

export const Average = ({ notes, ...rest }) => {
  const [state, dispatch] = useContext(NoteContext);

  useEffect(() => {
    let newAverage = 0;
    let nbNotes = 0;
    if (state.notes.length > 0) {
      //console.log(notes);
      state.notes.map((note) => {
        console.log(newAverage);
        newAverage = newAverage + parseFloat(note.value) * note.coef;
        nbNotes = nbNotes + parseFloat(note.coef);

        return newAverage;
      });
      newAverage = newAverage / nbNotes;
      console.log(newAverage);
    }
    dispatch({ type: "average", newAverage: newAverage });
  }, [state.notes]);

  return (
    <div>
      {notes.length > 1 && (
        <div>
          <h6>Your average is :</h6>
          <p>{Math.round(state.average * 100) / 100}</p>
        </div>
      )}
    </div>
  );
};
