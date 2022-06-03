import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchMovie, getInfo } from '../../redux/actions/movieActions';
import { addMovie } from '../../redux/actions/movieActions';

import SearchResults from '../../components/search-results/search-results.component';
import SearchInput from '../../components/search-input/search-input.component'

import { SearchResultsContainer } from './search.styles'

 class Search extends Component {

    state = {
        title: ''
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.title.length > 0){
        this.props.searchMovie(this.state.title)
        this.setState({
            title: '',
            error: null 
        })} else {
            alert('search field cannot be blank')
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <SearchInput 
                        onChange={this.handleChange} 
                        name='title'
                        type='text'
                        value={this.state.value}
                        label='Search'    
                    />
                </form>
                <SearchResultsContainer>
                    <SearchResults addMovie={this.props.addMovie} searchedMovies={this.props.searchedMovies} getDetails={this.props.getDetails} getInfo={this.props.getInfo} />
                </SearchResultsContainer>
            </div>
        )
    }
}

const mapStateToProps = ({ searchedMovies }) => ({
    searchedMovies: searchedMovies.all,
    movieInfo: searchedMovies.movieInfo
})

const mapDispatchToProps = {
    searchMovie,
    getInfo,
    addMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)