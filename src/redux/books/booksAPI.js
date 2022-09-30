import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const fetchBooks = createAsyncThunk(
  GET_BOOKS,
  async () => {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zwVIeRwTnQ0QK9JXqAm2/books');
    const data = await response.json();
    return data;
  },
);

const addBookToAPI = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zwVIeRwTnQ0QK9JXqAm2/books', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  },
);

const removeBookToAPI = createAsyncThunk(
  REMOVE_BOOK,
  async (bookid) => {
    await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zwVIeRwTnQ0QK9JXqAm2/books/${bookid}`, {
      method: 'DELETE',
    });
  },
);

export {
  GET_BOOKS, ADD_BOOK, REMOVE_BOOK, fetchBooks, addBookToAPI, removeBookToAPI,
};
