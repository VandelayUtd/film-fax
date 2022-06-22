import React from 'react'
import { Container, Details, Title, ButtonContainer, SimilarContainer, Similar } from './movie-card-back.styles'


const MovieCardBack = ({movie, handleToggle}) => {

    console.log(movie)
    return (
        <>
            <Container>
                <div>
                    <img  src={movie.image} alt='movie poster' />
                     <Title>{movie.title}</Title>
                    <ButtonContainer>
                        <button onClick={()=> handleToggle} >info</button>
                    </ButtonContainer> 
                </div>
                <Details >
                    <span>Directed by {movie.directors}</span>
                    <br/>
                    <span>Rated: {movie.contentRating}</span>
                    <span>Staring: {movie.stars}</span>
                    <span>Genres: {movie.genres}</span>
                    <span>Languages: {movie.languages}</span>
                    <span>iMDb Rating: {movie.imDbRating}</span>
                    { movie.fullCast ? 
                        <span>Cinematography by: {movie.fullCast.others[2].items[0].name}</span>
                    :
                    null
                    }
                </Details>
                <div>
                    { movie.tagline ? 
                        <h3>"{movie.tagline}"</h3>
                        :
                        null
                    }
                    <p>{movie.plot}</p>
                </div>
                <SimilarContainer>
                    <ul>
                        { movie.similars ? 
                            movie.similars.map(similar => (
    
                                <Similar>{similar.title}
                                    <button>info</button>
                                </Similar>
                            ))
                            :
                            <span>this movie is one of a kind</span>
                        }
                    </ul>
                </SimilarContainer>

            </Container>
        </>
    )
}

export default MovieCardBack
