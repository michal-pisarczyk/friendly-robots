import React from "react";
import "./card.style.css";

export const Card = props => (
  <div className="card">
    <img
      alt="friend"
      src={ `https://robohash.org/${ props.friendId }?set=set2&size=180x180` } />
    <h2>{ props.friendName }</h2>
    <hr />
    <p>{ props.friendEmail }</p>
  </div>
);
