import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import AvailableBooks from "./components/availableBooks";

class App extends Component {
  state = {
    availableBooks: [
      //id: number, name: text, value: number
    ],
    borrowedBooks: [],
    currentId: 0
  };

  constructor() {
    super();
    console.log("App - Constrcutor");
  }

  componentDidMount() {
    //Ajax Call
    console.log("App is gesattelt");
  }
  handleDecrement = counter => {
    const availableBooks = [...this.state.availableBooks];
    const index = availableBooks.indexOf(counter);
    availableBooks[index] = { ...counter };
    availableBooks[index].value--;
    this.setState({ availableBooks });
  };
  handleIncrement = counter => {
    const availableBooks = [...this.state.availableBooks];
    const index = availableBooks.indexOf(counter);
    availableBooks[index] = { ...counter };
    availableBooks[index].value++;
    this.setState({ availableBooks });
  };

  handleReset = () => {
    const availableBooks = this.state.availableBooks.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ availableBooks });
  };

  handleDelete = counterID => {
    const availableBooks = this.state.availableBooks.filter(
      c => c.id !== counterID
    );
    this.setState({ availableBooks });
  };

  handleAdd = name => {
    const availableBooks = this.state.availableBooks;
    availableBooks.push({ id: this.state.currentId++, name: name, value: 1 });
    this.setState({ availableBooks });
  };

  render() {
    console.log("App Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalbooks={this.state.availableBooks.filter(c => c.value > 0).length}
        />
        <main className="container">
          <AvailableBooks
            availableBooks={this.state.availableBooks}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
