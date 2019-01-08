import React, { Component } from "react";
import Book from "./available-book";
class AvailableBooks extends Component {
  render() {
    const {
      onReset,
      availableBooks,
      onBorrow,
      onDecrement,
      onDelete,
      onIncrement,
      onAdd
    } = this.props;
    return (
      <div>
        <h3>Available books</h3>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button
          onClick={() => {
            onAdd(document.getElementById("book-name").value);
          }}
          className="btn btn-primary btn-sm m-2"
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
            onBorrow={onBorrow}
            book={book}
          />
        ))}
      </div>
    );
  }
}

export default AvailableBooks;
