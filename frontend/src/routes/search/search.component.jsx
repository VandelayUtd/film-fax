import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchMovie } from '../../redux/actions/movieActions';
import { addMovie } from '../../redux/actions/movieActions';

import SearchResults from '../../components/search-results/search-results.component';
import SearchInput from '../../components/search-input/search-input.component'


 class Search extends Component {

    state = {
        title: ''
    }

    handleChange = (e) => {
        console.log('hit')
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
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
                <div>
                    <ul>
                        <SearchResults addMovie={this.props.addMovie} searchedMovies={this.props.searchedMovies} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Search)