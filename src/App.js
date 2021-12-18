import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import CardList from "./component/card-list/card-list-componet";
import SearchBox from "./component/search-box/search-box-component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    //   this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => this.setState({ monsters: user }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.includes(searchField)
    );
    return (
      <div className="App">
        <h1 className="">Monsters </h1>
        <SearchBox placeholder="search" handleSearch={this.handleSearch} />
        <CardList name={filteredMonster}> </CardList>
      </div>
    );
  }
}

export default App;
