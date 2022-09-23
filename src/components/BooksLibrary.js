import React, { useState } from 'react';
import Book from './BooksGen';
import Form from './Form';

const books = [
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
    title: 'Capital in the Twenty-First Century',
    genres: 'Economy',
    progress: 18,
    author: 'Suzanne Collins',
    chapter: 8,
  },
];

function BooksLibrary() {
  const [lib] = useState(books);
  return (
    <>
      <div id="books-list">
        {lib.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <Form />
    </>
  );
}

export default BooksLibrary;
