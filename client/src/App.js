import React, { Component } from 'react';
import axios from "axios";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList"; 


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: ""
    }
    this.apiKey = process.env.REACT_APP_API
  }


  handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
      .then(data => {
        console.log(data.data.results);
        this.setState({
          movies: [...data.data.results]
        })
      })

  }

  // fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
  // .then(data => data.json())
  // .then(data => {
  //   console.log(data);
  //   this.setState({
  //     movies: [...data.results]
  //   })
  // })
  // e.preventDefault();
  //}

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    return (
      <div>
        <NavBar />
        <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <MovieList movies={this.state.movies} /> 
      </div>
    );
  }
}

export default App;