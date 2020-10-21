import React from "react";
import Movie from "./Movie";

// this is a functional component
const MovieList = (props) => {
    return (
        <div className="container">
            <div className="row">
            <div className="d-flex flex-wrap justify-content-around">
                    {/* <div className="p-2"> */}
                        {
                            props.movies.map((movie, i) => {
                                return (
                                    <Movie
                                        key={i}
                                        viewMovieInfo={props.viewMovieInfo}
                                        movieId={movie.id}
                                        image={movie.poster_path}
                                    />
                                )
                            })
                        }
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default MovieList;