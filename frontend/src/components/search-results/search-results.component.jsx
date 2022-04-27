import React from 'react'
import { ResultsContainer, ResultCard, Details } from './search-results.styles';

const SearchResults = ({ searchedMovies, addMovie }) => {

    
    return (
        <>
            <ResultsContainer>
                {
                    searchedMovies.map(movie => (
                    <ResultCard key={movie.id}>
                        <img src={movie.image} alt={movie.title}/>
                        <Details >
                            <h3 >{movie.title}</h3>
                            <span>{movie.description}</span>
                            <p>{movie.plot}</p>
                        </Details>
                            <button onClick={()=> addMovie(movie)}>add</button>
                    </ResultCard>
                ))        
                }
            </ResultsContainer>
        </>
    )
}
export default SearchResults;