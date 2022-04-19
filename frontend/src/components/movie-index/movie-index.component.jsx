import React from 'react'
import MovieCard from '../movie-card/movie-card.component'


const MovieIndex = (props) => {
        return (
            <div>
                <h1>Movies</h1>
                {props.movies.map((movie) => <MovieCard movie={movie} key={movie.id} deleteMovie={props.deleteMovie}/>)}
            </div>
        );
};
export default MovieIndex;
