import React from 'react'
import MovieCard from './MovieCard'


export default function MoviesIndex(props) {
        return (
            <div>
                <h1>Movies</h1>
                {props.movies.map((movie) => <MovieCard movie={movie} key={movie.id} deleteMovie={props.deleteMovie}/>)}
            </div>
        )
}

