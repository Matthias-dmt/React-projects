import axios from "axios";

import {
  FETCH_DATA,
  REACT_APP_API_URL,
  SET_ERROR,
  SHOW_DETAILS,
  DELETE_AUTHOR,
  ADD_AUTHOR,
  EDIT_AUTHOR,
} from "../constants/actions";

export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload,
  };
};

export const fetchData = (payload) => {
  return {
    type: FETCH_DATA,
    payload,
  };
};

export const firstFetchData = () => {
  return (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
    };

    const response = axios(`${REACT_APP_API_URL}/authors`, headers)
      .then((results) => {
        if (results.statusText === "OK") dispatch(fetchData(results.data));
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const showDetails = (payload) => {
  return {
    type: SHOW_DETAILS,
    payload,
  };
};

export const removeAuthor = (payload) => {
  return {
    type: DELETE_AUTHOR,
    payload,
  };
};

export const deleteAuthor = (id) => {
  return (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
    };

    const response = axios
      .delete(`${REACT_APP_API_URL}/author/${id}`, headers)
      .then((results) => {
        console.log(results);
        if (results.statusText === "OK") dispatch(removeAuthor(id));
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const addAuthor = (payload) => {
  return {
    type: ADD_AUTHOR,
    payload,
  };
};

export const addAuthorOnServer = (author) => {
  console.log(author);
  return (dispatch) => {
    const response = axios
      .post(`${REACT_APP_API_URL}/add`, author)
      .then((results) => {
        if (results.statusText === "OK") dispatch(addAuthor(author));
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const editAuthor = (payload) => {
  return {
    type: EDIT_AUTHOR,
    payload,
  };
};

export const editAuthorOnServer = (author, id) => {
  return (dispatch) => {
    const response = axios
      .put(`${REACT_APP_API_URL}/author/${id}`, author)
      .then((results) => {
        if (results.statusText === "OK") dispatch(editAuthor(author, id));
      })
      .catch((err) => dispatch(setError(err)));
  };
};
