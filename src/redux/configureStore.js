import { configureStore } from '@reduxjs/toolkit';
import reducerBookstore from './books/books';
import reducerBookCategories from './categories/categories';

const bookstore = configureStore({
  books: reducerBookstore,
  categories: reducerBookCategories,
});

export default bookstore;
