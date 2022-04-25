import React from 'react'
import { ResultContainer } from './search-results.styles';

const SearchResults = ({ searchedMovies, addMovie }) => {

    
    return (
        <>
            {
                searchedMovies.map(movie => (
                <ResultContainer key={movie.id}>
                    <img src={movie.image} alt={movie.title}/>
                    <h3 >{movie.title} {movie.description}</h3>
                    <button onClick={()=> addMovie(movie)}>add</button>
                </ResultContainer>
            ))        
            }
        </>
    )
}
export default SearchResults;