import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchMovie } from "../redux/actions/movieActions"
import { addMovie } from "../redux/actions/movieActions"
import SearchedMovieItems from './SearchedMovieItems'

 class MoviesForm extends Component {

    state = {
        title: ""
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.title)
        this.props.searchMovie(this.state.title)
        this.setState({
            title: "",
            error: null 
        })
    }


    render() {
        return (
            <div>
                <h1>Add a Movie to the list</h1>
                <form onSubmit={this.handleSubmit}>
                    Movie Name: <input type="text" value={this.state.title} onChange={this.handleChange}/>
                    <input type="submit" value="Add Movie"/>
                </form>
                <div>
                    <ul>
                        <SearchedMovieItems addMovie={this.props.addMovie} searchedMovies={this.props.searchedMovies} />
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({searchedMovies}) => ({
    searchedMovies: searchedMovies.all
})

const mapDispatchToProps = {
    searchMovie,
    addMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesForm)