import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import MoviesList from "./components/movies-list";
import EditMovie from "./components/edit-movie";
import CreateMovie from "./components/create-movie";
import CreateUser from "./components/create-user";

function App() {
  return(
    <Router>
      <NavBar />
      <br/>
      <Route path="/" exact component={MoviesList} />
      <Route path="/edit/:id" component={EditMovie} />
      <Route path="/create" component={CreateMovie} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;