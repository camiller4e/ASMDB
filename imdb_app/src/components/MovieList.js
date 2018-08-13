import React, {Component} from 'react';
import Movie from '../components/Movie.js'

const MovieList= (props) => {

  const movieNodes = props.data.map(movie => {
    return(
      <Movie key={movie.id}>
        {movie.title}
      </Movie>
    );
  })
  return <div className="movie-list">{movieNodes}</div>
}

export default MovieList;
