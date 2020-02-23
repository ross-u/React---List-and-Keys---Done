// src/components/MovieListDemo.js
import React from 'react';
import Card from './Card';

const movies = [
  { _id:"2143lkjgfw8", title: "Jurassic Park", director: "Steven Spielberg" },
  { _id:"jg59lkjgby5", title: "Sharknado", director: "Anthony C. Ferrante" },
  { _id:"a45i3ljamv2", title: "Titanic", director: "James Cameron" }
];

const MovieList = () =>{
  return (
    <ul>
      { 
        movies.map( (oneMovie, index) => <Card key={ movieObj._id } movie={oneMovie} /> ) 
      }
    </ul>
  )
};

export default MovieList; 
