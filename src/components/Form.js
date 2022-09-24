import React from 'react';

function Form() {
  return (
    <div id="add-div">
      <h2>Add a New Book!</h2>
      <form id="add-book-form">
        <input id="title" placeholder="Title" type="text" />
        <input id="author" placeholder="Author" type="text" />
        <button type="button" className="add-btn">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
