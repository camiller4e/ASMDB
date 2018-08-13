import React, {Component} from 'react';

const Movie = (props) => {
  return(
    <div className="movie">
      <h3 className="movie-title">{props.title}</h3>
      {props.children}
    </div>
  )
}

export default Movie;
