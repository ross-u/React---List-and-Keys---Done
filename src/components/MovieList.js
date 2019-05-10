// src/components/MovieListDemo.js
import React from 'react';
import Card from './Card';
import shortid from 'shortid';

const movies = [
  { title: "Jurassic Park", director: "Steven Spielberg" },
  { title: "Sharknado", director: "Anthony C. Ferrante" },
  { title: "Titanic", director: "James Cameron" }
];

const MovieList = () =>{
  return (
    <ul>
      { 
        movies.map( (oneMovie, index) => <Card key={shortid.generate()} movie={oneMovie} /> ) 
      }
    </ul>
  )
};

export default MovieList; 