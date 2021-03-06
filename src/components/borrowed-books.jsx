import React, { Component } from "react";
class BorrowedBooks extends Component {
  render() {
    console.log("Komponente wurde gerendert");
    const { borrowedBooks, onReturn, onLost } = this.props;
    return (
      <div>
        <h3>Borrowed Books</h3>

        {this.props.books.map(book => {
          return (
            <React.Fragment>
              <div>
                <span>{book.name}</span>
                <button
                  onClick={() => {
                    onReturn(book);
                  }}
                  className="btn btn-primary btn-sm m-2"
                >
                  Return
                </button>
                <button
                  onClick={() => {
                    onLost(book);
                  }}
                  className="btn btn-primary btn-sm m-2 badge-danger"
                >
                  Lost
                </button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default BorrowedBooks;
