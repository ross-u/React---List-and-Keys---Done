// src/App.js
import React, { Component } from 'react';
import Navbar from './components/Navbar';

import listItems from './components/ListDemo';
import MovieList from './components/MovieList';
import DynamicMovieList from './components/DynamicMovieList';

import data from './data';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <ul>{ listItems }</ul>

        <h2>Movie List</h2>
        <MovieList></MovieList>

        <h2>Dynamic Movie List</h2>
        <DynamicMovieList moviesArray={data}></DynamicMovieList>
      </div>
    );
  }
}

export default App;