import React, { Component } from "react";
import "./search.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search"
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.handleSearch}
      />
    );
  }
}

export default SearchBox;
