import React from "react";

// this is a functional component
const Movie = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-large waves-effect waves-block waves-light">
                    {
                        props.image === null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="movie poster" style={{width: "100%", height: 360 }} /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="movie poster" style={{width: "100%", height: 360 }} />
                    }
                </div>
                <div className="card-content">
                    <p><a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a></p>
                </div>
            </div>
        </div>
    )
}

export default Movie;