// src/components/Card.js
import React from 'react';

// Destructuring the prop object immediately
const card = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
    </div>
  )
};

export default card;