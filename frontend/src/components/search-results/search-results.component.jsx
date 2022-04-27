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
                            <h2 >{movie.title}</h2>
                            <span>{movie.year}</span>
                            <span>Directed by {movie.directors}</span>
                            <br/>
                            <span>Rated: {movie.contentRating}</span>
                            <span>Staring: {movie.stars}</span>
                            <span>Genres: {movie.genres}</span>
                            <span>Languages: {movie.languages}</span>
                        </Details>
                            <div>
                                <h3>"{movie.tagline}"</h3>
                                <p>In the middle of the night, private eye Philip Marlowe drives his friend Terry Lennox to the Mexican border. When Marlowe returns home police are waiting for him and learns that Terry's wife Sylvia has been killed. He's arrested as an accessory but released after a few days and is told the case is closed since Terry Lennox has seemingly committed suicide in Mexico. Marlowe is visited by mobster Marty Augustine who wants to know what happened to the $350,000 Lennox was supposed to deliver for him. </p>
                            </div>
                            <button onClick={()=> addMovie(movie)}>add</button>
                    </ResultCard>
                ))        
                }
            </ResultsContainer>
        </>
    )
}
export default SearchResults;