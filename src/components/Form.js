import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookToAPI } from '../redux/books/booksAPI';

function Form() {
  const dispatch = useDispatch();
  const [bookTitle, setbookTitle] = useState('');
  const [bookAuthor, setbookAuthor] = useState('');
  const [bookCategory, setbookCategory] = useState('');
  return (
    <div id="add-div" className="f-col">
      <div className="add-book-line-div" />
      <h2>ADD NEW BOOK</h2>
      <form id="add-book-form">
        <input id="book-title" value={bookTitle} onInput={(e) => setbookTitle(e.target.value)} placeholder="Book Title" type="text" />
        <input id="book-author" value={bookAuthor} onInput={(e) => setbookAuthor(e.target.value)} placeholder="Book Author" type="text" />
        <select
          id="form-categ"
          onChange={(e) => {
            setbookCategory(e.target.value);
          }}
          required
        >
          <option value="">Category</option>
          <option value="Adventure">Adventure</option>
          <option value="Biography">Biography</option>
          <option value="Poetry">Poetry</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Mystery">Mystery</option>
          <option value="Thriller">Thriller</option>
          <option value="Horror">Horror</option>
          <option value="Historical">Historical</option>
          <option value="Romance">Romance</option>
          <option value="Western">Western</option>
          <option value="Science">Science</option>
          <option value="Economy">Economy</option>
          <option value="Graphic-Novel">Graphic Novel</option>
          <option value="Psychology">Psychology</option>
          <option value="Dystopia">Dystopia</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Self-help">Self-help</option>
        </select>
        <button
          className="add-book-btn"
          type="button"
          onClick={() => {
            dispatch(addBookToAPI({
              item_id: uuidv4(),
              title: bookTitle,
              author: bookAuthor,
              category: bookCategory,
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
