import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// a second component, this is a functional react component
// this component doesn't have state or lifecycle methods
const Movie = props => (
    <tr>
        <td>{props.movie.username}</td>
        <td>{props.movie.comments}</td>
        <td>{props.movie.myRating}</td>
        <td>{props.movie.title}</td>
        <td>{props.movie.date}</td>
        <td>{props.movie.userScore}</td>
        <td>{props.movie.overview}</td>
        <td>{props.movie.image}</td>
        <td>
            <Link to={"/edit/"+props.movie._id}>edit</Link> | <a href="#" onClick={() => { props.deleteMovie(props.movie._id) }}>delete</a>
        </td>
    </tr>
)

// this is a class component 
export default class MoviesList extends Component {
    constructor(props) {
        super(props);

        this.deleteMovie = this.deleteMovie.bind(this);

        this.state = { movies: [] };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/movies/")
            .then(response => {
                this.setState({ movies: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteMovie(id) {
        axios.delete("http://localhost:5000/movies/" + id)
            .then(res => console.log(res.data));

        this.setState({
            movies: this.state.movies.filter(el => el._id !== id)
        })
    }

    movieList() {
        return this.state.movies.map(currentmovie => {
            return <Movie movie={currentmovie} deleteMovie={this.deleteMovie} key={currentmovie._id} />
        })
    }

    render() {
        return (
            <div>
                <h3>Saved Movies</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Comments</th>
                            <th>My Rating</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>User Score</th>
                            <th>Overview</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.movieList()}
                    </tbody>
                </table>
            </div>
        )
    }
}