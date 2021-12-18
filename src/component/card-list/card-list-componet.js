import React, { Component } from "react";
import Card from "../card/card-component";
import "./card.css";

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.name.map((monster) => (
          <Card key={monster.id} monster={monster}></Card>
        ))}
      </div>
    );
  }
}

export default CardList;
