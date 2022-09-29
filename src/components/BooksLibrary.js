import { useSelector } from 'react-redux';
import Book from './BooksGen';
import Form from './Form';

function BooksLibrary() {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div id="books-list">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <Form />
    </>
  );
}

export default BooksLibrary;
