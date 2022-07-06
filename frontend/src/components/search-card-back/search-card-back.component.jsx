import { Details, ButtonContainer, Container, Title, Plot, Overlay, Cover } from './search-card-back.styles'


const SearchCardBack = ({movie, addMovie, setShowInfo }) => {

    const addMovieAndClose = (movie) => {
        console.log(movie)
        addMovie(movie)
        setShowInfo(false)
    }

    
    return (
        <>
            <Container>
                <Cover>
                    <img  src={movie.image} alt='movie poster' />
                     <Title>{movie.title}</Title>
                    <ButtonContainer>
                        <button onClick={()=> setShowInfo(false)}>close</button>
                        <button onClick={()=> addMovieAndClose(movie)}>add</button>
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
                    <p>{ movie.plot && movie.plot.length > 250 ? 
                            `${movie.plot.substring(0, 250)}...`
                        : movie.plot
                        }
                    </p>
                </Plot>
            </Container>
            <Overlay />
        </>
    )
}

export default SearchCardBack