import React from 'react'
import {  ResultCard, Details } from './search-results.styles';

const SearchResults = ({ searchedMovies, addMovie }) => {

    
    return (
        <>
                {
                    searchedMovies.map(movie => (
                    <ResultCard key={movie.id}>
                        <img src={movie.image} alt={movie.title}/>
                        <span>{movie.title}</span>
                        <span>{movie.year}</span>
                        
                        {/* <Details >
                            <span>Directed by {movie.directors}</span>
                            <br/>
                            <span>Rated: {movie.contentRating}</span>
                            <span>Staring: {movie.stars}</span>
                            <span>Genres: {movie.genres}</span>
                            <span>Languages: {movie.languages}</span>
                        </Details>
                            <div>
                                <h3>"{movie.tagline}"</h3>
                                <p>{movie.plot}</p>
                            </div> */}
                            <button onClick={()=> addMovie(movie)}>add</button>
                            {/* <div>
                                { movie.similars.length > 0 &&
                                    movie.similars.map(movie => (
                                        <span>{movie.title}</span>
                                    ))
                                }
                            </div> */}
                    </ResultCard>
                ))        
                }
        </>
    )
}
export default SearchResults;