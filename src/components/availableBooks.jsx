import React, { Component } from "react";
import Book from "./book";
class AvailableBooks extends Component {
  render() {
    const {
      onReset,
      availableBooks,
      onDecrement,
      onDelete,
      onIncrement,
      onAdd
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button
          onClick={() => {
            onAdd(document.getElementById("book-name").value);
          }}
          className="btn-primary btn-sm m-2"
        >
          Create Book
        </button>
        <input type="text" className="form-control" id="book-name" />
        {availableBooks.map(book => (
          <Book
            key={book.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}
            book={book}
          />
        ))}
      </div>
    );
  }
}

export default AvailableBooks;
