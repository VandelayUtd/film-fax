import { useSelector,useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getInfo } from '../../redux/actions/movieActions'

import { Details, ButtonContainer, Container, Title, Plot, Overlay, Cover, Similar, SimilarContainer, StyledButton } from './movie-card-back.styles'

const MovieCardBack = ({movie, handleToggle, addMovie, setSimilar, showSimilar}) => {

    const similarMovies = movie.similars.map(movie => JSON.parse(movie))

    const similarMovie = useSelector( state => state.movies.all)
    const dispatch = useDispatch();



    return (
        <>
            <Container>

                <Cover>
                    <img  src={movie.image} alt='movie poster' />
                     <Title>{movie.title}</Title>
                    <ButtonContainer>
                        <StyledButton onClick={()=> handleToggle(movie.id)} >close</StyledButton>
                        <StyledButton onClick={()=> addMovie(movie)}>add</StyledButton>
                    </ButtonContainer> 
                </Cover>

                <Details >
                    <span>Directed by {movie.director}</span>
                    <span>{movie.release_date}</span>
                    <br/>
                    <span>Rated: {movie.contentRating}</span>
                    <span>Runtime: {movie.runtime}</span>
                    <span>Staring: {movie.stars}</span>
                    <span>Genres: {movie.genres}</span>
                    <span>Languages: {movie.languages}</span>
                    <span>iMDb Rating: {movie.imDbRating}</span>
                    <span>Rotten Tomatoes Rating: {movie.rotten_tomatoes_rating}%</span>
                    <span>Director of Photography: {movie.dp}</span>
                    <a href={`https://www.imdb.com/title/${movie.api_id}/technical`} target='_blank' rel='noopener noreferrer'>
                        <button onClick={()=> console.log(movie)}>Technical Specs</button>
                    </a>
                </Details>

                <Plot>
                    <h3>Summary</h3>
                    <p>{ movie.plot && movie.plot.length > 250 ? 
                            `${movie.plot.substring(0, 250)}...`
                        : movie.plot
                        }
                    </p>
                </Plot>

                <SimilarContainer>
                    <ul>
                        { similarMovies ? 
                            similarMovies.map(similar => (
    
                                <Similar key={similar.id} onClick={()=> setSimilar(similar.id)} >{similar.title}</Similar>
                            ))
                            :
                            <span>this movie is one of a kind</span>
                        }
                    </ul>
                </SimilarContainer>
            </Container>
            <Overlay />
        </>
    )
}

export default MovieCardBack

