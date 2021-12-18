import React, { Component } from "react";
import "./card-style.css";
class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <img
          height="180px"
          width="180px"
          alt="monster"
          src={`https://robohash.org/${this.props.monster.id}?set=set2`}
        />
        <h2>{this.props.monster.name}</h2>
        <p>{this.props.monster.email}</p>
      </div>
    );
  }
}

export default Card;
