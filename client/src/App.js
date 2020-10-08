import React, { Component } from 'react';
import axios from "axios";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList"; 
import Pagination from "./components/Pagination";
import MovieInfo from "./components/MovieInfo";


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
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

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

    this.setState({ currentMovie: newCurrentMovie })
  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  }

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div>
        <NavBar />

        {this.state.currentMovie === null ? <div><SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} /><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} /> </div> : <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />}

        { this.state.totalResults > 2 && this.state.currentMovie === null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.currentPage} /> : "" }

      </div>
    );
  }
}

export default App;