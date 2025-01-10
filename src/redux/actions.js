export const ADD_BOOK = 'ADD_BOOK';
export const FETCH_BOOKS = 'FETCH_BOOKS';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const fetchBooks = (books) => ({
  type: FETCH_BOOKS,
  payload: books,
});
