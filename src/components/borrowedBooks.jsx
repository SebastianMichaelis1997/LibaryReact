import React, { Component } from "react";
class BorrowedBooks extends Component {
  render() {
    const { borrowedBooks, onReturn, onLost } = this.props;
    return (
      <div>
        <button onClick={onReturn} className="btn-primary btn-sm m-2">
          Return
        </button>
        <button onClick={onLost} className="btn-primary m-2 badge-warning">
          Lost
        </button>
      </div>
    );
  }
}

export default BorrowedBooks;
