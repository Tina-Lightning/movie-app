import React, { Component } from "react";

export default class CreateMovie extends Component {
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
        this.setState({
            users: ["test user"],
            username: "test user"
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

        window.location = "/";
    }


    render () {
        return (
            <div>
                <p>You are on the Create Movie page</p>
            </div>
        )
    }
}