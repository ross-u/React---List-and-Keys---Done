// src/App.js
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css'

import listItems from './components/ListDemo';
import MovieList from './components/MovieList';
import DynamicMovieList from './components/DynamicMovieList';

import data from './data';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>

        <h1>List</h1>
        <ul>{ listItems }</ul>

        <h1>Movie List</h1>
        <MovieList></MovieList>

        <h1>Dynamic Movie List</h1>
        <DynamicMovieList moviesArray={data}></DynamicMovieList>
      </div>
    );
  }
}

export default App;