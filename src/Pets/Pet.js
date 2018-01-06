import React from "react";
import { Link } from "react-router-dom";

const Pet = ({ name, species, age }) => (
  <div>
    <div>
      <h1>{name}</h1>
      <h2> Species: {species}</h2>
      <h2> Age: {age}</h2>
      <Link to="/pets">Back</Link>
    </div>
  </div>
);

export default Pet;
