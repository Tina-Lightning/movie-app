import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";


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
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({
        movies: [...data.results]
      })
    })
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    return (
        <div>
          <NavBar />
          <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        </div>
    );
  }
}

export default App;