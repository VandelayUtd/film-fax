import { Details, ButtonContainer, Container, Title, Plot, Overlay, Cover, Similar, SimilarContainer } from './search-card-back.styles'


const SearchCardBack = ({movie, handleInfo, addMovie }) => {

    console.log(movie)
    
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
                    <span>Directed by {movie.directors}</span>
                    <span>{movie.year}</span>
                    <br/>
                    <span>Rated: {movie.contentRating}</span>
                    <span>Runtime: {movie.runtimeStr}</span>
                    <span>Staring: {movie.stars}</span>
                    <span>Genres: {movie.genres}</span>
                    <span>Languages: {movie.languages}</span>
                    <span>iMDb Rating: {movie.imDbRating}</span>
                    {movie.ratings ? 
                            <span>Rotten Tomatoes Rating: {movie.ratings.rottenTomatoes}%</span>
                        : 
                        null
                    }
                    { movie.fullCast ?
                        <span>Cinematography by: {movie.fullCast.others[2].items[0].name ? movie.fullCast.others[2].items[0].name : null }</span>
                        :
                        null
                    }
                    { movie.dp ? 
                        <span>Director of Photography: {movie.dp}</span>
                        :
                        null
                    }
                    <a href={`https://www.imdb.com/title/${movie.id}/technical`} target='_blank' rel='noopener noreferrer'>
                        <button>Technical Specs</button>
                    </a>
                </Details>
                <Plot>
                <h3>Summary</h3>
                    <p>{movie.plot}</p>
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

export default SearchCardBack