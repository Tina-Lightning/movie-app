import React, { Component } from 'react';

class MovieRow extends Component {
    render() {
        return (
            <div key={this.props.movie.id} className="card flex-row flex-wrap movie-card">
            <div className="card-header border-0">
              <img className="img-fluid job-img movie-poster" src={this.props.movie.poster_src} alt="movie-poster" />
            </div>
            <div className="card-block px-2">
              <h4 className="card-title">{this.props.movie.title}</h4>
              <p className="card-text">{this.props.movie.overview}</p>
            </div>
          </div>
        )
    }
}

export default MovieRow;