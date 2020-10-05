import React, { Component } from 'react';
import axios from "axios";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList"; 
import Pagination from "./components/Pagination";


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1
    } 
    this.apiKey = process.env.REACT_APP_API
  }


  handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
      .then(data => {
        console.log(data.data.results);
        this.setState({
          movies: [...data.data.results],
          totalResults: data.data.total_results
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

  nextPage = (pageNumber) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
      .then(data => {
        console.log(data.data.results);
        this.setState({
          movies: [...data.data.results],
          currentPage: pageNumber
        })
      })
  }

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div>
        <NavBar />
        <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <MovieList movies={this.state.movies} /> 
        { this.state.totalResults > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.currentPage} /> : "" }
      </div>
    );
  }
}

export default App;