import { Details, ButtonContainer, Container, Title, Plot, Overlay, Cover, Similar, SimilarContainer } from './movie-card-back.styles'


const MovieCardBack = ({movie, handleInfo, addMovie }) => {

    // const similar = JSON.parse(movie.similars[0])

    const similarMovies = movie.similars.map(
        movie => movie 
    )

    console.log(similarMovies[0].id)
    
    return (
        <>
            <Container>
                <Cover>
                    <img  src={movie.image} alt='movie poster' />
                     <Title>{movie.title}</Title>
                    <ButtonContainer>
                        <button onClick={()=> handleInfo(movie.id)} >close</button>
                        <button onClick={()=> addMovie(movie)}>add</button>
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
                    <a href={`https://www.imdb.com/title/${movie.id}/technical`} target='_blank' rel='noopener noreferrer'>
                        <button>Technical Specs</button>
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
                {/* <SimilarContainer>
                    <ul>
                        { movie.similars ? 
                            movie.similars.map(similar => (
    
                                <Similar>{similar.title}
                                    <button onClick={()=> handleInfo(similar.id)}>info</button>
                                </Similar>
                            ))
                            :
                            <span>this movie is one of a kind</span>
                        }
                    </ul>
                </SimilarContainer> */}
            </Container>
            <Overlay />
        </>
    )
}

export default MovieCardBack

