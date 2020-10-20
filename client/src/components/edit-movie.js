import React, { Component } from "react";
import axios from "axios";

export default class EditMovie extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeComments = this.onChangeComments.bind(this);
        this.onChangeMyRating = this.onChangeMyRating.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeUserScore = this.onChangeUserScore.bind(this);
        this.onChangeOverview = this.onChangeOverview.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            comments: "",
            myRating: "",
            title: "",
            date: "",
            userScore: 0,
            overview: "",
            image: "",
            users: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/movies/" + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    comments: response.data.comments,
                    myRating: response.data.myRating,
                    title: response.data.title,
                    date: response.data.date,
                    userScore: response.data.userScore,
                    overview: response.data.overview,
                    image: response.data.image,
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get("http://localhost:5000/users/")
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                    })
                }
            })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeComments(e) {
        this.setState({
            comments: e.target.value
        });
    }
    onChangeMyRating(e) {
        this.setState({
            myRating: e.target.value
        });
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }
    onChangeUserScore(e) {
        this.setState({
            userScore: e.target.value
        });
    }
    onChangeOverview(e) {
        this.setState({
            overview: e.target.value
        });
    }
    onChangeImage(e) {
        this.setState({
            image: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        const movie = {
            username: this.state.username,
            comments: this.state.comments,
            myRating: this.state.myRating,
            title: this.state.title,
            date: this.state.date,
            userScore: this.state.userScore,
            overview: this.state.overview,
            image: this.state.image,
        }
        console.log(movie);

        axios.post("http://localhost:5000/movies/update/"+this.props.match.params.id, movie)
            .then(res => console.log(res.data))

        this.setState({
            comments: "",
            myRating: "",
            title: "",
            date: "",
            userScore: 0,
            overview: "",
            image: "",
        })
    }


    render() {
        return (
            <div>
                <h3>Edit Movie</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Comments: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.comments}
                            onChange={this.onChangeComments}
                        />
                    </div>
                    <div className="form-group">
                        <label>My Rating: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.myRating}
                            onChange={this.onChangeMyRating}
                        />
                    </div>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>User Score: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.userScore}
                            onChange={this.onChangeUserScore}
                        />
                    </div>
                    <div className="form-group">
                        <label>Overview: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.overview}
                            onChange={this.onChangeOverview}
                        />
                    </div>
                    <div className="form-group">
                        <label>Image: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.image}
                            onChange={this.onChangeImage}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Movie" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}