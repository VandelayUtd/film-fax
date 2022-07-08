import { useSelector } from 'react-redux'
import { Stretch } from 'styled-loaders-react'
import { Details, ButtonContainer, Container, Title, Plot, Overlay, Cover } from './search-card-back.styles'


const SearchCardBack = ({movie, addMovie, setShowInfo }) => {

    const loadingInfo = useSelector(state => state.searchedMovies.loadingInfo)
    const loadingSimilarInfo = useSelector(state => state.movies.loadingSimilarInfo)


    const addMovieAndClose = (movie) => {
        console.log(movie)
        addMovie(movie)
        setShowInfo()
    }

    
    return (
        <>
            <Container>
            { loadingSimilarInfo ? 
                <Stretch color='red' size='100px' />
                : 
                <>
                    <Cover>
                        <img  src={movie.image} alt='movie poster' />
                        <Title>{movie.title}</Title>
                        <ButtonContainer>
                            <button onClick={()=> setShowInfo()}>close</button>
                            <button onClick={()=> addMovieAndClose(movie)}>add</button>
                        </ButtonContainer> 
                    </Cover>
                    { loadingInfo ?
                        <Stretch color='red' size='150px' />
                        : 
                    <>
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
                            { movie.fullCast && movie.fullCast.others[2] ?
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
                            <p>{ movie.plot && movie.plot.length > 280 ? 
                                    `${movie.plot.substring(0, 280)}...`
                                : movie.plot
                                }
                            </p>
                        </Plot>                
                    </>
                }
                </>
            }
            </Container>
            <Overlay />
        </>
    )
}

export default SearchCardBack