import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const dispatch = useDispatch();
  const [bookTitle, setbookTitle] = useState('');
  const [bookAuthor, setbookAuthor] = useState('');
  return (
    <div id="add-div">
      <h2>Add a New Book!</h2>
      <form id="add-book-form">
        <input id="book-title" value={bookTitle} onInput={(e) => setbookTitle(e.target.value)} placeholder="Book Title" type="text" />
        <input id="book-author" value={bookAuthor} onInput={(e) => setbookAuthor(e.target.value)} placeholder="Book Author" type="text" />
        <button
          type="button"
          onClick={() => {
            dispatch(addBook({
              title: bookTitle,
              author: bookAuthor,
              id: uuidv4(),
            }));
            setbookAuthor('');
            setbookTitle('');
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Form;
