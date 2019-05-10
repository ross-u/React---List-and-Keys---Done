// src/components/DynamicMovieList.js
import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard';

class DynamicMovieList extends Component {
  //  we use `constructor` as we are setting initial `state` value from the `props`
  constructor(props) {
    super();
    this.state = {
      movies: props.moviesArray
    }
  }

  deleteMovie = (movieIndex) => {
    const moviesCopy = this.state.movies;
    moviesCopy.splice(movieIndex, 1);
    this.setState( {movies: moviesCopy} );
  }

  render() {
    return (
      <ul>
        { 
          this.state.movies.map( (oneMovie, index) => {
            return (
              <ImprovedCard 
                key={index} 
                {...oneMovie}
                clickToDelete={ ()=> this.deleteMovie(index)}
            //  clickToDelete={this.deleteMovie.bind(this, index)}
              />
            ) 
          })
        }
      </ul>
    )
  }
}

export default DynamicMovieList; 