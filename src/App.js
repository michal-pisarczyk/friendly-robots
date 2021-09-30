import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { InputSearch }
  from "./components/input-search/input-search.component";

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
    const { monsters, inputSearch } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(inputSearch.toLowerCase())
    );

    return (
      <div className="App">
        <InputSearch
          placeholder="Search Monsters"
          handleChange={ event => {
              this.setState({ inputSearch: event.target.value });
            }
          }
        />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
