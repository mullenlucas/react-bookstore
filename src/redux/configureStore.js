import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerBookstore from './books/books';
import { reducerBookCategories } from './categories/categories';

const srcReducer = combineReducers({
  books: reducerBookstore,
  categories: reducerBookCategories,
});

const bookstore = configureStore({
  reducer: srcReducer,
});

export default bookstore;
