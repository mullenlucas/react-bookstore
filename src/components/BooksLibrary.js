import { useSelector } from 'react-redux';
import Book from './BooksGen';
import Form from './Form';

function BooksLibrary() {
  const lib = useSelector((state) => state.books);
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
