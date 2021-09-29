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
        <CardList attributeProp="prop-value">
          <h3>child prop</h3>
        </CardList>
        {
          this.state.monsters.map(monster => (
            <h1 key={ monster.id }>{ monster.name }</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
