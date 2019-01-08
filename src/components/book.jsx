import React, { Component } from "react";

class Book extends Component {
  /*handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };*/

  render() {
    return (
      <div>
        <h4>{this.props.book.name} </h4>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.book)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.book)}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.book.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.book.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.book;
    return value === 0 ? "Zero" : value;
  }
}

export default Book;
