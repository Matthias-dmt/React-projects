import { ADD_DRAGON } from "../constants/actions";
import { REMOVE_DRAGON } from "../constants/actions";
import { REVERSE_LIST } from "../constants/actions";
import { HANDLE_CHANGE } from "../constants/actions";

export const addDragon = (payload) => {
  return {
    type: ADD_DRAGON,
    payload,
  };
};

export const removeDragon = (payload) => {
  return {
    type: REMOVE_DRAGON,
    payload,
  };
};

export const reverseList = (payload) => {
  return {
    type: REVERSE_LIST,
    payload,
  };
};

export const handleChange = (payload) => {
  return {
    type: HANDLE_CHANGE,
    payload,
  };
};
