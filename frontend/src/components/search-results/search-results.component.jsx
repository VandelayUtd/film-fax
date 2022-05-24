import React, { useEffect } from 'react'
import {  ResultCard, ButtonContainer, TextArea, Details } from './search-results.styles';

const SearchResults = ({ searchedMovies, moviesInfo, addMovie }) => {

    useEffect(() => {
        getMoviesInfo()
    }, [])    

    const handleInfo = () => {
        console.log(moviesInfo)
    }

    
    return (
        <>
                {
                    searchedMovies.map(movie => (
                    <ResultCard key={movie.id}>
                        <img src={movie.image} alt={movie.title}/>
                        <div>
                            <TextArea>
                                <span>{movie.title}</span>
                                <span>{movie.details}</span>
                            </TextArea>
                            <br/>
                            <ButtonContainer>
                                <button onClick={handleInfo} >info</button>
                                <button onClick={()=> addMovie(movie)}>add</button>
                            </ButtonContainer>
                        </div>
                        
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