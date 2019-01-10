import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import AvailableBooks from "./components/available-books";
import BorrowedBooks from "./components/borrowed-books"

class App extends Component {
  //Single Point Of Truth
  state = {
    availableBooks: [
      //id: number, name: text, value: number
    ],
    borrowedBooks: [],
    currentId: 0
  };

  handleDecrement = counter => {
    const availableBooks = [...this.state.availableBooks];
    const index = availableBooks.indexOf(counter);
    availableBooks[index] = { ...counter };
    availableBooks[index].value--;
    this.setState({ availableBooks });
  };

  handleIncrement = book => {
    const availableBooks = [...this.state.availableBooks];
    const index = availableBooks.indexOf(book);
    availableBooks[index] = { ...book };
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

  handleBorrow = book => {
    let availableBooks = [...this.state.availableBooks];
    const borrowedBooks = [... this.state.borrowedBooks];

    const index = availableBooks.indexOf(book);
    const foundBook = availableBooks[index];
    foundBook.value--;
    borrowedBooks.push(foundBook)
    this.setState({ availableBooks, borrowedBooks });
  };

  handleReturn = book => {
    let availableBooks = [...this.state.availableBooks];
    let borrowedBooks = [...this.state.borrowedBooks];

    const index = borrowedBooks.indexOf(book);
    const foundBook = borrowedBooks[index];

    borrowedBooks = borrowedBooks.filter(b => {
      return b.id !== book.id;
    })

    foundBook.value++;

    this.setState({ availableBooks, borrowedBooks });
  }

  handleLost = book => {
    let borrowedBooks = [... this.state.borrowedBooks];
    borrowedBooks = borrowedBooks.filter(b => {
      return b.id !== book.id;
    })
    this.setState({ borrowedBooks })
  }

  render() {
    console.log("App Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalbooks={this.state.availableBooks.filter(c => c.value > 0).length}
        />
        <main className="container">
          <div className="row">
            <div className="col-6">
              <AvailableBooks
                availableBooks={this.state.availableBooks}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                onAdd={this.handleAdd}
                onBorrow={this.handleBorrow}
              />
            </div>
            <div className="col-6">
              <BorrowedBooks
                books={this.state.borrowedBooks}
                onReturn={this.handleReturn}
                onLost={this.handleLost}
              />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
