import React, { Component } from "react";

class AvailableBook extends Component {

  constructor() {
    super();
    console.log("App - Constrcutor");
  }

  componentDidMount() {
    console.log("Komponente ist aufgesetzt");
  }

  componentWillUnmount() {
    console.log("Komponente wird gelöscht");
  }

  componentDidUpdate() {
    console.log("Komponente wurde geupdatet");
  }
  render() {
    console.log("Komponente wurde gerendert");
    return (
      <div>

        //Anzeige Buchtitel
        <span>{this.props.book.name}</span>
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

        <button
          onClick={() => this.props.onBorrow(this.props.book)}
          className="btn btn-warning btn-sm m-2"
          disabled={this.props.book.value == 0}
        >
          Lend
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.book.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.book;
    return value > 0 ? "Zero" : value;
  }
}

export default AvailableBook;
