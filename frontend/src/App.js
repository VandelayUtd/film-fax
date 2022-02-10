import React, { Component } from "react"
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./components/Home"
import MoviesIndex from "./components/MoviesIndex"
import MoviesForm from "./components/MoviesForm"
import Nav from "./components/nav/Nav"
import { connect } from "react-redux"
import { getMovies, deleteMovie } from "./redux/actions/movieActions"



class App extends Component {
  
  componentDidMount() {
    this.props.getMovies()
  }
  render(){

    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/movies" element={<MoviesIndex movies={this.props.movies} deleteMovie={this.props.deleteMovie}/>}/>
            <Route exact path="/movies/new" element={<MoviesForm />}/>
          </Routes>
          <Nav />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({movies: state.movies.all})

const mapDispatchToProps = {
  getMovies,
  deleteMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
