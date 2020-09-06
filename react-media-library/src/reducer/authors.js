import {
  FETCH_DATA,
  SET_ERROR,
  SHOW_DETAILS,
  DELETE_AUTHOR,
  ADD_AUTHOR,
  EDIT_AUTHOR,
} from "../constants/actions";

let InitialState = {
  authors: [],
  authorDetails: {},
  isLoading: false,
  errorMsg: "",
};

let authorsReducer = (state = InitialState, action = {}) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, authors: action.payload };

    case SET_ERROR:
      return { ...state, errorMsg: action.payload };

    case SHOW_DETAILS:
      const author = state.authors.find(
        (author) => author.id === action.payload
      );
      return { ...state, authorDetails: author };

    case ADD_AUTHOR:
      const authors = [...state.authors, action.payload];
      return { ...state, authors };

    case EDIT_AUTHOR:
      const { id } = action.payload;

      // remove the edited author
      const removedEditedAuthor = state.authors.filter(
        (auhtor) => author.id != id
      );

      // and now we can again with updating data
      const editedAuthors = [...removedEditedAuthor, action.payload];

      return { ...state, authors: editedAuthors };

    case DELETE_AUTHOR:
      const filteredAuthors = state.authors.filter(
        (author) => author.id !== action.payload
      );
      console.log(filteredAuthors);
      return { ...state, authors: filteredAuthors };

    default:
      return state;
  }
};

export default authorsReducer;
