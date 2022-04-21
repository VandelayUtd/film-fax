import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovies, deleteMovie } from './redux/actions/movieActions';

import Home from './routes/home/home.component';
import MovieIndex from './components/movie-index/movie-index.component';
import Search from './routes/search/search.component';
import Nav from './components/nav/navbar.component';

import './App.css';

class App extends Component {
  
  componentDidMount() {
    this.props.getMovies()
  }
  render(){

    return (
      <div className='App' >
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/movies' element={<MovieIndex movies={this.props.movies} deleteMovie={this.props.deleteMovie}/>}/>
            <Route exact path='/movies/new' element={<Search />}/>
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
