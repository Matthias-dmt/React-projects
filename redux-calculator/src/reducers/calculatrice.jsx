// source de vérité
const initialState = {
  // TODO
  firstParam: "",
  secondParam: "",
  result: 0,
};

// Votre reducer calculatrice
export const reducer = (state = initialState, action = {}) => {
  // le switch travail avec le dispatch
  const first = parseFloat(state.firstParam);
  const second = parseFloat(state.secondParam);

  switch (action.type) {
    case "handleChange":
      //console.log(action.target.value);
      return { ...state, [action.target.name]: action.target.value };
      break;
    case "ADDITION":
      //console.log(first, second);

      return {
        ...state,
        result: first + second,
        firstParam: "",
        secondParam: "",
      };
      break;
    case "MULTIPLICATION":
      return {
        ...state,
        result: first * second,
        firstParam: "",
        secondParam: "",
      };
      break;
    case "RESET":
      return { ...state, firstParam: "", secondParam: "", result: "" };

    default:
      return state;
  }
};
