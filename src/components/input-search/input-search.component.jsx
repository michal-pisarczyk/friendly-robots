import React from "react";
import "./input-search.style.css";

export const InputSearch = ({ placeholder, handleChange }) => (
  <input
    className="input-search"
    type="search"
    placeholder={ placeholder }
    onChange={ handleChange } />
);
