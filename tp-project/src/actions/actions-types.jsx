import {
  START_QCM,
  HANDLE_CHANGE,
  LOGIN,
  LOGOUT,
  NEXT_QUESTION,
  RESET_GAME,
  INCR_SCORE,
} from "../constants/actions";

export const startGame = () => {
  return {
    type: START_QCM,
  };
};

export const handleChange = (payload) => {
  return {
    type: HANDLE_CHANGE,
    payload,
  };
};

export const loginSubmit = () => {
  return {
    type: LOGIN,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const nextQuestion = () => {
  return {
    type: NEXT_QUESTION,
  };
};

export const resetGame = () => {
  return {
    type: RESET_GAME,
  };
};

export const incrScore = (payload) => {
  return {
    type: INCR_SCORE,
    payload,
  };
};
