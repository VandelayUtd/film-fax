import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovies } from './redux/actions/movieActions';

import Home from './routes/home/home.component';
import MovieList from './routes/movie-list/movie-list.component';
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
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route index element={<Home/>}/>
            <Route path='/movies' element={<MovieList movies={this.props.movies} />}/>
            <Route path='/movies/new' element={<Search />}/>
          </Route>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({movies: state.movies.all})

const mapDispatchToProps = {
  getMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
