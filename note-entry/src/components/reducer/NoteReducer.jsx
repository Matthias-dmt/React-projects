import React, { useReducer } from "react";

export const NoteContext = React.createContext({});

export const initialState = { notes: [], noteValue: "", coef: "", average: "" };

export const NoteReducer = (state, action) => {
  //console.log(action.target);
  switch (action.type) {
    case "handleChange":
      console.log(state.coef, state.noteValue);
      return { ...state, [action.target.name]: action.target.value };
    case "handleSubmit":
      const newNotes = [
        { value: state.noteValue, coef: state.coef },
        ...state.notes,
      ];
      //console.log(newNotes);
      return { ...state, noteValue: "", notes: newNotes };
    case "average":
      return { ...state, average: action.newAverage };
    case "delete":
      return { ...state, notes: [] };
    default:
      return state;
  }
};

export const NoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NoteReducer, initialState);
  console.log(state);
  // composition
  return (
    <NoteContext.Provider value={[state, dispatch]}>
      {children}
    </NoteContext.Provider>
  );
};
