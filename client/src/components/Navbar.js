import React, { Component } from "react";
// this allows us to link the different routes
import { Link } from "react-router-dom";

export default class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">Movie App</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">Add Movie</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}