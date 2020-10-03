
import React, { Component } from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import MovieRow from "./components/MovieRow";

import $ from "jquery";

class App extends Component {
  constructor() {
    super()
    this.state = {}

    this.performSearch()
  }

  performSearch(searchTerm) {
    console.log("Perform search");

    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=ab0daf48e5c9f6b2513a909b48005ede&query=" + searchTerm;

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
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow);
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }

  render() {
    return (
      <div className="App">

        <Navbar />

        {/* Search Form */}
        <div className="search-form">
          <input className="form-control" type="text" placeholder="Enter search term" aria-label="Search" onChange={this.searchChangeHandler.bind(this)} />
        </div>

        {this.state.rows}

      </div>
    );
  }
}

export default App;