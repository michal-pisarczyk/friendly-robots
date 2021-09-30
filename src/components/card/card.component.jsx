import React from "react";
import "./card.style.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt="monster"
      src={ `https://robohash.org/${ props.monsterId }?set=set2&size=180x180` } />
    <h2>{ props.monsterName }</h2>
    <p>{ props.monsterEmail }</p>
  </div>
);
