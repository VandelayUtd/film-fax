import React, { Component } from 'react';
import { Bars } from 'react-loader-spinner'
import { connect } from 'react-redux';

import { searchMovie, getInfo } from '../../redux/actions/movieActions';
import { addMovie } from '../../redux/actions/movieActions';

import SearchCard from '../../components/search-card/search-card.component';
import SearchInput from '../../components/search-input/search-input.component';

import { SearchResultsContainer } from './search.styles';

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
        console.log(this.props.loading)
        return (
            <> 
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <SearchInput 
                            onChange={this.handleChange} 
                            name='title'
                            type='text'
                            value={this.state.title}
                            label='Search'    
                        />
                    </form>
                    { this.props.loading ?

                    <Bars color='red' />
                        :
                        <SearchResultsContainer>
                            {   this.props.searchedMovies.length > 0 ?
                                this.props.searchedMovies.map(movie => (

                                    <SearchCard
                                        key={movie.id} 
                                        movie={movie} 
                                        addMovie={this.props.addMovie}
                                        getInfo={this.props.getInfo}
                                        movieInfo={this.props.movieInfo} 
                                    />
                        ))
                                : 
                                null 
                        }
                        </SearchResultsContainer>
                    }
                </div>
                {/* <Loader type='pacman'/> */}
            </>
        )
    }
}

const mapStateToProps = ({ searchedMovies }) => ({
    searchedMovies: searchedMovies.all,
    movieInfo: searchedMovies.movieInfo,
    loading: searchedMovies.loading
})

const mapDispatchToProps = {
    searchMovie,
    getInfo,
    addMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
