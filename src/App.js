import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  state = {
    monsters: [
      {
        id: "placeholder-id",
        name: "Placeholder Name"
      }
    ]
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={ this.state.monsters } />
      </div>
    );
  }
}

export default App;
