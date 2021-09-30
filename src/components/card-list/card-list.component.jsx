import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.component";

export const CardList = props => (
  <div className="card-list">
    {
      props.friends.map(friend => (
        <Card
          key={ friend.id }
          friendId={ friend.id }
          friendName={ friend.name }
          friendEmail={ friend.email } />
      ))
    }
  </div>
);
