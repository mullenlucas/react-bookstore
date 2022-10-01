import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchBooks } from '../redux/books/booksAPI';
import Book from './BooksGen';
import Form from './Form';

function BooksLibrary() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.books, shallowEqual);
  return (
    <>
      <div id="books-list" className="f-col">
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </div>
      <Form />
    </>
  );
}

export default BooksLibrary;
