import React from "react";

import "../App.css";


// this is a functional component
const Movie = (props) => {
    return (
         <div className="p-2">
            <div className="card movie-card">
                    {
                        props.image === null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="movie poster" style={{width: "100%", height: 360 }} /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="movie poster" style={{width: "100%", height: 360 }} />
                    }
                </div>
                <div className="card-content">
                    <p><a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a></p>
                </div>
        </div>
    )
}

export default Movie;