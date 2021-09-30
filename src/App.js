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
    ],
    inputSearch: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monsters"
          onChange={ event => {
              this.setState({ inputSearch: event.target.value });
              console.log(this.state);
            }
          } />
        <CardList monsters={ this.state.monsters } />
      </div>
    );
  }
}

export default App;
