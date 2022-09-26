// Actions for books
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

// Reducer section
const reducerbookstore = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// Action creators section
export const addBook = (book) => ({
  type: ADD_BOOK, book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK, book,
});

export default reducerbookstore;
