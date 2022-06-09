import React, { useEffect } from 'react'
// import { getInfo } from '../../redux/actions/movieActions';
import {  ResultCard, ButtonContainer, TextArea} from './search-results.styles';

const SearchResults = ({ searchedMovies, getInfo, addMovie }) => {


    // useEffect(() => {
    //     getDetails()
    // }, [])    

    const handleInfo = (movieId) => {
        console.log('hit')
        getInfo(movieId)
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
                                <button onClick={()=> handleInfo(movie.id)} >info</button>
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