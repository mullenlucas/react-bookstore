// Actions for books
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: 1,
    title: 'Tyrant',
    genres: 'History',
    progress: 94,
    author: 'Valerio Massimo Manfredi',
    chapter: 24,
  },
  {
    id: 2,
    title: 'Harry Potter and the Prisoner of Azkaban',
    genres: 'Fantasy',
    progress: 34,
    author: 'J.K. Rowling',
    chapter: 9,
  },
  {
    id: 3,
    title: 'The Dreaming City',
    genres: 'Fantasy',
    progress: 16,
    author: 'Michael Moorcock',
    chapter: 3,
  },
];

// Reducer section
const reducerBookstore = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat(action.book);
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

export default reducerBookstore;
