import React from 'react'

function SearchResults(props) {

    const searchedMovieCards = props.searchedMovies.map(movie => (
        <li key={movie.id}>
            <h3 >{movie.title} {movie.description}</h3>
            <button onClick={()=> props.addMovie(movie)}>add</button>
        </li>
    ))

    return (
        <div>
            <ul>
               {searchedMovieCards} 
            </ul>
        </div>
    )
}
export default SearchResults;