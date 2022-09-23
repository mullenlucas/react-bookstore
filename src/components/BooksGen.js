import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const {
    book,
  } = props;
  return (
    <div className="book">

      <div className="book-info">
        <div className="book-info-h">
          <h4>{ book.genre }</h4>
          <h2>{ book.title }</h2>
          <h3>{ book.author }</h3>
        </div>
        <div className="book-info-actions">
          <button type="button" className="axn-btn" id="comment">Comments</button>
          <button type="button" className="axn-btn" id="remo">Remove</button>
          <button type="button" className="axn-btn" id="edit">Edit</button>
        </div>
      </div>

      <div className="book-progress">
        <h3 className="book-percentage">
          { book.progress }
          {' '}
          %
        </h3>
        <h4 className="book-completion">Completed</h4>
      </div>

      <div className="progression">
        <h3 className="book-chapter">Current Chapter</h3>
        <h2>{ book.chapter }</h2>
        <button type="button" className="prog-btn">Update progress</button>
      </div>

    </div>
  );
}

Book.propTypes = {
  book: PropTypes.string.isRequired,
};

export default Book;
