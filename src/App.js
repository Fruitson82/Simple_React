/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import Movie from './Movie.js'
import './App.css';

const movies = [
  {
    "title": "Matrix",
    "poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  },
  {
    "title": "Full Metal Jacket",
    "poster": "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    "title": "Oldboy",
    "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
  },
  {
    "title": "Star Wars",
    "poster": "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
  }

]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          <Movie title={movie.title} poster={movie.poster} />  
        })}
    </div>
    )
  }
}


export default App;
