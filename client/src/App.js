import React, { Component } from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import MovieRow from "./components/MovieRow";

class App extends Component {
  constructor() {
    super()
    console.log("this is my initializer")

    const movies = [
      {
        id: 0,
        poster_src: "https://images-na.ssl-images-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg",
        title: "Avengers",
        overview: "lorem ipsum"
      },
      {
        id: 1,
        poster_src: "https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._AC_SY741_.jpg",
        title: "Avengers: The Sequel",
        overview: "lorem ipsum"
      },
    ]

    const movieRows = [];

    movies.forEach((movie) => {
      console.log(movie.title);
      const movieRow = <MovieRow movie={movie} />
      movieRows.push(movieRow)
    })

    this.state = { rows: movieRows }
  }

  render() {
    return (
      <div className="App">

        <Navbar />

        {/* Search Form */}
        <div className="search-form">
          <input className="form-control" type="text" placeholder="Enter search term" aria-label="Search" />
        </div>
        {this.state.rows}

      </div>
    );
  }
}

export default App;
