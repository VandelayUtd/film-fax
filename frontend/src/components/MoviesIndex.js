import React from 'react'
import { connect } from "react-redux"
import { getMovies } from "../redux/actions/movieActions"
import MovieCard from './MovieCard'


class MoviesIndex extends React.Component {


    
    render(){
        return (
            <div>
                <h1>Movies</h1>
                {this.props.movies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        )
    }
}

const mapStateToProps = ({movies}) => ({
    movies: movies.all 
})
export default connect(mapStateToProps, { getMovies })(MoviesIndex)
