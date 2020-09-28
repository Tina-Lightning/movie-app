import React, { Component } from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import MovieRow from "./components/MovieRow";

import $ from "jquery";

class App extends Component {
  constructor() {
    super()
    this.state = {}

    https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}

    //console.log("this is my initializer")

    // const movies = [
    //   {
    //     id: 0,
    //     poster_src: "https://images-na.ssl-images-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg",
    //     title: "Avengers",
    //     overview: "lorem ipsum"
    //   },
    //   {
    //     id: 1,
    //     poster_src: "https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._AC_SY741_.jpg",
    //     title: "Avengers: The Sequel",
    //     overview: "lorem ipsum"
    //   },
    // ]

    // const movieRows = [];

    // movies.forEach((movie) => {
    //   console.log(movie.title);
    //   const movieRow = <MovieRow movie={movie} />
    //   movieRows.push(movieRow)
    // })

    // this.state = { rows: movieRows }

    this.performSearch()
  }

  performSearch() {
    console.log("Perform search");

    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=ab0daf48e5c9f6b2513a909b48005ede&query=marvel";

    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        console.log(searchResults)
        const results = searchResults.results;
        //console.log(results[0])

        const movieRows = [];

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          console.log(movie.poster_path);
          const movieRow = <MovieRow movie={movie} />
          movieRows.push(movieRow);
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    })
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
