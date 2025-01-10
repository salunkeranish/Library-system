import { ADD_BOOK, FETCH_BOOKS } from './actions';

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

export default bookReducer;
