import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { InputSearch }
  from "./components/input-search/input-search.component";

class App extends Component {
  state = {
    friends: [
      {
        id: "",
        name: ""
      }
    ],
    inputSearch: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ friends: users }));
  }

  handleChange = event => {
    this.setState({ inputSearch: event.target.value });
  }

  render() {
    const { friends, inputSearch } = this.state;
    const filteredFriends = friends.filter(friend =>
      friend.name.toLowerCase().includes(inputSearch.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Friendly Robots</h1>
        <InputSearch
          placeholder="Search Friends"
          handleChange={ event => this.handleChange(event) }
        />
        <CardList friends={ filteredFriends } />
      </div>
    );
  }
}

export default App;
