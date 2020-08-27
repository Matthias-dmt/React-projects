import { questions } from "../data";
import {
  START_QCM,
  HANDLE_CHANGE,
  LOGIN,
  LOGOUT,
  NEXT_QUESTION,
  RESET_GAME,
  INCR_SCORE,
} from "../constants/actions";

// initialisation des states : SOURCE DE VERITE
let stateInit = {
  questions,
  score: 0,
  pos: 0,
  startQcm: false,
  password: "",
  email: "",
  avatar: "",
  isLogged: false,
  errorLogin: "",
  react: "",
  symfony: "",
  jsx: "",
};

let qcmReducer = (state = stateInit, action = {}) => {
  const { payload } = action;
  const { password, email, pos, score } = state;

  //console.log(payload);
  switch (action.type) {
    case HANDLE_CHANGE:
      return { ...state, [payload.name]: payload.value };
      break;
    case LOGIN:
      if (password == "hello" && email == "test@test.com") {
        window.localStorage.setItem("token", true);

        return {
          ...state,
          isLogged: true,
          errorLogin: "",
        };
      } else {
        return {
          ...state,
          errorLogin: "password or email invalid",
          email: "",
          password: "",
          avatar: "",
        };
      }
      break;
    case LOGOUT:
      window.localStorage.clear();
      return { ...state, isLogged: false, email: "", password: "", avatar: "" };
      break;
    case START_QCM:
      return { ...state, startQcm: true };
      break;
    case NEXT_QUESTION:
      return { ...state, pos: pos + 1 };
      break;
    case INCR_SCORE:
      return { ...state, score: score + payload };
      break;
    case RESET_GAME:
      return {
        ...state,
        pos: 0,
        score: 0,
        react: "",
        jsx: "",
        symfony: "",
        startQcm: false,
      };
      break;

    default:
      return state;
  }

  return state;
};

export default qcmReducer;
