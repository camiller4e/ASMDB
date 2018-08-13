import React, {Component} from 'react';
import MovieList from '../components/MovieList.js'

class MovieContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [{
        id: 1,
        title: "Hot Rod"
      },
      {
        id: 2,
        title: "Popstar: Never Stop Never Stopping"
      },
      {
        id: 3,
        title: "Celeste and Jessie Forever"
      },
      {
        id: 4,
        title: "7 Days In Hell"
      }]
    }
  }
  render(){
    return <div className="movie container">
      <h2>Now Showing</h2>
      <MovieList data={this.state.data}/>
    </div>
  }
}

export default MovieContainer;
