import {
  ADD_DRAGON,
  REMOVE_DRAGON,
  REVERSE_LIST,
  HANDLE_CHANGE,
} from "../constants/actions";

// initialisation des states : SOURCE DE VERITE
let stateInit = {
  dragons: ["Apalala", "Balaur", "Bolla"],
  value: "",
  error: "",
};

let reducerDragon = (state = stateInit, action = {}) => {
  console.log(action);
  switch (action.type) {
    case HANDLE_CHANGE:
      // TODO
      return { ...state, value: action.payload };
      break;

    case ADD_DRAGON:
      // TODO
      if (state.dragons.indexOf(state.value) == -1 && state.value != "") {
        const newDragons = [state.value, ...state.dragons];
        return { ...state, dragons: newDragons, value: "" };
      } else if (state.value == "") {
        return { ...state, error: "there is no name !" };
      } else {
        return { ...state, error: "this dragon is in the list !" };
      }
      break;
    case REMOVE_DRAGON:
      // TODO

      const filterDragons = state.dragons.filter(
        (dragon) => dragon != action.payload
      );
      return { ...state, dragons: filterDragons };
      break;
    case REVERSE_LIST:
      // TODO
      const reversedList = state.dragons.reverse();
      return { ...state, dragons: reversedList };
      break;

    default:
      return state;
  }

  return state;
};

export default reducerDragon;
